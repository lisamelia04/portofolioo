import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Banner(){
    return (
    <div id="home" className="section container mx-auto max-w-[1200px] px-3 items-center">
        <div className="w-full">
            <div className="block text-center font-black font-bold text-[30px]">
                DESCRIPTION
                <div>
                    <TypeAnimation 
                        sequence={[
                            "HALLOOO MY NAME IS",
                            1000,
                            "LISA AMELIA PUTRI",
                            1000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className="ml-3 text-secondary"
                    />
                </div>
            </div>
            <div className="max-w-[750] text-center mx-auto mt-5">
            Sebelumnya saya minta maaf jika ini biasa saja dan kurang sempurna, sesunnguhnya kesempurnaan itu hanya milik Allah SWT...
        </div>
        </div>
    </div>
    
    )
}

