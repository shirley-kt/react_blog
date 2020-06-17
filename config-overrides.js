/*
* @file config-overrides.js
* @author shirley
* Based on customize and react-app-rewired config
*/

// Introduce methods from customize-cra
const {
    override,
    addLessLoader
} = require('customize-cra')

module.exports = override(
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1DA57A' },
        }
    })
)