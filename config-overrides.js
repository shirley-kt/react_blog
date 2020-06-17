/*
* @file config-overrides.js
* @author shirley
* Based on customize and react-app-rewired config
*/

// Introduce methods from customize-cra
const {
    override,
    addLessLoader,
    fixBabelImports
} = require('customize-cra')

const modifyVars = require('./lessVars')

module.exports = override(
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars
        }
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    })
)