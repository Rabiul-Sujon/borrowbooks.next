'use client'

import { useState } from 'react'
import { useSession } from '@/lib/client'
import { authClient } from '@/lib/client'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { FaUser, FaCamera } from 'react-icons/fa'

const UpdateForm = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const user = session?.user

  // Form state
  const [name, setName] = useState(user?.name || '')
  const [image, setImage] = useState(user?.image || '')
  const [loading, setLoading] = useState(false)

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await authClient.updateUser({
        name,
        image,
      })
      toast.success('Profile updated successfully!')
      router.push('/profile')
    } catch (error) {
      toast.error('Failed to update profile. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card bg-base-200 shadow-xl p-8 w-full max-w-md mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-bold text-primary text-center mb-6">
        Update Information
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Full Name</span>
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full pl-9"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Photo URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Photo URL</span>
          </label>
          <div className="relative">
            <FaCamera className="absolute left-3 top-4 text-gray-400" />
            <input
              type="url"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full pl-9"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full text-white mt-2"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            'Update Information'
          )}
        </button>

        {/* Back Button */}
        <button
          type="button"
          onClick={() => router.push('/profile')}
          className="btn btn-outline w-full"
        >
          Back to Profile
        </button>
      </form>
    </div>
  )
}

export default UpdateForm