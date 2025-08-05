import Image from 'next/image';
import { CaretUpIcon, MagnifyingGlassIcon } from '../../../public/assets/icons';

interface FilterCardProps {
    isFilterOpen: boolean;
    setIsFilterOpen: (val: boolean) => void;
    selectedStrata: string[];
    setSelectedStrata: React.Dispatch<React.SetStateAction<string[]>>;
    selectedFakultas: string[];
    setSelectedFakultas: React.Dispatch<React.SetStateAction<string[]>>;
    strata: { nama_strata: string }[];
    fakultas: { nama_fakultas: string }[];
    searchFilterFakultas: string;
    setSearchFilterFakultas: React.Dispatch<React.SetStateAction<string>>;
    toggleFilter: (value: string, currentValues: string[], setValues: React.Dispatch<React.SetStateAction<string[]>>) => void;
    setPage: (val: number) => void;
}

export default function FilterCard({
    isFilterOpen,
    setIsFilterOpen,
    selectedStrata,
    setSelectedStrata,
    selectedFakultas,
    setSelectedFakultas,
    strata,
    fakultas,
    searchFilterFakultas,
    setSearchFilterFakultas,
    toggleFilter,
    setPage
}: FilterCardProps) {
    return (
        <>
            {isFilterOpen && (
                <div
                    onClick={() => setIsFilterOpen(false)} // optional: klik backdrop untuk tutup
                    className="fixed inset-0 bg-gray-600 opacity-20 z-40 md:hidden transition-opacity duration-300"
                />
            )}
            <section
                className={`
                    flex gap-4 flex-col h-1/3 fixed bottom-0 overflow-y-auto rounded-lg right-0 px-4 pb-0 w-full z-50 bg-white transition-transform duration-500 ease-in-out
                    md:static md:w-fit md:pb-4 md:h-fit md:ml-auto md:rounded-lg md:shadow-[0_1px_3px_0_rgba(0,0,0,0.10)] 
                    ${isFilterOpen ? 'translate-y-0 md:translate-y-0' : 'translate-y-full md:translate-y-0 md:hidden'}
                  `}
            >
                <span className='sticky top-0 left-0 py-4 z-50 md:static md:py-0 md:mt-4 md:z-auto bg-white font-semibold text-[#038A47]'>Filter</span>
                {/* menu-item */}
                {/* strata filter start */}
                <div>
                    {/* header */}
                    <div className='flex flex-row justify-between items-center'>
                        <span className='font-semibold'>Strata</span>
                        <div className='flex flex-row gap-2 items-center'>
                            {selectedStrata.length > 0 ? (
                                <span className='bg-[#038A47] rounded-full w-4 h-4'></span>
                            ) :
                                <span className='bg-[#DA3E33] rounded-full w-4 h-4'></span>
                            }
                            <Image src={CaretUpIcon} alt="Filter Icon" width={14} height={14} />
                        </div>
                    </div>
                    {/* menu-item list */}
                    <div className='flex flex-row flex-wrap gap-2 mt-2'>
                        {strata.map((item: { nama_strata: string }, index: number) => (
                            <button
                                key={index}
                                className={`text-[14px] font-[400] px-2 py-1 border border-[#C3E6BD] rounded-lg cursor-pointer text-[#006937] 
                                hover:bg-[#006937] hover:text-[#C3E6BD]
                                transition-colors duration-300
                                ${selectedStrata.includes(item.nama_strata) ? 'bg-[#006937] text-[#C3E6BD]' : ''}`}
                                onClick={() => toggleFilter(item.nama_strata, selectedStrata, setSelectedStrata)}
                            >
                                {item.nama_strata}
                            </button>
                        ))}
                    </div>
                </div>
                {/* strata filter end */}

                {/* fakultas filter start */}
                <div className='flex flex-col gap-2'>
                    {/* header */}
                    <div className='flex flex-row justify-between items-center'>
                        <span className='font-semibold'>Fakultas</span>
                        <div className='flex flex-row gap-2 items-center'>
                            {selectedFakultas.length > 0 ? (
                                <span className='bg-[#038A47] rounded-full w-4 h-4'></span>
                            ) :
                                <span className='bg-[#DA3E33] rounded-full w-4 h-4'></span>
                            }
                            <Image src={CaretUpIcon} alt="Filter Icon" width={14} height={14} />
                        </div>
                    </div>
                    {/* search fakultas start */}
                    <div className="relative w-full">
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <Image src={MagnifyingGlassIcon} alt="Search Icon" width={20} height={20} />
                        </span>
                        <input
                            type="text"
                            placeholder="Cari Disini"
                            className="w-full pr-10 pl-4 py-[10.5px] border border-[#B4BFCB] rounded-[4px] text-sm text-[#1E1E1E] focus:outline-none focus:border-[#006937] transition-colors duration-300"
                            value={searchFilterFakultas}
                            onChange={(e) => {
                                setSearchFilterFakultas(e.target.value);
                            }}
                        />
                    </div>
                    {/* search fakultas end */}
                    {/* menu-item list */}
                    <div className='flex flex-col gap-4 h-[240px] overflow-y-auto items-start'>
                        {fakultas.map((item: { nama_fakultas: string }, index: number) => (
                            <div className="flex items-center" key={index}>
                                <div
                                    className={`w-4 h-4 border border-[#d9d9d9] rounded-sm flex items-center justify-center cursor-pointer transition-colors duration-200
                              ${selectedFakultas.includes(item.nama_fakultas) ? 'bg-[#006937]' : ''}`}
                                    onClick={() => {
                                        toggleFilter(item.nama_fakultas, selectedFakultas, setSelectedFakultas)
                                        setPage(1);
                                    }}
                                />
                                <label
                                    htmlFor={`fakultas-${index}`}
                                    className="ms-2 text-gray-900 cursor-pointer"
                                    onClick={() => toggleFilter(item.nama_fakultas, selectedFakultas, setSelectedFakultas)}
                                >
                                    {item.nama_fakultas}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                {/* fakultas filter end*/}
                <button
                    className='w-full bg-[#F4F6F7] text-[#F04438] rounded-lg py-2 font-semibold hover:bg-[#C3E6BD] hover:text-[#006937] transition-colors duration-300'
                    onClick={() => {
                        setSelectedStrata([]);
                        setSelectedFakultas([]);
                        setSearchFilterFakultas('');
                        setPage(1);
                    }}
                >
                    Reset Filter
                </button>
            </section>
        </>
    )
}