import { Link } from "react-router-dom";
import { beritaKelurahan } from "../data/beritaKelurahan";

export default function HomeSection() {
  const highlightBerita = beritaKelurahan.slice(0, 3);

  return (
    <section className="bg-[#F5F7FA] py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 md:px-0">
        {/* TENTANG KELURAHAN */}
        <div className="grid gap-8 md:grid-cols-[1.4fr_minmax(0,1fr)] md:items-start">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-[#0A7A45]">
              Tentang Kelurahan
            </h2>
            <p className="text-base leading-relaxed text-gray-800">
              Kelurahan Lenteng Agung merupakan bagian dari Kecamatan Jagakarsa,
              Jakarta Selatan, yang berperan sebagai pusat pelayanan administrasi
              dan kemasyarakatan bagi warga setempat. Dengan semangat gotong
              royong, kelurahan ini berkomitmen mewujudkan pelayanan publik yang
              cepat, transparan, dan ramah, serta menciptakan lingkungan yang
              bersih, aman, dan harmonis bagi seluruh masyarakatnya.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="h-56 w-full max-w-sm overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/about_kel.png"
                alt="Kelurahan Lenteng Agung"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* BERITA KELURAHAN */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-[#0A7A45]">
              Berita Kelurahan
            </h2>

            <Link
              to="/berita"
              className="text-sm font-medium text-[#0A7A45] underline underline-offset-4 hover:opacity-80"
            >
              Lihat berita lainnya
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlightBerita.map((item) => (
              <article
                key={item.id}
                className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg"
              >
                <div className="relative h-44 w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A7A45] to-[#0A7A45]/70 px-4 py-3">
                    <p className="text-[11px] font-semibold uppercase leading-snug text-white">
                      {item.label}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                  <p className="mb-1 text-[11px] text-gray-500">
                    {item.date}
                  </p>
                  <h3 className="mb-2 text-sm font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
