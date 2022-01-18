import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  PrivateRoute,
  Products,
  SingleProduct,
  About,
  Home,
  Error,
  Cart,
  Checkout,
  AuthWrapper
} from './pages'

function App () {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/cart' exact>
            <Cart />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route exact path='/products/:id' children={<SingleProduct />} />
          <PrivateRoute path='/checkout' exact>
            <Checkout />
          </PrivateRoute>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
