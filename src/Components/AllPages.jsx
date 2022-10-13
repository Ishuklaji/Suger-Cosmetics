import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Makeup from "../Pages/Makeup";

function AllPages
(){
    return <div>
        
       <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="/make-up"  element={<Makeup/>}></Route>
       </Routes>

    </div>
}
export default AllPages
;