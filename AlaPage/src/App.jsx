import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { EditPage } from "./pages/EditPage";
import { LoginPage } from "./pages/LoginPage";
import { Order } from "./pages/Order";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/orders" element={<MainPage />} />
        <Route path="/edit/" element={<EditPage />} />
        <Route path="/order/:id" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
