import MenuBar from '@/common/MenuBar';
import { useEffect, useState } from 'react';
import Pack from './Pack';

export default function Packs() {
  const [packs, setPacks] = useState([]);
  const getData = async () => {
    const response = await fetch('/api/v1/table');
    const data = await response.json();
    setPacks(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <MenuBar />
      Select a pack
      <div className='flex'>
        {packs.map(() => (
          <Pack />
        ))}
      </div>
    </div>
  );
}
