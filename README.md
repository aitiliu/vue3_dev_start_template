# vue3_typescript_example
## with vue cli & yarn

#Vue3 using typescript and script setup with axios & Pinia
Include:
1. using TypeScript with Composition API
2. using axios , and define how to use with restful api(post/get/put/delete) 
3. using Pinia to store
4. using console.log to check param and debug
5. using localstroage to access token(from api)

# How to use 
1. yarn install
2. yarn serve
3. if you need test api, modify baseURL ( src\api\request.ts)
4. login token test using laravel 9 default login api, you need change it.


給萌新小白看, vue3 如何使用本範例快速上手

1. 使用 vue3 Type Script + Composition Api 寫法 (2023.2 月各網路大神推薦最新的寫法)
2. 使用 axios 定義 restful api (get / post / put / delete ) 串接資料並顯示在頁面
3. 使用 Pinia 進行 全局 store 引用, 註解部分包含清除與更新
4. 練習使用 console.log 去確認參數值與 debug
5. 使用 localstroage 進行 User token 保存(從api取得)