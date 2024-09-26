import React, { useRef, useState } from "react";


import './Navbar.css'
import logo from '../../assets/logo.jpeg'
import underline from '../../assets/underline.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.jpg';
import menu_close from '../../assets/menu_close.png';
const Navbar = () =>{
  const [menu,setMenu] =useState("home");
  const menuRef =useRef();

  const openMenu=()=>{
    menuRef.current.style.right="300px"
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px"
  }
  return(
    <div className="navbar">
<img src={logo} alt="" />
<img  src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
<ul ref={menuRef} className="nav-menu">
<img src={menu_close}alt="" className="nav-mob-close" onClick={closeMenu} />
    <li><AnchorLink className="anchor-link"  href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home" ?<img src={underline} alt=""/>:<></>}</li>
    <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about" ?<img src={underline} alt=""/>:<></>}</li>
    <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work" ?<img src={underline} alt=""/>:<></>}</li>
    <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact" ?<img src={underline} alt=""/>:<></>}</li>
</ul>
<div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect me</AnchorLink></div>
    </div>
  )
  

}
export default Navbar
