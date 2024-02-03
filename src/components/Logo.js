import { Montserrat } from "next/font/google";


const font = Montserrat({ subsets: ['latin'] })

export default function Logo({ className = ''}) {
    return (
        <p className={`${font.className} text-4xl ${className}`}>
            <span className="font-light">K</span>
            <span className="font-semibold">E</span>
        </p>
    );
}
