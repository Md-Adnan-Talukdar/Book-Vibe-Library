'use client';

import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({ book }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handleReadBook = () => {
    const alreadyRead = readBooks.find((b) => b.bookId === book.bookId);

    if (alreadyRead) {
      toast(`You have already read "${book.bookName}"`);
      return;
    }

    setReadBooks([...readBooks, book]);
    toast.success(`You have read "${book.bookName}"`);
  };

  return (
    <button
      className="btn btn-lg gap-3 rounded-full border-0 bg-gradient-to-r from-amber-300 to-orange-500 px-10 font-bold text-[#1a1205] shadow-lg shadow-amber-500/30 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50"
      onClick={handleReadBook}
    >
      <span className="text-xl leading-none">📖</span>
      Read
    </button>
  );
};

export default ReadButton;