import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "../images"
import bg2 from "/Users/remifraiche/Documents/React/first-website/src/img/color-sharp2.png"


const Section3 = () => {

    const [width, setWidth] = useState(0);

    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (

    <div id="portfolio">

        <div className="flex justify-end">
        <div className="absolute mt-96">
            <img src={bg2} alt=""/>
        </div>
        </div>
    
        <div className="relative mt-10 pb-10">

            <div className="text-center text-white font-bold text-6xl pb-5">
                <h1> Portfolio</h1>
            </div>
            <div className="text-center px-5 lg:px-52">
                <p className="text-gray-400 relative pt-3 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. </p>
            </div>

            <motion.div ref={carousel} className="carousel overflow-hidden cursor-grab" whileTap={{cursor: "grabbing"}}>

                <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner-carousel flex sm:mx-20">

                    {images.map(image => {
                        return (

                            <motion.div key={image} className="item sm:min-w-[46rem] min-w-[38rem] p-10">
                                <img src={image} alt="" className="w-full h-full rounded-3xl pointer-events-none"/>
                            </motion.div>

                        );
                    })}

                </motion.div>

            </motion.div>  
            
        </div>

    </div>

    )
}

export default Section3;