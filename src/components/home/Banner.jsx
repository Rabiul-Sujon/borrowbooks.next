import Link from 'next/link'

const Banner = () => {
  return (
    <div className='hero min-h-[80vh] bg-base-200 '>
      <div className='hero-content text-center'>
        <div className='max-w-2xl'>
          {/* Heading */}
          <h1 className='text-5xl md:text-6xl font-bold text-primary leading-tight'>
            Find Your Next Read
          </h1>

          {/* Subheading */}
          <p className='py-6 text-lg text-gray-500'>
            Discover thousands of books across every genre. <br />
            Borrow digitally and read at your own pace.
          </p>

          {/* Browse Button */}
          <Link href='/all-books' className='btn btn-primary btn-lg text-white'>
            Browse Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner