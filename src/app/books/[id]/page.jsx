'use client';

import { useParams } from "next/navigation";
import booksData from "@/data/books.json"; 
import PrivateRoute from "@/components/ui/PrivateRoute";
import Image from "next/image";
import toast from "react-hot-toast";

const BookDetailsPage = () => {
  const { id } = useParams();
  
  // Match string ID from URL with string ID in JSON data
  const book = booksData.find((item) => String(item.id) === String(id));

  const handleBorrow = () => {
    toast.success(`Successfully borrowed: ${book.title}`);
  };

  // Fallback for invalid IDs
  if (!book) {
    return <div className="text-center py-20 font-bold text-xl">Book not found.</div>;
  }

  return (
    <PrivateRoute>
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row gap-10 bg-base-100 p-8 rounded-3xl shadow-xl border border-base-200">
          
          <div className="flex-1">
            <Image
              src={book.image_url}
              alt={book.title}
              width={400}
              height={600}
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-6">
            <div className="badge badge-primary">{book.category}</div>
            <h1 className="text-4xl font-bold">{book.title}</h1>
            <p className="text-xl text-gray-500 italic">By {book.author}</p>
            
            <div className="divider"></div>
            
            <p className="text-gray-600 leading-relaxed">
              {book.description}
            </p>
            
            <div className="bg-base-200 p-4 rounded-xl inline-block">
              <p className="font-semibold text-primary">
                Available: {book.available_quantity} copies left
              </p>
            </div>

            <button 
              onClick={handleBorrow}
              className="btn btn-primary btn-lg w-full"
            >
              Borrow This Book
            </button>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default BookDetailsPage;