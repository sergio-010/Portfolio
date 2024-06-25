'use client'

import { dataCounter } from "@/data";

import CountUp from "react-countup";
const CounterServices = () => {
    return (
        <div className="grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:grid-cols-3 md:gap-6">
            {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
                <div key={id} className={`${lineRight ? "border-r" : ""}`}>
                    <div className={`${lineRight &&
                        "px-6 border-2  border-transparent md:border-e-gray-100"} ${lineRightMobile && "md:border-e-gray-100 md:justify-center"}`}>
                        <p className="w-full flex mb-2 text-2xl md:justify-center font-extrabold md:text-4xl text-blue-600">+{<CountUp end={endCounter} start={0} duration={5} />}</p>
                        <p className="text-sm uppercase max-[1000px]">{text}</p>
                    </div>
                </div>

            ))}


        </div>
    );
}

export default CounterServices;