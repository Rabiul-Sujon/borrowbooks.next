import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'

// Famous persons quotes about reading
const quotes = [
  {
    id: 1,
    name: 'Albert Einstein',
    profession: 'Physicist',
    quote: 'The only thing that you absolutely have to know is the location of the library.',
    image: '/images/einestain.png',
  },
  {
    id: 2,
    name: 'Bill Gates',
    profession: 'Entrepreneur',
    quote: 'Reading is still the main way that I both learn new things and test my understanding.',
    image: '/images/gates.webp',
  },
  {
    id: 3,
    name: 'Muhammad Yunus',
    profession: 'Nobel Peace Prize Winner',
    quote: 'Reading opens the door to a world where poverty has no place.',
    image: '/images/yunus.jpg',
  },
  {
    id: 4,
    name: 'Barack Obama',
    profession: 'Former US President',
    quote: 'Reading is the gateway skill that makes all other learning possible.',
    image: '/images/obama.webp',
  },
]


const ExtraSection1 = () => {
  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-primary">Words From The Wise</h2>
          <p className="text-gray-500 mt-2">Famous minds on the power of reading</p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((person) => (
            <div
              key={person.id}
              className="card bg-base-100 shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Person Photo */}
              <figure>
                <Image
                  src={person.image}
                  alt={person.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </figure>

              {/* Quote and Info - Bottom of card */}
              <div className="card-body p-4">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-primary text-xl" />

                {/* Quote Text */}
                <p className="text-sm text-gray-500 italic">&ldquo;{person.quote}&rdquo;</p>

                {/* Person Info */}
                <div className="mt-2">
                  <h4 className="font-bold text-sm">{person.name}</h4>
                  <p className="text-xs text-gray-400">{person.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraSection1;