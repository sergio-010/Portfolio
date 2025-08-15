'use client'

import { dataCounter } from "@/data";
import CountUp from "react-countup";

const CounterServices = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            {dataCounter.map(({ id, endCounter, text }) => (
                <div key={id} className="text-center space-y-2">
                    <div className="text-minimal-3xl font-light text-minimal-text">
                        <CountUp end={endCounter} start={0} duration={5} />
                    </div>
                    <p className="text-minimal-sm text-minimal-gray tracking-wide uppercase">
                        {text}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default CounterServices;