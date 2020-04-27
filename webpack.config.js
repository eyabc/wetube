// webpack.config.js 는 modern js 파일이 아니라서 import를 쓸 수 없다.
// Node.js에서 파일과 디렉터리 경로를 절대경로로 만들어 주는 방법 path 는 node에 기본적으로 깔려있다.
const path = require('path');
// __dirname 은 현재 프로젝트 디렉토리 이름. Node.js의 전역 변수
const ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.join(__dirname, 'static');

const config = {
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    filename: '[name].[format]'
  }
}
module.exports = config;