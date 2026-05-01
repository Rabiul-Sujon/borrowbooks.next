'use client'

import { FaGoogle } from 'react-icons/fa'
import { signIn } from '@/lib/client'

const SocialLogin = () => {

  // Handle google login
  const handleGoogleLogin = async () => {
    await signIn.social({
      provider: 'google',
      callbackURL: '/',
    })
  }

  return (
    <div className="w-full">
      {/* Divider */}
      <div className="divider">OR</div>

      {/* Google login button */}
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full gap-2"
      >
        <FaGoogle className="text-red-500 text-lg" />
        Continue with Google
      </button>
    </div>
  )
}

export default SocialLogin