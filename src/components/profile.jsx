import React from "react";

export default function Profile(){
    return (
    <div id="profile" className="section">
        <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
            <div className="font-bold font-secondary text-center mb-12">
                <h4 className="text-secondary mb-3">About Me</h4>
                <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
                    Saya merupakan Siswi di SMKN 6 Jember dengan bidang keahlian REKAYASA PERANGKAT LUNAK kelas 12 yang sebentar lagi akan lulus, dan setelah lulus ntah akan jadi apa saya ini tapi semoga saya selalu banyak rezeki aamiin, wishlist saya ditahun 2024 ini semoga bisa lebih baik dari tahun" sebelumnya dan lebih dewasa tentunya aamiin...
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-between">
                <div className="text-center w-full max-w-[400px] mx-auto mb-[50px]">
                    <div className="min-w-[300px] min-h-[300px] bg-gradient pt-[50px] rounded-full overlow-hidden">
                        <img src="/images/profile.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
