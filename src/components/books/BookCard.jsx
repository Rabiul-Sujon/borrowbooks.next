import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all border border-base-300">
      <figure className="px-4 pt-4">
        
        <Image
          src={book.image_url}
          alt={book.title}
          width={200}
          height={300}
          className="rounded-xl h-60 object-cover w-full"
        />
      </figure>
      <div className="card-body p-5">
        {/* Book Title and Author */}
        <h2 className="card-title text-lg font-bold truncate">{book.title}</h2>
        <p className="text-sm text-gray-500 font-medium">By {book.author}</p>
        
        {/* Category Badge */}
        <div className="badge badge-outline badge-primary mt-1">{book.category}</div>
        
        {/* Action Button to go to Private Details page */}
        <div className="card-actions mt-4">
          <Link href={`/books/${book.id}`} className="btn btn-primary btn-sm w-full">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;