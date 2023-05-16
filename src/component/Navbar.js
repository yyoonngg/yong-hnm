import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
      inputChange(event);
    }
  };
  const goToHome = () => {
    navigate("/");
  };

  const goToLogin = () => {
    if (authenticate == false) {
      navigate(`/login`);
    } else {
      setAuthenticate(false);
      navigate("/");
    }
  };

  const inputChange = (event) => {
    setInput(event.target.value);
    if (event.type == "keypress") {
      //input clear
      setInput("");
    }
  };

  const [width, setWidth] = useState(0);

  return (
    <div>
      <div className="side-menu-area" style={{ width: width }}>
        <button className="close-button" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list">
          {menuList.map((item) => (
            <button>{item}</button>
          ))}
        </div>
      </div>

      <div className="nav-header">
        <div className="open-button">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        <div className="login-area" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} className="login-icon" />
          <div>{authenticate == true ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="logo-area">
        <img className="logo"
          onClick={goToHome}
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
        />
      </div>
      <div className="nav-bar mt-4">
        <ul className="menu-list">
          {menuList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className="input-area">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="제품검색"
            className="input-box"
            value={input}
            onChange={inputChange}
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
