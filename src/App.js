import React, { Component } from 'react'

import {
    Button
} from 'antd'

// const testHOC = (WrappedComponent) => {
//     return class HOCComponent extends Component {
//         render() {
//             return (
//                 <>
//                     <WrappedComponent />
//                     <div>HOC</div>
//                 </>
//             )
//         }
//     }
// }

// @testHOC
class App extends Component {
    render() {
        return (
            <div>
                App <Button>ANTD</Button>
            </div>
        )
    }
}

export default App
