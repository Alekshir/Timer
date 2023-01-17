const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

const mainThread = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  mode: 'development',
  devtool: false,

  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: '[name].css',
        chunkFilename: '[id].css'
      }
    )/*,
        new HtmlWebpackPlugin(
          {
            title:'Output Management'
          }
          )*/
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          /*{
            loader: "@teamsupercell/typings-for-css-modules-loader",
            options:{
              modules:true
            }
          },*/
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                localIdentContext: path.resolve(__dirname, 'src'),
                localIdentHashSalt: 'my-custom-hash',
              }
            }
          }
        ]
      },
      {
        test: /\.(png|img|svg|mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].mp3",
              outputPath: './audio'
            }
          }
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};

const webworker = {
  target: "webworker",
  entry: {
    worker: './src/js/worker.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}

module.exports = [mainThread, webworker];

// module.exports = {
//   entry: {
//     main:'./src/index.js',
//     worker:'./src/js/worker.js'
//   },
//   output: {
//     filename: '[name].js',
//     path: path.resolve(__dirname, 'dist')
//   },

//   mode: 'development',
//   devtool:'none',

//   plugins: [
//     new MiniCssExtractPlugin(
//       {
//         filename: '[name].css',
//         chunkFilename: '[id].css'
//       }
//     )/*,
//     new HtmlWebpackPlugin(
//       {
//         title:'Output Management'
//       }
//       )*/
//   ],

//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader:'css-loader',
//             options: {
//               modules: {
//                 mode: 'local',
//                 localIdentName: '[path][name]__[local]--[hash:base64:5]',
//                 context: path.resolve(__dirname, 'src'),
//                 hashPrefix: 'my-custom-hash'
//               }
//             }
//           }
//         ]
//       },
//       {
//         test: /\.(png|img|svg|mp3)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options:{
//               name:"[name].mp3",
//               outputPath:'./audio'
//             }

//           }

//         ]
//       },
//       {
//         test: /\.(js)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader']
//       }

//     ]
//   }

// };