import Image from "next/image";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const Project = ({ children, img, title, ...props }) => {
    return (
        <div
            className='group relative md:grid md:grid-cols-12 flex flex-col-reverse items-center md:mb-32 mb-8 gap-4'
            {...props}
        >
            <div className='md:row-start-1 md:group-odd:col-start-1 md:group-odd:col-end-9 md:col-start-5 md:col-end-13 shrink-0 rounded-lg overflow-hidden shadow'>
                <Image
                    src={img.src}
                    alt={img.alt}
                    className='shrink-0 aspect-auto object-cover opacity-80'
                />
            </div>
            <div className='flex flex-col md:row-start-1 md:group-odd:col-start-7 md:group-odd:col-end-13 md:col-start-1 md:col-end-7 z-10 grow md:gap-4 gap-2 shrink-0 md:group-odd:items-end md:group-odd:text-right md:group-even:text-left text-justify'>
                <p
                    className={
                        "md:text-2xl text-xl text-teal-400 font-bold "
                    }
                >
                    {title}
                </p>
                <div className='md:p-4 md:bg-sky-900 text-sm rounded'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Project;
