import React from "react";

const getChild = (children, displayName) => {
    return React.Children.map(children, (child) =>
        child.type.name === displayName ? child : null
    );
};

const Experience = ({ children, className = "", ...props }) => {
    const period = getChild(children, "Period");
    const company = getChild(children, "Company");
    const position = getChild(children, "Position");
    const content = getChild(children, "Content");

    return (
        <div
            className={"flex sm:flex-row flex-col gap-4 " + className}
            {...props}
        >
            {period}
            <div className='flex flex-col text-justify'>
                {company}
                {position}
                {content}
            </div>
        </div>
    );
};

const Period = ({ children, className = "", ...props }) => {
    return (
        <p
            className={
                "w-60 mt-1 shrink-0 text-sm uppercase tracking-widest text-gray-400 sm:text-right " +
                className
            }
            {...props}
        >
            {children}
        </p>
    );
};
Experience.Period = Period;

const Company = ({ children, className = "", ...props }) => {
    return (
        <p
            className={"text-xl text-teal-400 font-bold " + className}
            {...props}
        >
            {children}
        </p>
    );
};
Experience.Company = Company;

const Position = ({ children, className = "", ...props }) => {
    return (
        <p className={"font-bold " + className} {...props}>
            {children}
        </p>
    );
};
Experience.Position = Position;

const Content = ({ children, className = "", ...props }) => {
    return (
        <p className={"mt-4 " + className} {...props}>
            {children}
        </p>
    );
};
Experience.Content = Content;

export default Experience;
