'use client';

import BookCard from '@/components/homepage/BookCard';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c14] px-4 py-[60px]">
      {/* dark glow background */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-amber-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-orange-600/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="container relative mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-amber-100 via-amber-300 to-orange-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
            Listed Books
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60 md:text-lg">
            Your personal library. Keep track of what you have read and what you
            want to read next.
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-amber-300 to-orange-500" />
        </div>

        {/* Counter cards */}
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl">
            <p className="text-4xl font-extrabold text-amber-300">
              {readBooks.length}
            </p>
            <p className="mt-1 text-sm text-white/50">Books Read</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl">
            <p className="text-4xl font-extrabold text-rose-300">
              {wishlist.length}
            </p>
            <p className="mt-1 text-sm text-white/50">In Wishlist</p>
          </div>
        </div>

        {/* Tabs */}
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift mt-12 [--tab-bg:#10131f] [--tab-border-color:rgba(255,255,255,0.1)]">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-base font-semibold text-white/50 checked:text-amber-300"
            aria-label={`📖 Read Books (${readBooks.length})`}
            defaultChecked
          />
          <div className="tab-content rounded-b-3xl border border-white/10 bg-[#10131f] p-6 shadow-2xl shadow-black/50 md:p-10">
            {readBooks.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-amber-400/30 bg-amber-400/[0.04] py-20 text-center">
                <p className="text-6xl">📚</p>
                <p className="mt-5 text-2xl font-bold text-white">
                  No readlist found
                </p>
                <p className="mt-2 text-white/50">
                  You haven&apos;t marked any book as read yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {readBooks.map((book) => {
                  return <BookCard key={book.bookId} book={book} />;
                })}
              </div>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-base font-semibold text-white/50 checked:text-rose-300"
            aria-label={`♥ Wishlist Books (${wishlist.length})`}
          />
          <div className="tab-content rounded-b-3xl border border-white/10 bg-[#10131f] p-6 shadow-2xl shadow-black/50 md:p-10">
            {wishlist.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-rose-400/30 bg-rose-400/[0.04] py-20 text-center">
                <p className="text-6xl">💝</p>
                <p className="mt-5 text-2xl font-bold text-white">
                  No wishlist found
                </p>
                <p className="mt-2 text-white/50">
                  You haven&apos;t added any book to your wishlist yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {wishlist.map((book) => {
                  return <BookCard key={book.bookId} book={book} />;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;