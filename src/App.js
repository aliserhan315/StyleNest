import Home from "./routes/Home/Home.page";
import SignIn from "./routes/sign-in/sign-in";
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
    <Route path="/signIn" element={<SignIn/>}></Route>
    </Route>
    
    </Routes>
      );

};

export default App ;