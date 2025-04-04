import HeaderText from '@/common/HeaderText';
import MenuBar from '@/common/MenuBar';
import Pack from '@/Packs/Pack';
import { PackContent, User } from '@/Packs/types';

import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  useUser,
} from '@clerk/react-router';
import { useEffect, useState } from 'react';
export default function Profile() {
  const { user } = useUser();
  const [userDetails, setUserDetails] = useState<User>();
  const [packs, setPacks] = useState<PackContent[]>([]);

  const getUser = async () => {
    if (user) {
      const userResponse = await fetch(`/api/v1/users/${user.id}`);
      if (userResponse.ok) {
        const data: User = (await userResponse.json()) satisfies User;
        const packResponse = await fetch('/api/v1/table/getTables', {
          method: 'post',
          body: JSON.stringify(data.packIds),
        });
        const packs = await packResponse.json();
        setUserDetails(data);
        setPacks(packs);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, [user]);
  return (
    <div>
      <SignedIn>
        <title>Your profile</title>
        <MenuBar />
        <div className='h-with-menubar flex flex-col items-center'>
          <div className='w-4/5 bg-slate-300 h-[180px] m-8 p-12 flex justify-between items-center'>
            <div>
              <h1 className='font-semibold text-3xl text-slate-600 uppercase'>
                Username
              </h1>
              <p className='text-2xl text-black font-medium'>
                {user?.username ?? 'No username'}
              </p>
            </div>
            <div></div>
          </div>
          <div className='h-[60vh] w-4/5 bg-slate-300 flex'>
            <div className='w-1/3 bbg-slate-300 h-full border-r-2 border-slate-600'>
              <div className='m-8'>
                <HeaderText>User stats</HeaderText>
                <HeaderText>Email</HeaderText>
                <p className='text-2xl text-black font-medium'>
                  {user?.primaryEmailAddress?.emailAddress ?? 'No Email'}
                </p>
              </div>
            </div>
            <div className='w-2/3 bg-slate-300 h-full'>
              <div className='w-full flex flex-col justify-center p-8 border-b-2 border-slate-600'>
                <HeaderText>Liked packs</HeaderText>
                <div className='flex gap-4'>
                  {packs.map((pack) => (
                    <Pack pack={pack} user={userDetails} key={pack.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn></RedirectToSignIn>
      </SignedOut>
    </div>
  );
}
