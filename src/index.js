import React from 'react'
import ReactDOM from 'react-dom'
// import 'antd/dist/antd.css'

import App from './App'
import memoryUtils from './utils/memoryUtils'
import storageUtils from './utils/storageUtils';


const user = storageUtils.getUser()
memoryUtils.user = user

ReactDOM.render(<App />, document.getElementById('root'))