# Summary

- 業務外。技術課題を拾ってきて着手する


### AltJS, AltCSS 課題に着手

- 以下 @wakamsha さまのスライドより

```
RMP エンジニア・ブートキャンプ 2017 - ようこそ web フロントエンドの世界へ
https://speakerdeck.com/wakamsha/rmp-enziniabutokiyanpu-2017-youkoso-web-hurontoendofalseshi-jie-he?slide=81

- JavaScript, CSS いずれも何かしらのプリプロセッサを使用すること（※HTMLは任意）
- ローカルサーバーの起動
- ファイルを変更したら自動的にビルド処理が実行
- コンテンツは「Hello, world」でOK
- 自信がある人は 何かしらのフレームワークも導入してみよう

```

- 以下の構成で検討中

```
- タスクランナーとして Gulp を利用する
- Gulpの watch を使って、変更したらビルド処理を実行する
- AltJSとして TypeScript を使う
- AltCSSとして Sass (SCSS) を使う
- フレームワークとして React を使う
```