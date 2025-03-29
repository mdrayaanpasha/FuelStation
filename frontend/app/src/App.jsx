
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SellerLogin from './pages/authentication/seller-auth/SellerLogin'
import SellerRegister from './pages/authentication/seller-auth/SellerRegister'
import BuyerRegister from './pages/authentication/buyer-auth/BuyerRegister'
import BuyerLogin from './pages/authentication/buyer-auth/BuyerLogin'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path='/auth/seller-login' element={<SellerLogin/>} />
          <Route path='/auth/seller-register' element={<SellerRegister/>} />

          <Route path='/auth/buyer-register' element={<BuyerRegister/>} />
          <Route path='/auth/buyer-login' element={<BuyerLogin/>} />

          
        </Routes>
      </Router>
    </>
  )
}

export default App
