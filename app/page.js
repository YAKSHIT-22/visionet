import Image from 'next/image'
import React from 'react'
import login from '@/app/assets/login.svg'
import { FcGoogle } from 'react-icons/fc'

const page = () => {
  return (
    <section className="w-screen min-h-screen md:h-screen  flex items-center justify-center bg-white">
      <div className="w-full h-full flex items-center max-w-screen-2xl mx-auto justify-center p-4">
        <div className="w-full text-black h-full flex items-center justify-center flex-col-reverse md:flex-row p-4 gap-[2rem] lg:gap-[14rem]">
            <div className="w-full md:w-[50%] h-full flex items-center md:items-end justify-center p-2 md:p-4 flex-col gap-[2rem]">
              <div className="w-full lg:w-[85%] h-full flex items-center justify-center p-2 md:p-4 flex-col gap-[2rem]">
              <div className="w-full flex items-start justify-center flex-col gap-[1rem] select-none">
                <h1 className="w-full font-bold text-4xl lg:text-5xl">Welcome Back!</h1>
                <p className="w-full font-normal text-lg lg:text-xl">Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</p>
              </div>
              <div className="w-full flex items-center justify-center flex-col gap-[1rem]">
                <form className='w-full h-full flex items-start justify-center flex-col gap-[1rem]'>
                  <div className="w-full h-full flex items-start justify-center flex-col gap-2">
                    <label className="w-full text-base text-[#757575]">Email</label>
                    <input type="email" placeholder="Enter your email" className="w-full py-4 px-4 border border-slate-500 rounded-md"/>
                  </div>
                  <div className="w-full h-full flex items-start justify-center flex-col gap-2">
                    <label className="w-full text-base text-[#757575]">Password</label>
                    <input type="password" placeholder="Enter your password" className="w-full py-4 px-4 border border-slate-500 rounded-md"/>
                  </div>
                  <div className="w-full h-full flex items-center justify-start">
                    <button className="bg-[#162D3A] text-white px-12 rounded-md py-4 border-2 border-transparent hover:border-2 hover:border-[#162d3a] hover:text-[#162d3a] hover:bg-transparent transition-all duration-500 w-full flex items-center justify-center text-base">Sign in</button>
                  </div>
                </form>
                <div className='w-full h-full gap-[1rem] flex items-center justify-center'>
                  <span className="w-12 h-[2px] bg-[#CFDFE2] rounded-full"></span>
                  <p className="text-base font-light text-[#777777]">or</p>
                  <span className="w-12 h-[2px] bg-[#CFDFE2] rounded-full"></span>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <button className="bg-[#F3F9FA] text-[#313957] px-12 rounded-md py-4 w-full flex items-center justify-center text-base">Sign in with Google<FcGoogle/></button>
                </div>
              </div>
              </div>
            </div>
            <div className="w-full md:w-[50%] h-full flex items-center justify-center">
              <div className="w-full h-80 sm:h-64 sm:w-full md:w-full md:h-full flex items-center justify-center rounded-3xl overflow-hidden">
                 <img src={login.src} alt="login" className="w-full h-full object-cover object-center rounded-3xl hover:scale-110 hover:origin-bottom transition-all duration-1000 aspect-video"/>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default page