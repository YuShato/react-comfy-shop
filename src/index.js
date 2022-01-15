import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

// dev-uu1jmqjw.us.auth0.com
// xvQjnAeIlgGztU7OtcdJR8fkNGQhEvct

ReactDOM.render(
  <Auth0Provider
    domain='dev-uu1jmqjw.us.auth0.com'
    clientId='xvQjnAeIlgGztU7OtcdJR8fkNGQhEvct'
    // clientId='RCJE8u9No0qj1oUWFaB2nYrle344r8fK'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
)
