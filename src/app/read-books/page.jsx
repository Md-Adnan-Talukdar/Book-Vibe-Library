'use client';

import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const colors = ['#fbbf24', '#f97316', '#fb7185', '#a78bfa', '#38bdf8', '#34d399'];

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
   Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke="none"
      fill={fill}
    />
  );
};

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);

  const data = readBooks.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c14] px-4 py-[60px]">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-amber-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-orange-600/10 blur-3xl" />

      <div className="container relative mx-auto">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-amber-100 via-amber-300 to-orange-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
            Read Books
          </h2>
          <p className="mt-4 text-white/60">
            Pages of every book you have read
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-amber-300 to-orange-500" />
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl md:p-8">
          {data.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-6xl">📚</p>
              <p className="mt-5 text-2xl font-bold text-white">
                No readlist found
              </p>
              <p className="mt-2 text-white/50">
                You haven&apos;t marked any book as read yet.
              </p>
            </div>
          ) : (
            <div className="h-[420px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 30, right: 20, left: 0, bottom: 20 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.08)"
                  />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                    stroke="rgba(255,255,255,0.2)"
                  />
                  <YAxis
                    tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                    stroke="rgba(255,255,255,0.2)"
                  />
                  <Tooltip
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{
                      background: '#161a2b',
                      border: '1px solid rgba(251,191,36,0.4)',
                      borderRadius: '12px',
                      color: '#fde68a',
                    }}
                  />
                  <Bar dataKey="pages" shape={<TriangleBar />}>
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                      />
                    ))}
                    <LabelList
                      dataKey="pages"
                      position="top"
                      fill="#ffffff"
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;