
import logo from "../img/logo.png"
import bg from "../img/banner-bg.png";
import headerimg from "../img/header-img.png";
import { motion } from "framer-motion";



export const NavBar = () => {

const bounceTransition = {
    y: {
        duration : 3,
        yoyo: Infinity,
        ease: "easeOut"
    }
}

    return (
    <div className="">

        <div className="absolute w-screen h-screen ">
      
            <img src={bg} alt="" className="w-full h-full object-cover"/>
    
        </div>

        <div className="relative flex justify-between md:ml20 md:mr-20">

            <motion.img src={logo} alt="" className="flex object-contain w-20 ml-5 md:ml-20 md:pt-10"/>
            
            <ul className="flex items-center mr-10">
            
        
                <motion.div 
                whileHover={{ scale: [null, 1.2, 1.1] }}
                transition={{ duration: 0.3 }} 
                className="mr-2 pr-5 sm:text-xl  font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hover:from-pink-500 hover:to-yellow-500 cursor-pointer text-md"
                onClick={() => {
                const anchor = document.querySelector('#skills')
                anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                >Skills</motion.div>      
                
                <motion.div 
                whileHover={{ scale: [null, 1.2, 1.1] }}
                transition={{ duration: 0.3 }} 
                className="mr-2 pr-5 sm:text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hover:from-pink-500 hover:to-yellow-500 cursor-pointer text-md"
                onClick={() => {
                const anchor2 = document.querySelector('#portfolio')
                anchor2.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}
                >Portfolio</motion.div>


                <motion.div 
                whileHover={{ scale: [null, 1.2, 1.1] }}
                transition={{ duration: 0.3 }} 
                className="mr-2 pr-5 sm:text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hover:from-pink-500 hover:to-yellow-500 cursor-pointer text-md"
                onClick={() => {
                const anchor3 = document.querySelector('#contact')
                anchor3.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}
                >Contact Me</motion.div>
            

            </ul>

        </div>

        <div className="md:grid md:grid-cols-2 items-center pt-10">
            <div className="overflow-hidden p-20">
            <h1 className="text-white leading-normal relative break-words text-5xl font-bold lg:text-7xl">Hey ! Im Rémi Web Designer !</h1>
            <p className="text-gray-400 relative pt-3 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="p-10">
            <motion.img transition={bounceTransition} animate={{y:["5%", "-7%"]}} src={headerimg} alt="" className="relative object-contain w-11/12 items-center"/>

            </div>
        </div>


     </div>
    )
}

export default NavBar;




/* <div className="">

<div className="absolute">
   <img src={bg} alt="" className=""/>
</div>


<div className="relative flex justify-between md:ml20 md:mr-20">
    <img src={logo} alt="" className="flex object-contain w-20 ml-5 md:ml-20 md:pt-10"/>
    
    <ul className="flex items-center mr-10">
        <li className="mr-2 pr-5 text-md font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hover:from-pink-500 hover:to-yellow-500 cursor-pointer">Home</li>
        <li className="mr-2 text-md font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hover:from-pink-500 hover:to-yellow-500 cursor-pointer">Portfolio</li>
    </ul>
</div>


</div> */



