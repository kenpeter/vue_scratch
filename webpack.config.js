// Export
module.exports = {
  // Entry
  entry: './src/main.js',

  // ./bundle.js ??
  output: {
    filename: 'bundle.js'
  },
  // import vue from vue
  // instead of import vue form vue/dist/vue.js
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  module: {
    loaders: [
      {
        // test babel loader
        test: /\.js$/,
        // babel loader
        use: {
          loader: 'babel-loader'
        },  
        // exclude big dir
        exclude: /node_modules/
      },
      {
        // load vue
        test: /\.vue$/,
        // exclude big dir
        exclude: /(node_modules|bower_components)/,
        // so can we can use use here
        use: {
          loader: 'vue-loader'
        }
    }
  ]
}
}
