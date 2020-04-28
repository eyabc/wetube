const path = require('path');
const ExtractCSS = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.join(__dirname, 'static');

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rules: [
      {
        // test 와 일치하는 파일을 찾으면 use 해라 (거꾸로)
        test: /\.(scss)$/,
        use: ExtractCSS.extract([
          {
            // webpack에게 Css를 가르침
            loader: 'css-loader',
          },
          // 특정 플러그인들을 css 에 대해 실행시켜준다., 예를 들어 익스플로러에서 사용될 수 있게 변환해준다. Css 호환
          // https://github.com/postcss/postcss-loader
          {
            loader: 'postcss-loader',
            options: {
              plugin() {
                return [autoprefixer({ browsers: 'cover 99.5%'})]
              }
            }
          },
          // webpack에게 sass-loader 를 가르침 -> scss, sass 를 css 로 바꿔준다.
          {
            loader: 'sass-loader',
          },
        ]),
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: '[name].js',
  },
  plugins: [new ExtractCSS('styles.css')]
};
module.exports = config;