import Link from 'next/link'
import Image from 'next/image'
import books from '@/data/books.json'

const FeaturedBooks = () => {
  // Get only the first 4 books
  const featuredBooks = books.slice(0, 4)

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-primary">Featured Books</h2>
        <p className="text-gray-500 mt-2">Handpicked titles just for you</p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredBooks.map((book) => (
          <div key={book.id} className="card bg-base-200 shadow-md hover:shadow-xl transition">
            {/* Book Image */}
            <figure className="px-4 pt-4">
               <Image
                src={book.image_url}
                alt={book.title}
                width={300}
                height={200}
                className="rounded-xl h-52 w-full object-cover"
               />
            </figure>

            {/* Book Info */}
            <div className="card-body">
              <h3 className="card-title text-base">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
              <span className="badge badge-primary badge-outline text-xs">{book.category}</span>

              {/* View Details Button */}
              <div className="card-actions justify-end mt-2">
                <Link
                  href={`/books/${book.id}`}
                  className="btn btn-primary btn-sm text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedBooks