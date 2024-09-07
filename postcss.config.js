import postcssPresetEnv from 'postcss-preset-env';
import postcssMixins from 'postcss-mixins';

export default {
  plugins: [
    postcssMixins({
      mixinsFiles: 'src/styles/mixins.css',
    }),
    postcssPresetEnv({
      stage: 0,
      browsers: 'last 2 versions',
    })
  ]
}