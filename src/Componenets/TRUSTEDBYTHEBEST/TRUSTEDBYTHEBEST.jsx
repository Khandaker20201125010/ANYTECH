import React, { useEffect, useState } from 'react';

const Counter = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 800; 
        const increment = end / (duration / 50);
        const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(interval);
            }
            setCount(Math.floor(start));
        }, 50);
        return () => clearInterval(interval);
    }, [end]);

    return <span>{count}</span>;
};

const TRUSTEDBYTHEBEST = () => {
    return (
        <div className="text-center py-40">
            <p className="text-blue-500 font-semibold text-lg uppercase mb-5 tracking-widest">Trusted by the Best</p>
            <div className="flex justify-center space-x-44 mt-4">
                <div className="text-center">
                    <p className="text-8xl font-bold text-blue-600">&gt;<Counter end={20} /></p>
                    <p className="text-gray-600 mt-5 font-medium">Years of Experience</p>
                </div>
                <div className="text-center">
                    <p className="text-8xl font-bold text-blue-600"><Counter end={40} />+</p>
                    <p className="text-gray-600 mt-5 font-medium">Financial Institutions</p>
                </div>
                <div className="text-center">
                    <p className="text-8xl font-bold text-blue-600">&gt;<Counter end={200} />m</p>
                    <p className="text-gray-600 mt-5 font-medium">Customers Each</p>
                </div>
            </div>
        </div>
    );
};

export default TRUSTEDBYTHEBEST;
