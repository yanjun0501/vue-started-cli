module.exports = {
  devServer: {
    host: 'host', // 替换为本地host
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
      },
    },
  },
};
