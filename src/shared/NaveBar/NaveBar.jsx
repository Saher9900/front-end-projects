import "./NaveBar.style.css";
import LogoImage from "../../assets/images/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// Icons

import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";

function NaveBar() {
  const [hidden, setHidden] = useState(true)
  const handleDropDown = () => {
    setHidden(!hidden)
  }
  return (
    <div className="NaveBar d-flex align-items-end text-white justify-content-between">
      {/* Left Side */}
      <div className="d-flex align-items-center gap-4">
        {/* Logo Image */}
        <div className="logoImage">
          <img src={LogoImage} alt="Logo Image" />
        </div>
        {/* Icons */}
        <div className="icons-container d-flex align-items-center gap-4">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <span className="en">EN</span>
            <div className="arrow-down d-flex align-items-center justify-content-center">
              <RiArrowDropDownLine />
            </div>
          </div>
          <div className="icon-style">
            <FaRegUser />
          </div>
          <div className="icon-style">
            <FaRegBookmark />
          </div>
          <div className="icon-style position-relative">
            <LuShoppingCart style={{ fontSize: "35px" }} />
            <div className="products-counter">0</div>
          </div>
        </div>
      </div>
      {/* Search Section */}
      <div className="search-section mb-4 d-flex">
        {/* Search Bar */}
        <div className="d-flex align-self-end">
          <div className="search-icon d-flex align-items-center justify-content-center">
            <IoSearchOutline style={{ fontSize: "20px" }} />
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="بحث باسم الكتاب المؤلف او العنوان"
            className="search-bar"
          />
        </div>
      </div>
      {/* Burger Icon */}
      <div onClick={() => handleDropDown()} className="burger-icon align-self-center">
        <BiMenuAltLeft />
      </div>
      {/* NavLinks */}
      <div className={`nav-links d-flex gap-4 ${hidden ? 'align-items-end mb-4 flex-row-reverse me-3' : 'dropDown'}`}>
        <NavLink to={'/'} className="links-styling position-relative text-white text-decoration-none">الرئيسية</NavLink>
        <NavLink to={'allbooks'} className="links-styling position-relative text-white text-decoration-none">جميع الكتب</NavLink>
        <NavLink to={'newproducts'} className="links-styling position-relative text-white text-decoration-none">المنتجات الجديدة</NavLink>
        <NavLink to={'notebooks'} className="links-styling position-relative text-white text-decoration-none">المذكرات</NavLink>
        <NavLink to={'reviews'} className="links-styling position-relative text-white text-decoration-none">المراجعات</NavLink>
      </div>
    </div>
  );
}

export default NaveBar;
