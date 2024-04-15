function logMethod(target, key, descriptor) {
  // Save the original method
  const originalMethod = descriptor.value;

  // Redefine the method with custom behavior
  descriptor.value = function (...args) {
    console.log(`Before ${key} is called`);
    const result = originalMethod.apply(this, args);
    console.log(`After ${key} is called`);
    return result;
  };

  return descriptor;
}

function measureTime(target, key, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`Execution time for ${key}: ${end - start} milliseconds`);
    return result;
  };
  return descriptor;
}

class Timer {
  @measureTime // second decorator to be executed
  @logMethod // first decorator to be executed
  heavyComputation() {
    // Simulate a heavy computation
    console.log("Hello, world!");
    for (let i = 0; i < 1000000; i++) {}
  }
}

const timer = new Timer();
timer.heavyComputation(); // Logs execution time
