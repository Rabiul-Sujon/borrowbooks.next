'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signUp } from '@/lib/client'
import SocialLogin from './SocialLogin'
import toast from 'react-hot-toast'

const RegisterForm = () => {
  const router = useRouter()

  // Form state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await signUp.email({
        name,
        email,
        password,
        image: photoUrl,
        callbackURL: '/login',
      })

      if (result?.error) {
        toast.error(result.error.message || 'Registration failed!')
      } else {
        toast.success('Registration successful! Please login.')
        router.push('/login')
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card bg-base-200 shadow-xl w-full max-w-md p-8">
      {/* Title */}
      <h2 className="text-3xl font-bold text-primary text-center mb-6">Register</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Photo URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Photo URL</span>
          </label>
          <input
            type="url"
            placeholder="Enter your photo URL"
            className="input input-bordered w-full"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Register button */}
        <button
          type="submit"
          className="btn btn-primary w-full text-white"
          disabled={loading}
        >
          {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Register'}
        </button>
      </form>

      {/* Social login */}
      <SocialLogin />

      {/* Login link */}
      <p className="text-center text-sm mt-4">
        Already have an account?{' '}
        <Link href="/login" className="text-primary font-semibold hover:underline">
          Login
        </Link>
      </p>
    </div>
  )
}

export default RegisterForm