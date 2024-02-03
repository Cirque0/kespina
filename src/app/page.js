import Logo from "@/components/Logo";
import Image from "next/image";
import ArrowDown from "@/components/ArrowDown";

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center sm:px-24 px-8 pb-8'>
            <div className='relative flex flex-col w-full h-screen items-center py-8'>
                <div className='flex w-full'>
                    <Logo />
                </div>

                <div className='flex flex-col mt-48 items-center justify-center gap-2 text-center'>
                    <p className='sm:text-5xl text-3xl'>
                        Hi, I'm{" "}
                        <span className='font-semibold text-teal-400'>
                            Kirk Espina
                        </span>
                        ,
                    </p>
                    <p className='text-lg font-medium underline underline-offset-8 decoration-teal-400'>
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
        </main>
    );
}
