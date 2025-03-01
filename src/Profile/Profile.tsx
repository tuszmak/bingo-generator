import MenuBar from '@/common/MenuBar';
import { useUser } from '@clerk/react-router';

export default function Profile() {
  const { user } = useUser();
  return (
    <div>
      <MenuBar />
      <div className='w-4/5 h-screen flex flex-col'>
        <div>
          <h1 className='font-semibold text-3xl'>Username</h1>
          <p className='text-2xl'>{user?.username ?? 'No username'}</p>
        </div>
        <div>
          <h1 className='font-semibold text-3xl'>Email</h1>
          <p className='text-2xl'>{user?.primaryEmailAddress?.emailAddress}</p>
        </div>
        <div>
          <h1 className='font-semibold text-3xl'>Liked packs</h1>
          <p>To be implemented</p>
        </div>
      </div>
    </div>
  );
}
