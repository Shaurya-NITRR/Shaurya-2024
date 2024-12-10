import React from "react";




function contact(){
    return(
        <div className="wrapper mx-auto pt-28 flex flex-wrap justify-between lg:px-24 md:px-20 px-4 py-12 bg-gradient-to-br from-[#8E0E00]/90 via-[#6B0F1A] to-[#1F1C18] ">
            <div className="background min-w-full min-h-40  mb-12  text-center flex justify-center align-middle flex-col border-b-8 border-b-[#FFD700]">
                <span className="text-5xl  font-bold font-serif text-[#FFD700]  ">CONTACT <span className="text-pretty text-white">US.. !</span></span>
            </div>

            <div className="form-details flex justify-between min-w-full px-4 bg-slate-100/10 py-12 rounded-lg shadow-lg flex-col lg:flex-row">
                <form action="" className="flex flex-col justify-between border-2 border-red-500/45 rounded-md py-8 px-8 w-full lg:w-1/2"> 
                    <span className="text-3xl font-bold font-serif text-[#FFD700] ">LEAVE A FEEDBACK</span>
                    <h3 className="text-xl  text-[#eeb86c]">Your Response will be appreciated!!</h3>
                    <br />
                    <input type="text" placeholder="Your Name*"  className="text-md text-gray-700 border-2 border-white/65 rounded-lg p-2 my-1 outline-2 outline-[#FF2929] bg-inherit"/>
                    <input type="text" placeholder="Registered E_mail*"  className="text-md text-gray-700 border-2 border-white/65  rounded-lg p-2 my-1 outline-2 outline-[#FF2929] bg-inherit"/>
                    <input type="text" placeholder="Subject(optional)"  className="text-md text-gray-700 border-2 border-white/65  rounded-lg p-2 my-1 outline-2 outline-[#FF2929] bg-inherit"/>
                    <textarea name="" id="" cols={30} rows={8} placeholder="Write To Us!!" className="text-lg text-gray-700 border-2 border-white/65 rounded-lg p-2 my-1 outline-2 outline-[#FF2929] bg-inherit"></textarea>
                    <button className="text-lg lg:p-3 p-1 my-3 border-2 border-[#FFD700] bg-inherit text-[#FFD700]  font-semibold rounded-md w-1/2  lg:w-1/4 mx-20 hover:text-slate-50 hover:shadow-md hover:scale-110 transition-all duration-500 ">Send Message</button>
                </form>
                <div className="map pt-20 lg:w-6/12 lg:pr-3 ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27191.890204825148!2d81.605029!3d21.249722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde213f66723%3A0x21543965c50c43c7!2sNIT%20Raipur!5e1!3m2!1sen!2sin!4v1733713798074!5m2!1sen!2sin" width={600} height={500} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-md w-11/12 ml-3 lg:w-full " />
                </div>
            </div>

            
            
        </div>
    )
}
export default contact;