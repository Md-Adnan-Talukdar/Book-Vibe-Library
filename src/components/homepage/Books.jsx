import fs from 'fs';
import path from 'path';
import BookCard from './BookCard';

const getBooksData = () => {
  try {
   
    const filePath = path.join(process.cwd(), 'public', 'booksData.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading booksData.json:", error);
    return [];
  }
};

const Books = async () => {
  const booksData = getBooksData();

  if (!booksData || booksData.length === 0) {
    return <p className="py-10 text-center text-white">No books found!</p>;
  }

  return (
    <section className="container mx-auto bg-slate-950 px-4 py-12">
      <h2 className="mb-10 text-center text-3xl font-extrabold text-white md:text-4xl">
        Books
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book, ind) => (
          <BookCard key={book.bookId ?? ind} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;