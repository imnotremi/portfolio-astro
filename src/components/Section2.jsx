import React from "react";
import img from "../img/contact-img.svg";
import { motion } from "framer-motion";

const Section2 = () => {
    return (
        <div className="py-20 relative flex justify-center" id="contact">
            <div className="px-5 lg:grid lg:grid-cols-2">

                <div className="w-auto sm:px-10 pb-10">
                    <img src={img} alt="" className=""/>
                </div>

                <div className="py-20 container">
                    <div className="text-center">
                        <h1 className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text overflow-hidden text-6xl">
                            Contact-me !
                        </h1>
                        <p className="text-white pt-5 lg:px-6 pb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                        </p>
                    </div>
              
                    <form>
                        <div className="grid grid-cols-2 gap-5 px-5 w-auto">
                            <input 
                            type="text" 
                            className="rounded-2xl border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                            placeholder="First name"
                            >
                            </input>

                            <input 
                            type="text" 
                            className="rounded-2xl border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                            placeholder="Last name"
                            >
                            </input>

                            <input 
                            type="text" 
                            className="rounded-2xl border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                            placeholder="Email"
                            >
                            </input>

                            <input 
                            type="text" 
                            className="rounded-2xl border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                            placeholder="Phone"
                            >
                            </input>

                            <textarea
                                cols="10"
                                rows="5"
                                className="rounded-2xl border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                                placeholder="Write your message..."
                            ></textarea>

                        </div>

                        <div className="flex justify-center">
                        <motion.div whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.3 }} type="submit" value="Send Message" className="py-3 px-3 w-auto text-center focus:outline-none mt-5 text-white font-bold cursor-pointer rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">Send message</motion.div>
                        </div>

                    </form>
                

                </div>

            </div>
        </div>
    )
};

export default Section2;