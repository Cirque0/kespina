"use client";

import { useState, useEffect, Fragment } from "react";
import { Transition } from "@headlessui/react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function ArrowDown() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const handleScroll = (event) => {
            setShow(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Transition
            as={Fragment}
            show={show}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <ArrowDownIcon className='absolute bottom-8 h-8 w-8 text-teal-400 animate-bounce' />
        </Transition>
    );
}
