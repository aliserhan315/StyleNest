import Home from "./routes/Home/Home.page";
import Authentication from "./routes/authentication/authentication";
import { Route, Routes,Outlet } from "react-router-dom";

import NavigationBar from "./routes/navigationbar/navigationbar";

const Shop = () =>{
 return <h1>shop page</h1>
}

function App() {

  return (

    <Routes>
      <Route path="/" element={<NavigationBar/>}>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/signIn" element={<Authentication/>}></Route>
    </Route>
    
    </Routes>
      );

};

export default App ;