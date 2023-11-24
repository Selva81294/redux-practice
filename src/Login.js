import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/userSlice";

const Login = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  const dispatch = useDispatch();

  const user = useSelector(state => state.user.value);

const logoutFun = () => {
    dispatch(logout())
    setName("");
    setAge();
    setEmail("");
}
  return (
    <div style={{ marginTop: "10px" }}>
    {
        !user.name ? (
            <div>
            <input
        placeholder="Enter name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br/>
      <input
        placeholder="Enter age..."
        value={age}
        onChange={(e) => setAge(e.target.value)}
      /><br/>
      <input
        placeholder="Enter email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      </div>
        ) : ""
    }
      
      {
        !user.name ? (
            <button type="submit"
            onClick={() =>
              dispatch(
                login({
                  name,
                  age,
                  email,
                })
              )
            }
          >
            Login
          </button>
        ) : ""
      }

      &nbsp;
      {
        user.name ? (
            <button onClick={logoutFun}>Logout</button>
        ) : ""
      }
      
    </div>
  );
};

export default Login;
