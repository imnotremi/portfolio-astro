import img1 from "../img/meter1.svg"
import img2 from "../img/meter2.svg"
import img3 from "../img/meter3.svg"
import bg1 from "/Users/remifraiche/Documents/React/first-website/src/img/color-sharp.png"
import {motion} from "framer-motion"

export const Section1 = () => {
    return (
    
<div id="skills" className="bg-[#121313]">


    <div className="absolute">
        <div className="right-0 mt-96 md:mt-0">
        <img src={bg1} alt="" className="w-full"/>
        </div>
    </div>

        <div className="bg-[#181624] text-center rounded-3xl relative mx-10 lg:mt-28 mt-8">

    <div className=" pt-6 px-5">
        <div>
            <h1 className="font-bold text-6xl text-white">Skills</h1>
        </div>
        <div className="lg:px-52">
            <p className="text-gray-400 relative pt-3 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>
    </div>

            <div className="lg:grid lg:grid-cols-3">


                <div className="pt-10 pb-20 lg:grid lg:grid-rows-2">
                        <div className="flex justify-center">
                            <motion.img whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.3 }} src={img1} alt="" className="lg:w-28"/>
                        </div>
                        <div className="text-white pt-10 px-10 lg:pt-5">
                            <h1>Hello World !</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                </div>

                <div className="pt-10 pb-20 lg:grid lg:grid-rows-2">
                        <div className="flex justify-center">
                            <motion.img whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.3 }} src={img2} alt="" className="lg:w-28"/>
                        </div>
                        <div className="text-white pt-10 px-10 lg:pt-5">
                            <h1>Hello World !</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                </div>
                
                <div className="pt-10 pb-20 lg:grid lg:grid-rows-2">
                        <div className="flex justify-center">
                            <motion.img whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.3 }} src={img3} alt="" className="lg:w-28"/>
                        </div>
                        <div className="text-white pt-10 px-10 lg:pt-5">
                            <h1>Hello World !</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                </div>

            </div>
        




</div>

</div>

    )
}

export default Section1


/* <div className="pt-10 pb-20 items-center lg:grid lg:grid-cols-2">
<div className="flex justify-center">
    <img src={img1} alt=""/>
</div>
<div className="text-white pt-10 px-10 lg:pt-0 lg:pr-36">
    <h1>Hello World !</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>
</div> */



/* <div className="bg-[#181624] rounded-3xl relative max-w-4xl mx-10 lg:mt-28 mt-8">
            <div className="grid grid-rows-3">


                <div className="pt-10 pb-20 items-center lg:grid lg:grid-cols-2">
                        <div className="flex justify-center">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="text-white pt-10 px-10 lg:pt-0 lg:pr-36">
                            <h1>Hello World !</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                </div>


                <div>
                <img />
                    <img />
                    <h1>Hello World !</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div>
                    <img />
                    <h1>Hello World !</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>




</div> */