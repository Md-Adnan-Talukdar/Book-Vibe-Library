'use client';

import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({ book }) => {
  const { readBooks, wishlist, setWishlist } = useContext(BooksContext);

  const handleWishlist = () => {
    const alreadyRead = readBooks.find((b) => b.bookId === book.bookId);
    if (alreadyRead) {
      toast(`You have already read "${book.bookName}"`);
      return;
    }

    const alreadyInWishlist = wishlist.find((b) => b.bookId === book.bookId);
    if (alreadyInWishlist) {
      toast.dark(`"${book.bookName}" is already in your wishlist`);
      return;
    }

    setWishlist([...wishlist, book]);
    toast(`"${book.bookName}" added to your wishlist`);
  };

  return (
    <button
      className="btn btn-lg gap-3 rounded-full border border-white/20 bg-white/5 px-8 font-bold text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-rose-400/60 hover:bg-rose-500/10 hover:text-rose-300 hover:shadow-lg hover:shadow-rose-500/20"
      onClick={handleWishlist}
    >
      <span className="text-xl leading-none">♥</span>
      Add Wishlist
    </button>
  );
};

export default WishlistButton;