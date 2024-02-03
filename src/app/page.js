"use client";

import Logo from "@/components/Logo";
import Image from "next/image";
import ArrowDown from "@/components/ArrowDown";
import profilePic from "../../public/profile_pic.jpg";
import Section from "@/components/Section";
import { Space_Mono } from "next/font/google";
import Experience from "@/components/Experience";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center sm:px-48 px-8 pb-8'>
            <div className='relative flex flex-col w-full h-screen items-center py-16'>
                <div className='flex w-full'>
                    <Logo />
                </div>

                <div className='flex flex-col mt-48 items-center justify-center gap-2 text-center'>
                    <p
                        className={
                            "sm:text-5xl text-3xl " + spaceMono.className
                        }
                    >
                        Hi, I'm{" "}
                        <span className='font-semibold text-teal-400'>
                            Kirk Espina
                        </span>
                        ,
                    </p>
                    <p
                        className={
                            "text-xl font-medium underline underline-offset-8 decoration-teal-400 " +
                            spaceMono.className
                        }
                    >
                        a full-stack web developer.
                    </p>
                    <p className='max-w-2xl mt-4'>
                        I'm soon to be graduating from the Polytechnic
                        University of the Philippines, and currently
                        freelancing, working on various projects.
                    </p>
                </div>

                {/* <ArrowDownIcon className="absolute bottom-8 h-8 w-8 text-teal-400 animate-bounce" /> */}
                <ArrowDown />
            </div>

            <Section header='About Me' id='aboutme'>
                <div className='flex sm:flex-row flex-col sm:items-start items-center pt-8 gap-4'>
                    <Image
                        src={profilePic}
                        alt='Kirk Espina profile picture'
                        className='h-64 w-64 aspect-square object-cover rounded-lg border-r-4 border-b-4 border-teal-400'
                    />

                    <div className='text-justify'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Beatae, magnam ipsum. Accusamus quia beatae
                            vitae. Asperiores ut maiores id nulla voluptate.
                            Vitae nemo aut amet aperiam libero repudiandae
                            excepturi quod!
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Beatae, magnam ipsum. Accusamus quia beatae
                            vitae. Asperiores ut maiores id nulla voluptate.
                            Vitae nemo aut amet aperiam libero repudiandae
                            excepturi quod!
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Beatae, magnam ipsum. Accusamus quia beatae
                            vitae. Asperiores ut maiores id nulla voluptate.
                            Vitae nemo aut amet aperiam libero repudiandae
                            excepturi quod!
                        </p>
                    </div>
                </div>
            </Section>

            <Section header='Work Experience' id='experience'>
                <div className='flex flex-col pt-8'>
                    <Experience>
                        <Experience.Period>
                            Apr 2023 &mdash; Jun 2023
                        </Experience.Period>
                        <Experience.Company>Lamina Studios</Experience.Company>
                        <Experience.Position>
                            Full-stack Web Developer Intern
                        </Experience.Position>
                        <Experience.Content>
                            Collaborated with fellow student interns to design
                            and develop a website for Lamina Studios. Mainly
                            focused on back-end development, while also
                            delivering significant contribution on the
                            front-end.
                        </Experience.Content>
                    </Experience>
                </div>
            </Section>
        </main>
    );
}
