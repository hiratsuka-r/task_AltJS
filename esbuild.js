const { build } = require('esbuild');
const glob = require('glob');
const entryPoints = glob.sync('./src/**/*.{ts,jsx,js}');

build({
  entryPoints,
  outdir: 'public/lib/',
  bundle: true
}).then((result) => {
  console.log(`ビルド完了`);
}).catch(() => {
  console.log(`エラー`);
});
