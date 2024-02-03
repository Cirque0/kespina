import Logo from "@/components/Logo";
import Image from "next/image";

export default function Home() {
    return (
        <main className='relative flex min-h-screen flex-col items-center px-24'>
            <div className="fixed top-0 flex w-full px-24 py-8">
                <Logo />
            </div>
            <div className="flex flex-col h-screen items-center justify-center gap-4 text-center">
                <p className="text-5xl">Hi, I'm <span className="font-semibold text-teal-500">Kirk Espina</span>,</p>
                <p className="text-2xl font-medium">a full-stack web developer.</p>
                <p className="max-w-2xl">I'm soon to be graduating from the Polytechnic University of the Philippines, and currently freelancing, working on various projects.</p>
            </div>
        </main>
    );
}