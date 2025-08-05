'use client';

import StrataFilter from '@/components/ui/StrataFilter';
import { fetchAkreditasi, getFakultas, getJenisAkreditasi, getStrata } from '@/lib/api';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GearSixIcon, MagnifyingGlassIcon } from '../../public/assets/icons';
import AkreditasiCard from '@/components/ui/AkreditasiCard';
import FilterCard from '@/components/ui/FilterCard';
import Pagination from '@/components/ui/Pagination';

export default function Home() {
  const [data, setData] = useState([]);
  const [fakultas, setFakultas] = useState([]);
  const [strata, setStrata] = useState([]);
  const [jenisAkreditasi, setJenisAkreditasi] = useState([]);

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [pagination, setPagination] = useState(5);
  const [totalData, setTotalData] = useState(0);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedStrata, setSelectedStrata] = useState<string[]>([]);
  const [selectedFakultas, setSelectedFakultas] = useState<string[]>([]);
  const [searchFilterFakultas, setSearchFilterFakultas] = useState('');

  const toggleFilter = (value: string, currentValues: string[], setValues: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (currentValues.includes(value)) {
      setValues(currentValues.filter((v) => v !== value));
    } else {
      setValues([...currentValues, value]);
    }
  };

  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isLoadingFilter, setIsLoadingFilter] = useState(false);

  const Spinner = () => (
    <div className="w-full flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500" />
    </div>
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingFilter(true);
      try {
        const fakultasData = await getFakultas({ searchFilterFakultas });
        const strataData = await getStrata();
        const jenisAkreditasiData = await getJenisAkreditasi();

        setFakultas(fakultasData);
        setStrata(strataData);
        setJenisAkreditasi(jenisAkreditasiData);
      } catch (error) {
        console.error("Error fetching filter data:", error);
      } finally {
        setIsLoadingFilter(false);
      }
    };

    const loadData = async () => {
      setIsLoadingData(true);
      try {
        const res = await fetchAkreditasi({ search, page, pagination, selectedStrata, selectedFakultas });
        setData(res.data);
        setTotalPages(res.last_page);
        setTotalData(res.total);
      } catch (error) {
        console.error("Error fetching akreditasi:", error);
      } finally {
        setIsLoadingData(false);
      }
    };

    fetchData();
    loadData();
  }, [search, page, pagination, selectedStrata, selectedFakultas, searchFilterFakultas]);

  return (
    <main className="relative px-4 py-8 md:p-8 xl:p-16 xl:px-16 2xl:px-[300px] xl:py-[97px] mx-auto">
      <div className='flex flex-col gap-[16px] md:flex-row md:gap-[64px] md:items-center xl:flex-row xl:gap-[64px] xl:items-center'>
        <h1 className='text-[32px] font-[600] text-[#006937]'>Daftar Akreditasi</h1>
        <p className='text-[16px] font-normal'>Universitas Sumatera Utara terus menjaga dan meningkatkan kualitas pendidikan, dibuktikan dengan akreditasi sebagai bukti komitmen kami untuk memberikan pengalaman akademik dan non akademik terbaik bagi Anda.</p>
      </div>
      <StrataFilter
        strata={strata}
        search={search}
        setSearch={setSearch}
        page={page}
        setPage={setPage}
      />
      <section className='w-full flex flex-col p-4 gap-6 mt-4 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.10)] bg-white'>
        {/* search and filter start */}
        <div className='w-full flex flex-row justify-between'>
          <button className={`flex flex-row gap-1 p-2 ml-[3px] my-[3px] rounded-sm cursor-pointer items-center transition-all duration-200  ${isFilterOpen ? 'bg-[#ECF7EA] ' : 'hover:bg-[#ECF7EA] active:bg-[#ECF7EA]'}`}
            onClick={() => setIsFilterOpen((prev) => !prev)}
          >
            <Image src={GearSixIcon} alt="Gear Icon" width={14} height={14} />
            <span className={`text-[14px] font-[600] capitalize text-left transition-colors duration-200 hover:text-[#006937]  active:text-[#006937] hidden md:inline ${isFilterOpen ? 'text-[#006937]' : ''}`}>
              filter selengkapnya
            </span>
          </button>
          {/* search akreditasi start */}
          <div className="relative w-[285px] md:w-[311px]">
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Image src={MagnifyingGlassIcon} alt="Search Icon" width={20} height={20} />
            </span>
            <input
              type="text"
              placeholder="Cari Nama, Kategori, atau Instansi..."
              className="w-full pr-10 pl-4 py-[10.5px] border border-[#B4BFCB] rounded-[4px] text-sm text-[#1E1E1E] focus:outline-none focus:border-[#006937] transition-colors duration-300"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>
          {/* search akreditasi end */}
d
        </div>
        {/* search and filter end */}

        <div className='w-full flex gap-4'>
          {/* item list start */}
          <section className='w-full flex'>
            {isLoadingData ? (
              <Spinner />
            ) : data.length === 0 ? (
              <div className='w-full flex items-center justify-center p-4'>
                <p className='text-gray-500'>Tidak ada data akreditasi yang ditemukan.</p>
              </div>
            ) : (
              <div className="w-full flex flex-col gap-4">
                {data.map((item: any, index: number) => (
                  <AkreditasiCard key={index} item={item} />
                ))}
              </div>
            )}
          </section>
          {/* item list end */}
          {/* filter card start */}
          <FilterCard
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            selectedStrata={selectedStrata}
            setSelectedStrata={setSelectedStrata}
            selectedFakultas={selectedFakultas}
            setSelectedFakultas={setSelectedFakultas}
            strata={strata}
            fakultas={fakultas}
            searchFilterFakultas={searchFilterFakultas}
            setSearchFilterFakultas={setSearchFilterFakultas}
            toggleFilter={toggleFilter}
            setPage={setPage}
          />
          {/* filter card end */}
        </div>
        {/* pagination start */}
        <Pagination
          totalData={totalData}
          totalPages={totalPages}
          page={page}
          setPage={setPage}
          pagination={pagination}
          setPagination={setPagination}
        />
        {/* pagination end */}
      </section>
      <Image
        className="flex justify-center absolute bottom-[-0.161px] z-[-1] left-0 w-full"
        src="/assets/images/pattern-footer.png"
        alt="Footer Background Pattern"
        width={1997.9947509765625}
        height={320.16070556640625}
        priority
      />
    </main>
  );
}
