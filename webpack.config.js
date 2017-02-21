module.exports = {
  context: __dirname,
  entry: './src/index',
  output: {
    path: './dist/',
    filename: 'index.js'
  },
  
  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel', 
        include: ['src']
      },
      {
        test: /\.json$/, 
        loader: 'json', 
        include: ['src']
      },
    ]
  }
}
