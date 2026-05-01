'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from '@/lib/client'
import SocialLogin from './SocialLogin'
import toast from 'react-hot-toast'

const LoginForm = () => {
  const router = useRouter()

  // Form state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await signIn.email({
        email,
        password,
        callbackURL: '/',
      })

      if (result?.error) {
        toast.error(result.error.message || 'Login failed!')
      } else {
        toast.success('Login successful!')
        router.push('/')
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
      <h2 className="text-3xl font-bold text-primary text-center mb-6">Login</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
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

        {/* Login button */}
        <button
          type="submit"
          className="btn btn-primary w-full text-white"
          disabled={loading}
        >
          {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Login'}
        </button>
      </form>

      {/* Social login */}
      <SocialLogin />

      {/* Register link */}
      <p className="text-center text-sm mt-4">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="text-primary font-semibold hover:underline">
          Register
        </Link>
      </p>
    </div>
  )
}

export default LoginForm