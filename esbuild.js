const { build } = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');

const glob = require('glob');
const entryPoints = glob.sync('./src/**/*.{ts,jsx,js}');

build({
  entryPoints,
  outdir: 'docs/build/',
  bundle: true,
  plugins: [sassPlugin()]
}).then((result) => {
  console.log(`ビルド完了`);
}).catch(() => {
  console.log(`エラー`);
});
