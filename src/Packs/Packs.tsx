import MenuBar from '@/common/MenuBar';
import { useEffect, useState } from 'react';
import Pack from './Pack';
import { PackContent } from './types';

export default function Packs() {
  const [packs, setPacks] = useState<PackContent[]>([]);
  const getData = async () => {
    const response = await fetch('/api/v1/table');
    if (response.ok) {
      const data = await response.json();
      setPacks(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <MenuBar />
      <h1 className='flex justify-center text-3xl m-4'>Select a pack</h1>
      <div className='flex'>
        {packs.length === 0 && <div>There's no packs available</div>}
        {packs.map((pack) => (
          <Pack pack={pack} key={pack.id} />
        ))}
      </div>
    </div>
  );
}
