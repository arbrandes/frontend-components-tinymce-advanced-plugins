module.exports = {
  extends: './node_modules/@openedx/frontend-build/config/.eslintrc.js',
  settings: {
    // Override TypeScript resolver with Node resolver due to TS version incompatibility
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
