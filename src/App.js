import Home from "./component/Home"
import Footer from "./component/layouts/Footer"
import Header from "./component/layouts/Header"
import './App.css'
import './component/css/style.css'
import { Route,Routes } from "react-router-dom"
import About from "./component/About"
import Team from "./component/Team"
import Contact from "./component/Contact"
import State from "./component/State"
import State1 from "./component/State1"
import Props from "./component/Props"
import { useState } from "react"
import HideShowToggle from "./component/HideShowToggle"
// import PageNotFound from "./component/PageNotFound"
// import Click from "./component/Click"

function App() {
  const[data,setdata] = useState('shubham sharma')
  return (
    <>
    <Header/>
    {/* <Click/> */}
    {/* <State/> */}
    {/* <State1/> */}
    {/* <Props name = {data}/>
    <button onClick={()=>setdata('ram')}>click me</button> */}
    <HideShowToggle/>
    {/* <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/about" element = {<About/>} />
      <Route path="/team" element = {<Team/>} />
      <Route path="/contact" element = {<Contact/>} /> */}
      {/*page not found component always be at the end */}
      {/* <Route path="*" element = {<PageNotFound/>} />
    </Routes> */}

    {/* <Footer/> */}
    </>
  )
}

export default App