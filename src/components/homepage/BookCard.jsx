import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BookCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags = [],
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <Link
      href={`/books/${bookId}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/50 hover:shadow-emerald-500/10"
    >
      <div>
        {/* Image Container with Glow & Rating */}
        <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 p-4">
          <Image
            src={image}
            alt={bookName}
            width={180}
            height={240}
            className="h-52 w-auto rounded-lg object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md shadow-lg">
            ★ {rating}
          </span>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-0.5 text-xs font-medium text-emerald-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Title & Author */}
        <h2 className="mt-3 line-clamp-2 text-xl font-bold leading-snug text-white transition-colors duration-200 group-hover:text-emerald-300">
          {bookName}
        </h2>
        <p className="mt-1 text-sm font-medium text-slate-400">by {author}</p>
      </div>

      <div>
        {/* 🌟 CENTERED EYE-CATCHING "VIEW DETAILS" BUTTON 🌟 */}
        <div className="my-5 flex justify-center">
          <span className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-6 py-2.5 text-sm font-bold text-slate-950 shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-400 hover:to-cyan-400 hover:shadow-emerald-500/25 active:scale-95">
            <span>View Details</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between border-t border-dashed border-white/15 pt-4 text-xs font-medium">
          <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
            {category}
          </span>
          <span className="text-slate-400">
            {totalPages} pages • {yearOfPublishing}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;