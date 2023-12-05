import React, { useEffect, useState } from "react";
import image from "../img/tło.jpg";
import { Link, useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";


export const LoginPage = () => {
  const [userLogin, setNewUserLogin] = useState("");
  const [userPassword, setNewUserPassword] = useState("");

  const navigate = useNavigate();
 


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login: "+ userLogin+ "password: " + userPassword)
    setNewUserLogin("");
    setNewUserPassword("");
  };


  const [user, setUser] = useState("")


  function handleCallBackResponse(response) {
    var userObject = jwt_decode(response.credential);
    setUser(userObject)
  }

useEffect(() => {
  google.accounts.id.initialize({
    client_id: "999817256709-4qjdln6rhq894n4mf9iebu513m0f8m6c.apps.googleusercontent.com",
    callback: handleCallBackResponse
  })

  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme: "outline"}
  )
}, []);
if(user != ""){
  navigate(`/orders`, {state: user})
  localStorage.setItem("email", user.email)
}



  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover bg-center h-screen flex justify-center content-center items-center brightness-90"
    >
      <div
        className="w-1/3 rounded-lg backdrop-blur-sm backdrop-brightness-90"
        style={{ boxShadow: `0px 0px 54px 12px rgba(66, 68, 90, 1)` }}
      >
        <div className="m-4">
          <h1 className="text-center mb-8 text-5xl">Tirex</h1>
          <form onSubmit={handleSubmit}>
            <div className="w-full px-3 mb-6 mr-2">
              <label
                className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="login"
              >
                Login
              </label>
              <input
                value={userLogin}
                onChange={(e) => setNewUserLogin(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="login"
                type="text"
                placeholder="Login"
                autoComplete="off"
              />
            </div>
            <div className="w-full px-3 mb-2 mr-2">
              <label
                className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                htmlFor="password"
              >
                Hasło
              </label>
              <input
                value={userPassword}
                onChange={(e) => setNewUserPassword(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="password"
                type="text"
                placeholder="Hasło"
                autoComplete="off"
              />
            </div>
            <button className="w-full mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded h-12">
              Zaloguj
            </button>
          </form>
          <div id="signInDiv" className="w-full size-lg mt-3 ml-auto">
          <Link to='/orders/' state={user}></Link>
          </div>
        </div>
      </div>
    </div>
  );
  
};

