import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from './component/Dashboard'
import Header from './component/Header'
import Create from "./component/create"

function App() {
 
  return (
   <>
     <BrowserRouter>
      <Routes>
        <Route path='/create' element={<><Header/><Create/></>} />
        <Route path='/' element={<><Header/><Dashboard/></>}/>


        <Route path='/*' element={<><Header/><Dashboard/></>} />
      </Routes>
     
     </BrowserRouter>
   </>
  )
}

export default App
