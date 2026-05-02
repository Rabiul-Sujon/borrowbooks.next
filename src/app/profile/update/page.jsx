import PrivateRoute from '@/components/ui/PrivateRoute'
import UpdateForm from '@/components/profile/UpdateForm'

const UpdateProfilePage = () => {
  return (
    <PrivateRoute>
      <div className="min-h-screen flex items-center justify-center py-10 px-4">
        <UpdateForm />
      </div>
    </PrivateRoute>
  )
}

export default UpdateProfilePage
