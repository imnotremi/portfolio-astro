import nav from "../img/nav-icon1.svg"
import nav2 from "../img/nav-icon2.svg";
import nav3 from "../img/nav-icon3.svg";
import {motion} from "framer-motion";



const Footer = () => {

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
}


    return (
    
    <div className="">
    
    <div className="flex justify-center pb-10 cursor-pointer">
    
<div className="p-3">
    <motion.img 
    whileHover={{ scale: [null, 1.5, 1.4] }}
    transition={{ duration: 0.3 }} 
    src={nav} alt="" 
    className="w-8"
    onClick={() => openInNewTab("https://linkedin.com")}    
    />     
</div>    
    
<div className="p-3">
    <motion.img 
    whileHover={{ scale: [null, 1.5, 1.4] }}
    transition={{ duration: 0.3 }} 
    src={nav2} 
    alt="" 
    className="w-8"
    onClick={() => openInNewTab("https://facebook.com")}
    />     
</div>

<div className="p-3"></div>
    <motion.img 
    whileHover={{ scale: [null, 1.5, 1.4] }}
    transition={{ duration: 0.3 }} 
    src={nav3} 
    alt="" 
    className="w-8"
    onClick={() => openInNewTab("https://instagram.com")}
    />     
</div>



    </div>
    )
}

export default Footer