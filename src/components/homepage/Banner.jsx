import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bannerImage from '@/assets/book-vibe-resources/assets/hero_img.jpg';

const features = [
    { icon: '📖', label: 'Track reads' },
    { icon: '♥', label: 'Save wishlist' },
    { icon: '★', label: 'Top rated' },
];

const Banner = () => {
    return (
        <section className="container mx-auto px-4 py-8 md:py-12">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0a0c14] via-[#10131f] to-[#1a1408] px-6 py-12 shadow-2xl shadow-black/60 md:px-14 md:py-20">
                {/* glowing background blobs */}
                <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 animate-pulse rounded-full bg-amber-500/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 animate-pulse rounded-full bg-orange-600/20 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
                {/* soft dotted texture */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:26px_26px]" />

                <div className="relative grid grid-cols-1 items-center gap-14 md:grid-cols-2">
                    {/* Text side */}
                    <div className="text-center md:text-left">
                        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm font-semibold text-amber-300 backdrop-blur">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                            </span>
                            New books added every week
                        </span>

                        <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-white md:text-7xl">
                            Books to freshen up <br className="hidden md:block" />
                            your{' '}
                            <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                                bookshelf
                            </span>
                        </h1>

                        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-amber-300 to-orange-500 md:mx-0" />

                        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/65 md:mx-0 md:text-lg">
                            Find your next favourite read, track what you have finished and
                            keep a wishlist of what comes next.
                        </p>

                        <div className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                            <Link
                                href="/listed-books"
                                className="btn btn-lg rounded-full border-0 bg-gradient-to-r from-amber-300 to-orange-500 px-10 font-bold text-[#1a1205] shadow-lg shadow-amber-500/40 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50"
                            >
                                View The List
                            </Link>
                            <button className="btn btn-lg rounded-full border border-white/20 bg-white/5 px-8 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-300">
                                Learn more
                            </button>
                        </div>

                        {/* feature chips */}
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                            {features.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur transition hover:border-amber-400/40 hover:text-amber-300"
                                >
                                    <span className="text-amber-300">{item.icon}</span>
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image side */}
                    <div className="relative mx-auto w-full max-w-md">
                        {/* glow behind the image */}
                        <div className="absolute -inset-6 rounded-full bg-amber-500/25 blur-3xl" />

                        {/* offset frames behind the image */}
                        <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-6 rounded-3xl bg-gradient-to-br from-amber-300 to-orange-500 opacity-70" />
                        <div className="absolute inset-0 -translate-x-3 -translate-y-3 -rotate-6 rounded-3xl border-2 border-amber-300/40" />

                        <Image
                            src={bannerImage}
                            alt="Banner Image"
                            priority
                            className="relative h-auto w-full -rotate-2 rounded-3xl object-cover shadow-2xl shadow-black/60 ring-4 ring-[#161a2b] transition-transform duration-500 hover:rotate-0 hover:scale-[1.03]"
                        />

                        {/* floating chip: bottom left */}
                        <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#161a2b]/90 px-4 py-3 shadow-xl shadow-black/50 backdrop-blur md:-left-10">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/15 text-xl">
                                📚
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-white">Read more</p>
                                <p className="text-xs text-white/50">Build a daily habit</p>
                            </div>
                        </div>

                        {/* floating chip: top right */}
                        <div className="absolute -right-3 -top-5 flex items-center gap-2 rounded-2xl border border-amber-400/30 bg-[#161a2b]/90 px-4 py-3 shadow-xl shadow-black/50 backdrop-blur md:-right-8">
                            <span className="text-xl text-amber-400">★</span>
                            <div className="text-left">
                                <p className="text-sm font-bold text-white">Top rated</p>
                                <p className="text-xs text-white/50">Picked by readers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;