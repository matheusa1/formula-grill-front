import ProfileBody from '@/components/organisms/ProfileBody'
import ProfileHeader from '@/components/organisms/ProfileHeader'
import { FC } from 'react'

const Profile: FC = () => {
  return (
    <div className={'flex min-h-screen justify-center bg-black text-white'}>
      <div className="flex w-full max-w-7xl flex-col gap-5 px-5">
        <ProfileHeader />
        <ProfileBody />
      </div>
    </div>
  )
}

export default Profile
