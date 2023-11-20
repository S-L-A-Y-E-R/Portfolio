"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

import Slideright from "./animate-image";
import Wrapper from "./animate-text";

export default function HeroSection() {
  return (
    <Wrapper>
      <section className="md:h-[90vh] flex items-center">
        <div className="container mx-auto gap-5 flex justify-center md:py-0 py-5 md:flex-row flex-wrap-reverse">
          <div className="md:basis-[48%] self-center text-center md:text-left">
            <h1 className="mb-4 text-xl lg:text-5xl sm:text-5xl font-extrabold">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r 
            from-blue-300 via-blue-400 to-[#0984B1]"
              >
                Hello, i&apos;m
              </span>{" "}
              <br />
              <TypeAnimation
                sequence={[
                  "Ahmed Ashraf",
                  2000,
                  "a Software Engineer",
                  2000,
                  "a Full Stack Web Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className=" text-base sm:text-lg lg:text-xl mb-6 opacity-80">
              A passionate web developer who aims to design and develop
              captivating web experiences with a touch of elegance.
            </p>
            <div className="text-center lg:text-left">
              <Link
                href="https://www.linkedin.com/in/ahmed-ashraf-8643ab216/"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br
               from-blue-300 via-blue-400 to-[#0984B1] hover:bg-slate-200 text-white"
                target="_blank"
              >
                Hire Me
              </Link>
              <Link
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br
               from-blue-300 via-blue-400 to-[#0984B1] hover:bg-slate-800  mt-3"
              >
                <span
                  className="block bg-white hover:text-[#0984B1] hover:bg-blue-100 
                rounded-full px-5 py-2 text-black text-opacity-70"
                >
                  Download CV
                </span>
              </Link>
            </div>
          </div>
          <div className="md:basis-[48%]">
            <Slideright>
              <Image
                src={"/images/photo.jpg"}
                alt="my photo"
                width={400}
                height={400}
                className="ml-auto rounded-2xl"
              />
            </Slideright>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
