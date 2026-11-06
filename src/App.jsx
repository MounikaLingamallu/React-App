// import Doctorcard from './Doctorcard'
import Navbar from './Navbar'
import AddDoctor from './AddDoctor'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route  path="/add-doctor" element ={<AddDoctor/>}/>
      </Routes>
      {/* <AddDoctor/> */}
      {/* <Home/> */}
      
      {/* <Doctorcard name="rahmatulla" age="21" gender="male" salary="45000" specialization="TeamLead"/>
      <Doctorcard name="dinesh" age="21" gender="male" salary="45000" specialization="Developer"/>
      <Doctorcard name="mounika" age="21" gender="female" salary="45000" specialization="TeamLead"/>
      <Doctorcard name="supriya" age="21" gender="female" salary="45000" specialization="Developer"/> */}
    
    </div>
  )
}
