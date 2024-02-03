import { Space_Mono } from "next/font/google";

const font = Space_Mono({ subsets: ['latin'], weight: ['400', '700']});

export default function Section({ header = '', className = '', children, ...props }) {
    return (
        <div {...props} className={'flex flex-col w-full max-w-3xl pt-20 mb-48 ' + className}>
            <p className={'flex font-extrabold sm:text-2xl text-xl gap-4 items-center text-teal-400 tracking-wider ' + font.className}>
                {header} <span className='bg-teal-600 grow h-px'></span>
            </p>
            
            {children}
        </div>
    )
}