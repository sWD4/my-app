import Home from "./component/Home"
import Footer from "./component/layouts/Footer"
import Header from "./component/layouts/Header"
import './App.css'
import './component/css/style.css'
//import { Form, Route,Routes } from "react-router-dom"
import About from "./component/About"
import Team from "./component/Team"
import Contact from "./component/Contact"
import State from "./component/State"
import State1 from "./component/State1"
import Props from "./component/Props"
import { useState } from "react"
import HideShowToggle from "./component/HideShowToggle"
import Condition from "./component/Condition"
import User from "./component/User"
// import PageNotFound from "./component/PageNotFound"
// import Click from "./component/Click"
import Form from "./component/Form"
import Cstate from "./component/Cstate"
import Constructor from "./component/LifeCycleMethod/Constructor"
import Render1 from "./component/LifeCycleMethod/Render1"
import ComponentDidMount from "./component/LifeCycleMethod/ComponentDidMount"
import UseState from "./component/Hooks/UseState"
import UseEffect from "./component/Hooks/UseEffect"
import UseEffect1 from "./component/Hooks/UseEffect1"
import UseEffectAPI from "./component/Hooks/UseEffectAPI"
import NextedList from "./component/Hooks/NextedList"
import CertificateDisplay from "./component/Hooks/CertificateDisplay"
import Bootstrap from "./component/Hooks/Bootstrap"
import ReuseComponent from "./component/Hooks/ReuseComponent"
function App() {
  // const[data,setdata] = useState('shubham sharma')
  // let name = 'shubham'
  const user=[
    {
      name:"anil",email:"ram@gmail.com",phone:34455
    },
    {
      name:"anil",email:"ram@gmail.com",phone:34455
    },
    {
      name:"anil",email:"ram@gmail.com",phone:34455
    }
   ]
  return (
    <>
    <Header/>
    {/* <Click/> */}
    {/* <State/> */}
    {/* <State1/> */}
    {/* <Props name = {data}/>
    <button onClick={()=>setdata('ram')}>click me</button> */}
    {/* <HideShowToggle/> */}
    {/* <Condition/> */}
    {/* <Form/> */}
    {/* <User n = {name}/> */}
    {/* <Cstate/> */}
    {/* <Constructor/> */}
    {/* <Render1/> */}
    {/* <ComponentDidMount/> */}
    {/* <useState/> */}
    {/* <UseEffect/> */}
    {/* <UseEffect1/> */}
    {/* <UseEffectAPI/> */}
    {/* <NextedList/> */}
    {/* <CertificateDisplay/> */}
    {/* <Bootstrap/> */}
    
    {
        user.map((item,i)=>
        <ReuseComponent data = {item}/>
        // <h1>{item.name}</h1>
        )
    }
   
    
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