import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import { Form } from "react-bootstrap";

function Header() {
  const { city, cities, setCity } = useContext(MyContext);

  const changeCity = (e) => {
    const selectedCity = cities.find((i) => i.name === e.target.value);
    setCity(selectedCity);
  };

  return (
    <div className="header-container">
      <select value={city.name} className="city-select" onChange={changeCity}>
        {cities.map((item, i) => (
          <option key={i} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Header;
