// import './App.css';
import AddNewPassword from "./components/AddNewPassword/AddNewPassword";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/register" element={ <RegistrationPage />}></Route>
          <Route path="/forgot" element={<ForgotPassword />} ></Route>
          <Route path="/user/user-resetpassword/:id" element={<AddNewPassword />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
