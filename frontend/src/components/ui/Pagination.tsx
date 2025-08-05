'use client';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../public/assets/icons';

interface PaginationProps {
    totalData: number;
    totalPages: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    pagination: number;
    setPagination: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
    totalData,
    totalPages,
    page,
    setPage,
    pagination,
    setPagination,
}: PaginationProps) {
    return (
        <section className='w-full flex flex-col sm:flex-row gap-2 justify-between items-center'>
            <span className='px-[17px] sm:px-[22px] py-2 text-[14px] font-[600] text-[#3C434A] bg-[#F4F6F7] rounded-lg shadow-[0_1px_2px_0_rgba(0,0,0,0.10)]'>
                Total {totalData} data
            </span>
            <div className='flex items-center gap-2 px-[11px] sm:px-[22px] py-2 text-[14px] font-[600] text-[#3C434A] bg-[#F4F6F7] rounded-lg shadow-[0_1px_2px_0_rgba(0,0,0,0.10)]'>
                {/* prev-button start*/}
                <button
                    onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
                    hidden={page === 1}
                    className={`p-[7px] rounded-lg transition-colors duration-100 ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#ECF7EA] active:bg-[#006937]'}`}
                >
                    <Image src={ArrowLeftIcon} alt="Previous Page" width={20} height={20} />
                </button>
                {/* prev-button end*/}
                {/* desktop to tablet pagination start */}
                <div className='hidden sm:flex'>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={`page-${i}`}
                            onClick={() => setPage(i + 1)}
                            className={`px-3 py-1.5 rounded-lg hover:bg-[#ECF7EA] hover:text-[#006937] transition-colors duration-100 ${page === i + 1 ? 'bg-[#006937] text-[#FFF9E6]' : 'text-[#3C434A]'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
                {/* desktop to tablet pagination end */}
                {/* mobile pagination start */}
                <div className='flex sm:hidden'>
                    <select
                        className='bg-white rounded-sm px-2 py-1.5'
                        name="page"
                        onChange={(e) => {
                            setPage(Number(e.target.value));
                            console.log(`Page changed to: ${e.target.value}`);
                        }}
                    >
                        {Array.from({ length: totalPages }, (_, i) => (
                            <option
                                key={`page-${i}`}
                                value={i + 1}
                                onClick={
                                    () => {
                                        setPage(i + 1)
                                    }
                                }
                                className={`px-3 py-1.5 rounded-lg ${page === i + 1 ? 'bg-[#006937] text-[#FFF9E6]' : 'text-[#3C434A]'}`}
                            >
                                {i + 1} dari {totalPages}
                            </option>
                        ))}
                    </select>
                </div>
                {/* mobile pagination end */}
                {/* next-button start */}
                <button
                    onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
                    hidden={page === totalPages}
                    className={`p-[7px] rounded-lg transition-colors duration-100 ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#ECF7EA] active:bg-[#006937]'}`}
                >
                    <Image src={ArrowRightIcon} alt="Next Page" width={20} height={20} />
                </button>
                {/* next-button end*/}
            </div>
            <span className='flex flex-row items-center gap-2 px-[17px] sm:px-[22px] py-2 text-[14px] font-[600] text-[#3C434A] bg-[#F4F6F7] rounded-lg shadow-[0_1px_2px_0_rgba(0,0,0,0.10)]'>
                Tampilkan
                <select className='bg-white rounded-lg px-2 py-1' name="pagination" value={pagination}
                    onChange={(e) => {
                        setPagination(Number(e.target.value));
                        setPage(1);
                    }}
                >
                    {[5, 10, 25, 50, 100].map((n) => (
                        <option key={n} value={n}>{n}</option>
                    ))}
                </select>
            </span>
        </section>

    )
}