const path = require('path')

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: '@import "@Assets/styles/main.scss";',
      },
    },
  },
  webpack: {
    alias: {
      '@Assets': path.resolve(__dirname, 'src/assets/'),
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Layouts': path.resolve(__dirname, 'src/layouts/'),
      '@Pages': path.resolve(__dirname, 'src/pages/'),
      '@Application': path.resolve(__dirname, 'src/application/'),
      '@Services': path.resolve(__dirname, 'src/services/'),
      '@Types': path.resolve(__dirname, 'src/types/'),
      '@Store': path.resolve(__dirname, 'src/store/'),
    },
  },
}
