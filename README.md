## gulp 建置練習

folk 這個 project 到自己的帳號去，完成之後也是 push 到自己帳號的 project 底下。

#### 目標

pull 下來的 git project 可以在執行下列的步驟之後完成底下列出來的事項：

```
npm install
gulp deploy
```

程式的輸出結果必須輸出在 `dist` 資料夾內，(html, css, js, image)，而 lint 的結果必須出現在 `report` 資料夾中。

#### 目標項目
- 利用 gitignore 避免不需要的檔案被 git 追蹤 (node_modules, sass-cache ... etc)
- sass 轉成 css
- css minify
- sprite 圖處理
- js uglify
- js 檔案合併
- 圖片壓縮優化
- html minify
- sasslint
- eslint or jshint

#### 問答題
- 解釋 `npm install` 在做什麼
- 解釋 `npm install` 加不加 `--save` 或 `--save-dev` 差在哪
- 解釋 `gulpfile.js` 中的 `require` 載入的 module 從何而來
- 解釋目標項目各自是為了什麼理由而做