import "../styles/App.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    dispatch({
      type: "GET_USERNAME",
      payload: userName,
    });
    setUserName("");
    navigate("/pokedesk");
  };

  return (
    <div className="container_form">
      <div className="banner">
        <h2>Hello trainer</h2>
        <img
          src="	https://th.bing.com/th/id/OIP.tgiqT8W_Vd3MO9UaswFONQAAAA?pid=ImgDet&w=300&h=514&rs=1"
          alt="coach"
        />
      </div>
      <p className="text_instruction">Register trainer name to start</p>

      <form className="form_login" onSubmit={submit}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <button>
          <b>
            <i className="fa-solid fa-paper-plane"></i>
          </b>
        </button>
      </form>
    </div>
  );
};

export default Login;
