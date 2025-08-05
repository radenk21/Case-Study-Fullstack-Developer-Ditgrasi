'use client';

import React from 'react';

interface Strata {
    nama_strata: string;
}

interface Props {
    strata: Strata[];
    strataFilter: string;
    setStrataFilter: (value: string) => void;
    page: number;
    setPage: (value: number) => void;
}

const StrataFilter: React.FC<Props> = ({ strata, strataFilter, setStrataFilter, page, setPage }) => {
    return (
        <section className='flex flex-wrap w-full bg-[#ECF7EA] rounded-[8px] p-2 mt-6 gap-2'>
            {strata.map((item, index) => (
                <button
                    key={index}
                    className={`text-[14px] font-[400] px-2 py-1 border border-[#C3E6BD] rounded-lg cursor-pointer text-[#006937] 
                        hover:bg-[#006937] hover:text-[#C3E6BD]
                        transition-colors duration-300
                        ${strataFilter === item.nama_strata ? 'bg-[#006937] text-[#C3E6BD]' : ''}`}
                    onClick={() => {
                        if (strataFilter === item.nama_strata) {
                            setStrataFilter('');
                        } else {
                            setStrataFilter(item.nama_strata);
                        }
                        setPage(1);
                    }}
                >
                    {item.nama_strata}
                </button>
            ))}
        </section>
    );
};

export default StrataFilter;
