export const instant = false;
import ReadButton from '@/components/bookDetails/ReadButton';
import WishlistButton from '@/components/bookDetails/WishlistButton';
import Image from 'next/image';
import React from 'react';

const getBooks = async () => {
  const res = await fetch('http://localhost:3000/booksData.json', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch books data');
  }
  return res.json();
};

const Stars = ({ rating = 0 }) => {
  const percent = Math.min(Math.max((rating / 5) * 100, 0), 100);
  return (
    <div className="relative inline-block text-2xl leading-none tracking-wider">
      <span className="text-white/15">★★★★★</span>
      <span
        className="absolute left-0 top-0 overflow-hidden whitespace-nowrap text-amber-400"
        style={{ width: `${percent}%` }}
      >
        ★★★★★
      </span>
    </div>
  );
};

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  const booksData = await getBooks();
  const book = booksData.find((book) => book.bookId === Number(id));

  if (!book) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0c14] px-4 text-center">
        <div>
          <h2 className="text-3xl font-bold text-white">Book not found</h2>
          <p className="mt-2 text-white/50">
            We couldn&apos;t find a book with that ID.
          </p>
        </div>
      </div>
    );
  }

  const stats = [
    { label: 'Pages', value: book.totalPages },
    { label: 'Publisher', value: book.publisher },
    { label: 'Published', value: book.yearOfPublishing },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c14] px-4 py-10 md:py-16">
      {/* dark glow behind the card */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-amber-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-orange-600/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]" />

      <div className="container relative mx-auto">
        <div className="card group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/60 backdrop-blur-xl lg:card-side">
          {/* Image side */}
          <figure className="relative bg-gradient-to-br from-[#161a2b] to-[#0d1020] p-8 lg:w-[40%] lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(251,191,36,0.22),transparent_65%)]" />
            <Image
              src={book.image}
              alt={book.bookName}
              width={500}
              height={300}
              className="relative z-10 h-auto w-full max-w-xs rounded-2xl object-cover shadow-[0_30px_60px_-15px_rgba(251,191,36,0.35)] ring-1 ring-white/10 transition duration-500 ease-out group-hover:-rotate-2 group-hover:scale-105"
            />
          </figure>

          {/* Content side */}
          <div className="card-body justify-center gap-5 p-8 lg:w-[60%] lg:p-12">
            <span className="badge badge-lg w-fit gap-2 border border-amber-400/30 bg-amber-400/10 px-4 py-4 font-semibold text-amber-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              {book.category}
            </span>

            <div>
              <h2 className="card-title bg-gradient-to-r from-amber-100 via-amber-300 to-orange-400 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent md:text-5xl">
                {book.bookName}
              </h2>
              <p className="mt-2 text-lg text-white/60">
                by <span className="font-semibold text-white/90">{book.author}</span>
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <Stars rating={book.rating} />
              <span className="text-xl font-bold text-amber-300">{book.rating}</span>
              <span className="text-sm text-white/40">/ 5</span>
            </div>

            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-amber-300 to-orange-500" />

            {/* Review */}
            <p className="max-w-2xl text-base leading-relaxed text-white/70">
              {book.review}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-white/50">Tags:</span>
              {book.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 transition hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-amber-400/30 hover:bg-amber-400/[0.05]"
                >
                  <p className="text-sm text-white/40">{item.label}</p>
                  <p className="mt-1 text-lg font-bold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Two buttons */}
            <div className="card-actions mt-2 flex-wrap justify-end gap-3">
              <WishlistButton book={book} />
              <ReadButton book={book} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;