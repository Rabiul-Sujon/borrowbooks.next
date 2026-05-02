import PrivateRoute from '@/components/ui/PrivateRoute'
import UserInfo from '@/components/profile/UserInfo'

const ProfilePage = () => {
  return (
    <PrivateRoute>
      <div className="min-h-screen flex items-center justify-center py-10 px-4">
        <UserInfo />
      </div>
    </PrivateRoute>
  )
}

export default ProfilePage