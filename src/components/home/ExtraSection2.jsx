import Image from 'next/image'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

// Readers review
const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    review: 'BorrowBooks completely changed how I read. I discovered so many amazing titles I never would have found otherwise!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 2,
    name: 'James Williams',
    location: 'London, UK',
    review: 'The platform is so easy to use. I borrowed 3 books last week and finished them all. Highly recommended!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    review: 'As a student, BorrowBooks has been a lifesaver. So many tech and science books available at no cost!',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: 4,
    name: 'Ahmed Hassan',
    location: 'Cairo, Egypt',
    review: 'I love the category filter. Finding books by genre makes the whole experience so much better!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
]

const ExtraSection2 = () => {
  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-primary">Readers Review</h2>
          <p className="text-gray-500 mt-2">What our community is saying about BorrowBooks</p>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((reader) => (
            <div key={reader.id} className="card bg-base-200 shadow-md hover:shadow-xl transition p-6">
              {/* Quote Icon */}
              <FaQuoteLeft className="text-primary text-2xl mb-3" />

              {/* Review Text */}
              <p className="text-sm text-gray-500 italic mb-4">"{reader.review}"</p>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: reader.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Reader Info */}
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={reader.image}
                  alt={reader.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover w-12 h-12"
                />
                <div>
                  <h4 className="font-bold text-sm">{reader.name}</h4>
                  <p className="text-xs text-gray-400">{reader.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExtraSection2