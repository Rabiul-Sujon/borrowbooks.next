"use client";
import { useState } from 'react';
import booksData from '@/data/books.json';
import BookCard from '@/components/books/BookCard';
import CategoryBar from '@/components/books/CategoryBar';
import SearchBar from '@/components/books/SearchBar'; // Import the new component

const AllBooksPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtering 
  const filteredBooks = booksData.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesCategory = false;
    if (selectedCategory === "All") {
      matchesCategory = true;
    } else if (book.category === selectedCategory) {
      matchesCategory = true;
    }

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 min-h-screen">
      {/* Pass the setter function to the SearchBar component */}
      <SearchBar setSearchQuery={setSearchQuery} />

      <div className="flex flex-col lg:flex-row gap-10">
        <CategoryBar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />

        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          
          {filteredBooks.length === 0 && (
            <div className="text-center mt-20 text-gray-400 italic">
              No books match your search.
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AllBooksPage;