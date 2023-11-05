"use client";
import Image from "next/image";
import React from "react";
import login from "@/app/_assets/login.svg";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react"; // Import the signIn function from NextAuth for authentication.
import { useSearchParams, useRouter } from "next/navigation"; // Import Next.js navigation utilities.
import { useState } from "react";

export const Form = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await signIn("credentials", {
        redirect: false,
        name: formValues.email.split("@")[0],
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      });

      setLoading(false);
      setFormValues({ email: "", password: "" });

      console.log(res);
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("invalid email or password");
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <div className="w-full text-black h-full flex items-center justify-center flex-col-reverse md:flex-row p-4 gap-[2rem] lg:gap-[14rem]">
      <div className="w-full md:w-[50%] h-full flex items-center md:items-end justify-center p-0 md:p-4 flex-col gap-[2rem]">
        <div className="w-full lg:w-[85%] h-full flex items-center justify-center p-0 md:p-4 flex-col gap-[2rem]">
          <div className="w-full flex items-start justify-center flex-col gap-[1rem] select-none">
            <h1 className="w-full font-bold text-4xl lg:text-5xl">
              Welcome Back!
            </h1>
            <p className="w-full font-normal text-lg lg:text-xl">
              Today is a new day. It's your day. You shape it. Sign in to start
              managing your projects.
            </p>
          </div>
          <div className="w-full flex items-center justify-center flex-col gap-[1rem]">
            <form
              onSubmit={onSubmit}
              className="w-full h-full flex items-start justify-center flex-col gap-[2rem]"
            >
              {error && (
                <p className="text-center bg-red-300 py-4 mb-6 rounded">
                  {error}
                </p>
              )}
              <div className="flex items-center justify-center flex-col w-full gap-[1rem]">
                <div className="w-full h-full flex items-start justify-center flex-col gap-2">
                  <label className="w-full text-base text-[#757575]">
                    Email
                  </label>
                  <input
                    placeholder="Enter your email"
                    required
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className="w-full py-4 px-4 border border-slate-500 rounded-md"
                  />
                </div>
                <div className="w-full h-full flex items-start justify-center flex-col gap-2">
                  <label className="w-full text-base text-[#757575]">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full py-4 px-4 border border-slate-500 rounded-md"
                  />
                </div>
              </div>
              <div className="w-full h-full flex items-center justify-start">
                <button
                  className="bg-[#162d3a] text-white px-12 rounded-md py-4 border-2 border-transparent hover:border-2 hover:border-[#162d3a] hover:text-[#162d3a] hover:bg-transparent transition-all duration-500 w-full flex items-center justify-center text-base"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="w-full h-full gap-[1rem] flex items-center justify-center">
              <span className="w-12 h-[2px] bg-[#CFDFE2] rounded-full"></span>
              <p className="text-base font-light text-[#777777]">or</p>
              <span className="w-12 h-[2px] bg-[#CFDFE2] rounded-full"></span>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <button
                type="submit"
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                className="bg-[#F3F9FA] text-[#313957] px-12 rounded-md py-4 w-full flex items-center justify-center gap-2 text-base"
              >
                <FcGoogle className="w-6 h-6" />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[50%] h-full flex items-center justify-center">
        <div className="w-full h-80 sm:h-64 sm:w-full md:w-full md:h-full flex items-center justify-center rounded-3xl overflow-hidden">
          <img
            src={login.src}
            alt="login"
            className="w-full h-full object-cover object-center rounded-3xl hover:scale-110 hover:origin-bottom transition-all duration-1000 aspect-video"
          />
        </div>
      </div>
    </div>
  );
};
