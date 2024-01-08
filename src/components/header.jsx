import React from "react";

export default function Header() {
    return <div className="container mx-auto max-w-[1200px]">
        <div className="flex justify-between">
            <div className="text-gradient">
                <a href="/">
                    <h1 className="text-[30px] leading-none font-bold">
                        lisAmelia
                    </h1>
                    <h1 className="font-normal leading-none font-bold">
                        Absen 34
                    </h1>
                </a>
            </div>
            <div className="text-gradient">
                <a href="/">
                    <h1 className="text-[30px] leading-none font-bold">
                        XII RPL 1
                    </h1>
                </a>
            </div>
        </div>
    </div>
}
