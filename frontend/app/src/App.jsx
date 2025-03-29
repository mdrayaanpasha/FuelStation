
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SellerLogin from './pages/authentication/seller-auth/SellerLogin'
import SellerRegister from './pages/authentication/seller-auth/SellerRegister'
import BuyerRegister from './pages/authentication/buyer-auth/BuyerRegister'
import BuyerLogin from './pages/authentication/buyer-auth/BuyerLogin'
import CreateOrder from './pages/orders/createOrder'
import BuyerOrders from './pages/orders/myorders'
import CustomerOrders from './pages/orders/customerOrders'
import LandingPage from './pages/home'
import RoleSelection from './pages/authentication/common'
import { Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route
            path='/auth/seller-login'
            element={
              localStorage.getItem("sellerToken") ? (
                <Navigate to="/" replace />
              ) : (
                <SellerLogin />
              )
            }
          />          
          
          <Route path='/auth/seller-register' element={
            localStorage.getItem("sellerToken") ? (
              <Navigate to="/" replace />
            ) : (
              <SellerRegister />
            )
          }/>

          <Route path='/auth/buyer-register' element={
            localStorage.getItem("buyerToken") ? (
              <Navigate to="/" replace />
            ) : (
              <BuyerRegister />
            )
          } />  
           
           
          <Route path='/auth/buyer-login' element={

            localStorage.getItem("buyerToken") ? (
              <Navigate to="/" replace />
            ) : (
              <BuyerLogin />
            )
          } />

          <Route path='/order' element={
            localStorage.getItem("buyerToken") ? (
              <CreateOrder />
            ) : (
              <Navigate to="/auth/buyer-register" replace />
            )
          } />


          <Route path='/auth/authenticate' element={<RoleSelection/>} />

          <Route path='/myorders' element={
            localStorage.getItem("buyerToken") ? (
              <BuyerOrders />
            ) : (
              <Navigate to="/auth/buyer-register" replace />
            )
            } />

          <Route path='/customer-orders' element={
            localStorage.getItem("sellerToken") ? (
              <CustomerOrders />
            ) : (
              <Navigate to="/auth/seller-login" replace />
            )
            } />

          
        </Routes>
      </Router>
    </>
  )
}

export default App
