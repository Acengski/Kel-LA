import { beritaKelurahan } from "../data/beritaKelurahan";

export default function BeritaPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-12 pt-6 md:pt-8">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        {/* Header konsisten style */}
        <div className="mb-6">
          <p className="text-xs font-medium uppercase text-gray-500">
            Informasi
          </p>
          <h1 className="mt-1 text-3xl font-semibold text-[#0A7A45]">
            Berita Kelurahan Lenteng Agung
          </h1>
        </div>

        {/* Grid semua berita */}
        <section className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            {beritaKelurahan.map((item) => (
              <article
                key={item.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <div className="relative h-40 w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-0 top-0 rounded-br-xl bg-black/55 px-3 py-1">
                    <p className="text-[11px] font-medium text-white">
                      {item.date}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                  <p className="mb-1 text-[11px] uppercase tracking-wide text-[#0A7A45]">
                    Berita Kelurahan
                  </p>
                  <h2 className="mb-2 text-sm font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-xs leading-relaxed text-gray-700">
                    {item.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
