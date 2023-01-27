import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './redux/store/store';

import { App } from './App'
import { AppTheme } from './theme/AppTheme';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTheme>
        <Provider store={store}>
          <App />
        </Provider>
      </AppTheme>
    </BrowserRouter>
  </React.StrictMode>,
)
