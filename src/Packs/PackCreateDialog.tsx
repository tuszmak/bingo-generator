import PackDialog from '@/common/PackDialog';
import { useUser } from '@clerk/react-router';
import { useState } from 'react';
import { NewPack } from './types';

export default function PackCreateDialog({ label }: { label: string }) {
  const createPack = async (packName: string, wordsInput: string) => {
    const response = await fetch('/api/v1/table', {
      method: 'post',
      body: JSON.stringify(buildNewPack(packName, wordsInput)),
      headers: { 'content-type': 'application/json' },
    });
    if (response.ok) {
      setDialogOpen(false);
      window.location.reload();
    }
  };

  const buildNewPack = (packName: string, wordsInput: string): NewPack => {
    return {
      name: packName ?? 'Your pack!',
      content: wordsInput,
      uploadedByUserId: user!.id,
      likes: [],
    };
  };

  const { user } = useUser();
  // const [packName, setPackName] = useState('Your pack!');
  // const [wordsInput, setWordsInput] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <PackDialog
      packMethod={createPack}
      buttonText='Create pack'
      label={label}
    ></PackDialog>
  );
}
