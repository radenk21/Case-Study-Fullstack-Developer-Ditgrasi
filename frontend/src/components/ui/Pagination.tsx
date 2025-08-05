'use client';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon, CaretDownIcon } from '../../../public/assets/icons';
import { useRef, useState } from 'react';
import { Listbox } from '@headlessui/react'


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
    const [activeEllipsisIndex, setActiveEllipsisIndex] = useState<number | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    function getPaginationRange(currentPage: number, totalPages: number): (number | string)[] {
        const maxButtons = 7;
        const pages: (number | string)[] = [];

        if (totalPages <= maxButtons) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const left = Math.max(currentPage - 2, 2);
        const right = Math.min(currentPage + 2, totalPages - 1);

        pages.push(1);

        if (left > 2) {
            pages.push('...');
        }

        for (let i = left; i <= right; i++) {
            pages.push(i);
        }

        if (right < totalPages - 1) {
            pages.push('...');
        }

        pages.push(totalPages);

        return pages;
    }

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    const paginationOptions = [5, 10, 25, 50, 100]

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
                    className="p-[7px] rounded-lg transition-colors duration-100 ring-2 ring-transparent hover:bg-white hover:ring-[#43AD35] active:bg-[#006937] focus:outline-none focus:ring-2 focus:ring-[#43AD35] focus:bg-white"
                >
                    <Image src={ArrowLeftIcon} alt="Previous Page" width={20} height={20} />
                </button>
                {/* prev-button end*/}
                {/* desktop pagination start */}
                <div className="hidden md:flex">
                    {getPaginationRange(page, totalPages).map((p, i) => {
                        if (typeof p === 'number') {
                            return (
                                <button
                                    key={`page-${p}`}
                                    onClick={() => setPage(p)}
                                    className={`px-3 py-1.5 rounded-lg hover:bg-[#ECF7EA] hover:text-[#006937] transition-colors duration-100 ${page === p ? 'bg-[#006937] text-[#FFF9E6]' : 'text-[#3C434A]'
                                        }`}
                                >
                                    {p}
                                </button>
                            );
                        }

                        return (
                            <div key={`ellipsis-${i}`} className="relative">
                                {activeEllipsisIndex === i ? (
                                    <input
                                        ref={inputRef}
                                        type="number"
                                        min={1}
                                        max={totalPages}
                                        placeholder={p}
                                        autoFocus
                                        className="w-[60px] px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#43AD35]"
                                        onBlur={() => setActiveEllipsisIndex(null)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                const value = Number((e.target as HTMLInputElement).value);
                                                if (value >= 1 && value <= totalPages) {
                                                    setPage(value);
                                                }
                                                setActiveEllipsisIndex(null);
                                            }
                                        }}
                                    />
                                ) : (
                                    <button
                                        onClick={() => setActiveEllipsisIndex(i)}
                                        className="px-3 py-1.5 text-[#3C434A] select-none rounded-full transition-colors duration-100 ring-1 ring-transparent hover:bg-white hover:ring-[#43AD35] active:bg-[#006937] focus:outline-none focus:ring-2 focus:ring-[#43AD35] focus:bg-white"
                                    >
                                        ...
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
                {/* desktop pagination end */}
                {/* mobile to tablet pagination start */}
                <div className='flex md:hidden'>
                    <Listbox value={page} onChange={setPage}>
                        <div className="relative">
                            <Listbox.Button
                                className="bg-white px-3 py-2 text-[#3C434A] rounded-lg shadow-[0_1px_2px_0_rgba(0,0,0,0.10)] focus:outline-none focus:ring-2 focus:ring-[#43AD35]"
                                onClick={() => {
                                    setTimeout(() => {
                                        document.activeElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                                    }, 0);
                                }}
                            >
                                {page} dari {totalPages} halaman
                            </Listbox.Button>

                            <Listbox.Options className="absolute mt-1 w-full overflow-auto max-h-[150%] rounded-lg bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.10)] z-50">
                                {pages.map((p) => (
                                    <Listbox.Option
                                        key={p}
                                        value={p}
                                        className={({ active }) =>
                                            `px-4 py-2 cursor-pointer ${active ? 'bg-[#F4F6F7] text-[#006937]' : 'text-[#3C434A]'
                                            }`
                                        }
                                    >
                                        {p} dari {totalPages} halaman
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </div>
                    </Listbox>
                </div>
                {/* mobile to tablet pagination end */}
                {/* next-button start */}
                <button
                    onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
                    hidden={page === totalPages}
                    className="p-[7px] rounded-lg transition-colors duration-100 ring-2 ring-transparent hover:bg-white hover:ring-[#43AD35] active:bg-[#006937] focus:outline-none focus:ring-2 focus:ring-[#43AD35] focus:bg-white"
                >
                    <Image src={ArrowRightIcon} alt="Next Page" width={20} height={20} />
                </button>
                {/* next-button end*/}
            </div>
            <span className='flex flex-row items-center gap-2 px-[17px] sm:px-[22px] py-2 text-[14px] font-[600] text-[#3C434A] bg-[#F4F6F7] rounded-lg shadow-[0_1px_2px_0_rgba(0,0,0,0.10)]'>
                Tampilkan
                <Listbox
                    value={pagination}
                    onChange={(val) => {
                        setPagination(val)
                        setPage(1)
                    }}
                >
                    <div className="relative">
                        <Listbox.Button
                            className="relative w-[80px] cursor-pointer rounded-lg bg-white py-1.5 pl-3 pr-8 text-left shadow-[0_1px_2px_0_rgba(0,0,0,0.10)] focus:outline-none focus:ring-2 focus:ring-[#43AD35] text-sm"
                            onClick={() => {
                                setTimeout(() => {
                                    document.activeElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                                }, 0);
                            }}
                        >
                            <span className="block truncate">{pagination}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <Image src={CaretDownIcon} alt="Caret Down" width={16} height={16} />
                            </span>
                        </Listbox.Button>

                        <Listbox.Options
                            className="absolute mt-1 top-full w-full overflow-auto max-h-[150%] rounded-lg bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.10)] z-50">
                            {paginationOptions.map((option) => (
                                <Listbox.Option
                                    key={option}
                                    value={option}
                                    className={({ active }) =>
                                        `px-4 py-2 cursor-pointer ${active ? 'bg-[#F4F6F7] text-[#006937]' : 'text-[#3C434A]'
                                        }`
                                    }
                                >
                                    {option}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </div>
                </Listbox>
            </span>
        </section>

    )
}