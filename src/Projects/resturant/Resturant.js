import React, { useState } from "react";
import "./style.css";
import MenuApi from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    MenuApi.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(MenuApi);
  const [menuList, setMenuList] = useState(uniqueList);

  const fillterItem = (category) => {
    if (category === "All") {
      setMenuData(MenuApi);
      return;
    }
    const updatedList = MenuApi.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  console.log(setMenuList);
  return (
    <>
      <Navbar fillterItem={fillterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
