
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SellerLogin from './pages/authentication/seller-auth/SellerLogin'
import SellerRegister from './pages/authentication/seller-auth/SellerRegister'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path='/auth/seller-login' element={<SellerLogin/>} />
          <Route path='/auth/seller-register' element={<SellerRegister/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
