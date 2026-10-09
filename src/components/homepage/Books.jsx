import BookCard from './BookCard';

const getBooks = async () => {
 
  const res = await fetch('http://localhost:3000/booksData.json', {
    cache: 'no-store', 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch books data');
  }

  return res.json();
};

const Books = async () => {
  const booksData = await getBooks();

  if (!booksData || booksData.length === 0) {
    return <p className="text-center text-white">No books found!</p>;
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