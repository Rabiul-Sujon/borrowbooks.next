'use client'

import Image from 'next/image'
import { useSession } from '@/lib/client'
import { FaUser, FaEnvelope, FaCamera } from 'react-icons/fa'
import Link from 'next/link'

const UserInfo = () => {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <div className="card bg-base-200 shadow-xl p-8 w-full max-w-lg mx-auto">
      {/* Profile Picture */}
      <div className="flex flex-col items-center mb-6">
        {user?.image ? (
          <Image
            src={user.image}
            alt={user.name}
            width={100}
            height={100}
            className="rounded-full w-24 h-24 object-cover border-4 border-primary"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center border-4 border-primary">
            <FaUser className="text-white text-4xl" />
          </div>
        )}
        <h2 className="text-2xl font-bold mt-4 text-primary">{user?.name}</h2>
      </div>

      {/* User Details */}
      <div className="space-y-4">
        {/* Name */}
        <div className="flex items-center gap-3 bg-base-100 p-4 rounded-xl">
          <FaUser className="text-primary text-lg" />
          <div>
            <p className="text-xs text-gray-400">Full Name</p>
            <p className="font-medium">{user?.name}</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 bg-base-100 p-4 rounded-xl">
          <FaEnvelope className="text-primary text-lg" />
          <div>
            <p className="text-xs text-gray-400">Email Address</p>
            <p className="font-medium">{user?.email}</p>
          </div>
        </div>

        {/* Photo URL */}
        <div className="flex items-center gap-3 bg-base-100 p-4 rounded-xl">
          <FaCamera className="text-primary text-lg" />
          <div>
            <p className="text-xs text-gray-400">Photo URL</p>
            <p className="font-medium text-sm truncate w-64">{user?.image || 'No photo URL set'}</p>
          </div>
        </div>
      </div>

      {/* Update Button */}
      <div className="mt-6">
        <Link href="/profile/update" className="btn btn-primary w-full text-white">
          Update Information
        </Link>
      </div>
    </div>
  )
}

export default UserInfo