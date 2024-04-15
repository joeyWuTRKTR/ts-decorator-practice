# Decorator 裝飾器
## 優點：增加功能性和可讀性，減少重複的程式碼
不用改變原本的程式碼，即可套用新的功能。  
例如：Java的AOP、High-order function（Redux的connect）
1. Class
2. Method
3. Property
4. Argument

### 基本
1. tsconfig.json 加上 experimentalDecorators = true
```tsconfig.json
"experimentalDecorators": true
```
2. Decorator從下往上執行

### 應用
1. Throttle
2. Auth
3. Log
4. Measure time
5. Retry


### 缺點
1. Limited browser support
2. JavaScript要透過Babel轉譯（目前在T39第二階段，尚未成為JS規範）


#### 參考資料：
https://www.sitepoint.com/javascript-decorators-what-they-are/
