import { LoginPopover } from '@/common/LoginPopover';
import MenuBar from '@/common/MenuBar';
import { SignedIn, SignedOut, useUser } from '@clerk/react-router';
import { useEffect, useState } from 'react';
import Pack from './Pack';
import PackCreateDialog from './PackCreateDialog';
import { PackContent, User } from './types';

export default function Packs() {
  const [packs, setPacks] = useState<PackContent[]>([]);
  const [user, setUser] = useState<User>();
  const { user: clerkUser } = useUser();
  const getData = async () => {
    const response = await fetch('/api/v1/table');
    if (response.ok) {
      const userData = await response.json();
      setPacks(userData);
    }
  };

  const getUser = async () => {
    if (clerkUser) {
      const userResponse = await fetch(`/api/v1/users/${clerkUser.id}`);
      if (userResponse.ok) {
        const data = await userResponse.json();
        setUser(data);
      }
    }
  };

  useEffect(() => {
    getData();
    getUser();
  }, [clerkUser]);

  return (
    <div>
      <title>Packs</title>
      <MenuBar />
      <div className='flex justify-center w-full '>
        <div className=' text-3xl m-4 flex gap-1'>
          <SignedIn>
            <>
              <p>Select or </p> <PackCreateDialog label='create' />
              <p>a pack</p>
            </>
          </SignedIn>
          <SignedOut>
            <p>Select or </p>
            <LoginPopover message="You can't create a pack without logging in">
              <p className='text-slate-600 hover:text-slate-800'>create</p>
            </LoginPopover>
            <p>a pack</p>
          </SignedOut>
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        {packs.length === 0 && <div>There's no packs available</div>}
        {packs.map((pack) => (
          <Pack pack={pack} user={user} key={pack.id} />
        ))}
      </div>
    </div>
  );
}
