import Image from "next/image";
import { HomeIcon, ItemSeparatorIcon } from "../../../public/assets/icons";

export default function Header() {
    return (
        <header className="w-full overflow-hidden mx-auto relative">
            <div className="relative min-h-[129px] md:min-h-[132px] lg:min-h-[218px] xl:min-h-[400px]">
                <Image
                    className="absolute top-0 right-0"
                    src="/assets/images/image-header.png"
                    alt="Header Background Image"
                    width={640}
                    height={400}
                    priority
                />
                <Image
                    className="absolute bottom-0 left-0 z-[2] w-[150px] md:w-[500px] lg:w-[1034px]"
                    src="/assets/images/pattern-header.png"
                    alt="Header Background Pattern"
                    width={1034.0128173828125}
                    height={400}
                    priority
                />
                <div className="absolute w-full top-0 left-0 z-[1] rotate-[180deg] responsive-gradient"></div>
                <div className="z-10 absolute px-8 md:px-8 xl:px-26 3xl:px-70 xl:py-[97px]">
                    {/* bread crumb */}
                    <nav className="flex items-center gap-2 py-4 2xl:mb-10 xl:mb-[14px]">
                        <Image src={HomeIcon} alt="Home Icon" width={16} height={16} />
                        <Image src={ItemSeparatorIcon} alt="Item Separator Icon" width={16} height={16} />
                        <span className="text-white">Home</span>
                    </nav>
                    <div>
                        <h1 className="text-white lg:font-extrabold lg:text-[48px] font-bold text-[24px] ">Akreditasi dan Prestasi</h1>
                        <span className="text-[#43AD35] lg:text-[20px] text-[14px]">Universitas Sumatera Utara</span>
                    </div>
                </div>
            </div>
        </header>
    )
}