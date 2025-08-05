import Image from 'next/image';

type AkreditasiItem = {
    jurusan: {
        nama_jurusan: string;
        strata: {
            nama_strata: string;
        };
        fakultas: {
            nama_fakultas: string;
        };
    };
    jenis_akreditasi: {
        tingkat_akreditasi: string;
        nama_akreditasi: string;
    };
    tahun_perolehan: string;
    url_sertifikat: string;
};

export default function AkreditasiCard({ item }: { item: AkreditasiItem }) {
    const downloadUrl = `/assets/images/${item.url_sertifikat}`;

    return (
        <a
            href={downloadUrl}
            download
            title="Klik untuk download sertifikat"
        >
            <div
                className="w-full flex flex-col flex-wrap lg:flex-row items-start lg:items-center p-4 gap-4 lg:gap-8 bg-white hover:bg-[#F4F6F7] rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.10)]"
            >
                {/* data akreditasi start */}
                <div className="flex-col gap-4 w-full flex-1 self-stretch grow flex items-start relative">
                    <div className="flex flex-col md:flex-row gap-4 w-full flex-1 self-stretch grow items-start relative">
                        <span className="relative flex-1 font-semibold w-full md:w-[240px]">
                            {item.jurusan.nama_jurusan}
                        </span>
                        <div className="w-full flex-1 grow flex items-start relative gap-1">
                            <div className="flex flex-col gap-1 w-full sm:h-1/2 flex-1 grow items-start relative">
                                <span className="relative w-fit text-xs text-[#4F5861]">Tingkat</span>
                                <span className='relative self-stretch'>{item.jenis_akreditasi.tingkat_akreditasi}</span>
                            </div>
                            <div className="flex justify-center w-full sm:h-1/2 flex-col gap-1 flex-1 grow items-start relative">
                                <span className="relative w-fit text-xs text-[#4F5861]">Tahun Terbaru</span>
                                <span className='relative self-stretch'>{item.tahun_perolehan}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 w-full flex-1 self-stretch grow items-start relative">
                        <div className="flex flex-col gap-1 w-full md:w-[240px] justify-center flex-1 grow items-start relative">
                            <span className="relative self-stretch text-xs text-[#4F5861]">Akreditasi</span>
                            <span className="px-2 py-1 w-max bg-[#ECF7EA] rounded-lg text-xs text-[#006937]">
                                {item.jenis_akreditasi.nama_akreditasi}
                            </span>
                        </div>
                        <div className="w-full flex-1 grow flex items-start relative gap-1">
                            <div className="flex flex-col gap-1 w-full sm:h-1/2 flex-1 grow items-start relative">
                                <span className="relative w-fit text-xs text-[#4F5861]">Strata</span>
                                <span className='relative self-stretch'>Program {item.jurusan.strata.nama_strata}</span>
                            </div>
                            <div className="flex justify-center w-full sm:h-1/2 flex-col gap-1 flex-1 grow items-start relative">
                                <span className="relative w-fit text-xs text-[#4F5861]">Fakultas</span>
                                <span className='relative self-stretch'>{item.jurusan.fakultas.nama_fakultas}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* data akreditasi end */}
                {/* sertifikat image start */}
                <Image
                    className="rounded-lg hidden lg:block"
                    src={`/assets/images/${item.url_sertifikat}`}
                    alt="Sertifikat"
                    width={240}
                    height={10}
                />
                {/* sertifikat image end */}
            </div>
        </a>

    )
}