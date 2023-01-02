import './App.css'
import Home from './home'
import About from './about'
import Service from './service'
import Contact from './contact'
import Error from './error'
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";
import {ThemeProvider} from "styled-components"
import Header from './components/header'
import Footer from './components/footer'
import Globalstyle from './Globalstyle'
function App() {
 const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "rgb(24 24 29)",
    white: "fff",
    black: "#212529",
    helper: "#8490ff",
    bg: "rgb(249 249 255)",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98 84 243 0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%)",
    shadow:
      "rgba(0 0 0 0.02) 0px 1px 3px 0px, rgba(27 31 35 0.15) 0px 0px 0px 1px;",
    shawdowSupport: "rgba(0 0 0 0.16) 0px 1px 4px",
  },
  media: { mobile: "768px", tab: "998px" },
 }

 return(
  <div>
    <ThemeProvider theme={theme}> 
    <Globalstyle/>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
      <Footer/>
     </Router>
     </ThemeProvider>
  </div>
  )
}

export default App
