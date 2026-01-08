import './index.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './layouts/footer'
import Home from "./pages/home"
import Navbar from './components/navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
