
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


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path='/auth/seller-login' element={<SellerLogin/>} />
          <Route path='/auth/seller-register' element={<SellerRegister/>} />

          <Route path='/auth/buyer-register' element={<BuyerRegister/>} />
          <Route path='/auth/buyer-login' element={<BuyerLogin/>} />

          <Route path='/order' element={<CreateOrder/>} />
          <Route path='/auth/authenticate' element={<RoleSelection/>} />

          <Route path='/myorders' element={<BuyerOrders/>} />

          <Route path='/customer-orders' element={<CustomerOrders/>} />

          
        </Routes>
      </Router>
    </>
  )
}

export default App
