import MenuBar from '@/common/MenuBar';
import { useUser } from '@clerk/react-router';
import { useEffect, useState } from 'react';
import Pack from './Pack';
import PackCreateDialog from './PackCreateDialog';
import { PackContent } from './types';

export default function Packs() {
  const [packs, setPacks] = useState<PackContent[]>([]);
  const { user } = useUser();
  const getData = async () => {
    const response = await fetch('/api/v1/table');
    if (response.ok) {
      const data = await response.json();
      setPacks(data);
    }
  };

  useEffect(() => {
    getData();
    console.log(user?.primaryEmailAddress?.emailAddress);
  }, [user]);

  return (
    <div>
      <MenuBar />
      <div className='flex justify-center w-full '>
        <div className=' text-3xl m-4'>
          Select or <PackCreateDialog label='create' />a pack
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        {packs.length === 0 && <div>There's no packs available</div>}
        {packs.map((pack) => (
          <Pack pack={pack} key={pack.id} />
        ))}
      </div>
    </div>
  );
}
