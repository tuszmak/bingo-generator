import PackDialog from '@/common/PackDialog';
import { useState } from 'react';
import { NewPack } from './types';
import { useBuildNewPack } from './utils';

interface FetchOptions {
  onSuccess?: () => void;
  onError?: () => void;
}

const createPack = async (
  pack: NewPack,
  { onSuccess, onError }: FetchOptions
) =>
  await fetch('/api/v1/table', {
    method: 'post',
    body: JSON.stringify(pack),
    headers: { 'content-type': 'application/json' },
  })
    .then(onSuccess)
    .catch(onError);

export default function PackCreateDialog({ label }: { label: string }) {
  const buildNewPack = useBuildNewPack();

  const [_, setDialogOpen] = useState(false);

  return (
    <PackDialog
      packMethod={(packName, wordsInput) =>
        createPack(buildNewPack(packName, wordsInput), {
          onSuccess: () => {
            setDialogOpen(false);
            window.location.reload();
          },
        })
      }
      buttonText='Create pack'
      label={label}
    ></PackDialog>
  );
}
