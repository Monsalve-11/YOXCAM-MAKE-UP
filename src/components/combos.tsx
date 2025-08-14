import React from 'react';

type Combo = {
    id: string;
    name: string;
    description?: string;
    price?: number | null;
    imageUrl?: string;
    note?: string;
};

const combos: Combo[] = [
    {
        id: 'cajita-maquillaje',
        name: 'Cajita de Maquillaje',
        description: 'Arma tu combo perfecto a partir de 2 productos. Por compras > $55.000 recibe una tarjeta personalizada 💜',
        note: 'Personalizable',
        imageUrl: 'images/3.jpg',
    },
    {
        id: 'ramo-maquillaje',
        name: 'Ramo de Maquillaje',
        description: 'Elige tus productos favoritos y te armamos un ramo hermoso para regalar o auto-consentirte.',
        note: 'Personalizable',
        imageUrl: 'images/2.jpg',
    },
    {
        id: 'malteada-maquillaje',
        name: 'Malteada de Maquillaje',
        description: 'Presentación tipo malteada con tus productos favoritos. Ideal para ocasiones especiales.',
        note: 'Personalizable',
        imageUrl: 'images/1.jpg',
    },
];

// Tu número en formato internacional sin +
const WHATSAPP_PHONE = '573052709376';
function buildWhatsAppUrlForCombo(c: Combo) {
    const base = `https://wa.me/${WHATSAPP_PHONE}`;
    const parts = [
        `Hola 👋, quiero armar este combo: ${c.name}`,
        c.price ? `Presupuesto/Precio: ${c.price.toLocaleString('es-CO')}` : 'Presupuesto: (cuéntanos tu presupuesto 💜)',
    ];
    if (c.imageUrl && /^https?:\/\//.test(c.imageUrl)) {
        parts.push(`Foto de referencia: ${c.imageUrl}`);
    }
    return `${base}?text=${encodeURIComponent(parts.join('\n'))}`;
}

const CombosScreen: React.FC = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10">
            <header className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Combos</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Arma tu combo perfecto a partir de 2 productos. En compras superiores a $55.000 recibes una tarjeta personalizada 💜
                </p>
            </header>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {combos.map((c) => (
                    <div
                        key={c.id}
                        className="group relative overflow-hidden rounded-2xl bg-white/80 shadow-sm ring-1 ring-black/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        {/* Glow */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Imagen */}
                        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
                            {c.imageUrl ? (
                                <img
                                    src={c.imageUrl}
                                    alt={c.name}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center text-xs text-gray-400">(Coloca tu imagen)</div>
                            )}
                        </div>

                        {/* Contenido */}
                        <div className="p-4">
                            <div className="mb-2 flex items-start justify-between gap-2">
                                <h3 className="text-base leading-tight font-semibold text-gray-900">{c.name}</h3>
                                <span
                                    className="shrink-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm ring-1 ring-black/5"
                                    title="Combo"
                                >
                                    Combo
                                </span>
                            </div>

                            {c.price ? (
                                <p className="text-xl font-bold text-gray-900">${c.price.toLocaleString('es-CO')}</p>
                            ) : (
                                <p className="text-sm font-medium text-gray-700">Precio según selección</p>
                            )}

                            {c.note && <p className="mt-1 text-xs font-semibold text-rose-600">{c.note.toUpperCase()}</p>}
                            {c.description && <p className="mt-2 text-sm text-gray-600">{c.description}</p>}

                            {/* Botones parejos */}
                            <div className="mt-3 flex gap-2">
                                <a
                                    href={buildWhatsAppUrlForCombo(c)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#70268c] px-3.5 py-2 text-sm font-semibold text-white shadow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#70268c] focus-visible:ring-offset-2"
                                >
                                    Pedir por WhatsApp
                                </a>
                                <button className="inline-flex flex-1 items-center justify-center rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50">
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CombosScreen;
