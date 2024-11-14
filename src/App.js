import Home from "./routes/Home/Home.page";
import Authentication from "./routes/authentication/authentication";
import { Route, Routes,Outlet } from "react-router-dom";

import NavigationBar from "./routes/navigationbar/navigationbar";
import Checkout from "./routes/checkout/checkout";
import Shop from "./routes/Shop/shop.page";

function App() {

  return (

    <Routes>
      <Route path="/" element={<NavigationBar/>}>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/checkOut" element={<Checkout/>}></Route>
    <Route path="/signIn" element={<Authentication/>}></Route>
    </Route>
    
    </Routes>
      );

};

export default App ;