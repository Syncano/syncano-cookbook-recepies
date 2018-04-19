import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Syncano from '@syncano/client'
import {LoginForm} from '@syncano-components/login-form'
import {SyncanoContext, withSyncano} from '@syncano/react-context'

const syncano = new Syncano('YOUR_INSTANCE_NAME')
const MyLoginForm = withSyncano(LoginForm)

ReactDOM.render(
  <SyncanoContext.Provider value={syncano}>
    <MyLoginForm />
  </SyncanoContext.Provider>, 
  document.getElementById('root')
)