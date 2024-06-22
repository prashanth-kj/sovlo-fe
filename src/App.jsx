import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./component/dashboard"
import Create from "./component/create"
import Header from "./component/Header"

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
