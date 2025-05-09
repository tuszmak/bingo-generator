import PackDialog from '@/common/PackDialog';
import { useState } from 'react';
import { NewPack, PackContent } from './types';
import { useBuildNewPack } from './utils';

function PackModifyDialog({ pack }: { pack: PackContent }) {
  interface FetchOptions {
    onSuccess?: () => void;
    onError?: () => void;
  }

  const modifyPack = async (
    newPack: NewPack,
    { onSuccess, onError }: FetchOptions
  ) =>
    await fetch(`/api/v1/table/${pack.id}`, {
      method: 'PATCH',
      body: JSON.stringify(newPack),
      headers: { 'content-type': 'application/json' },
    })
      .then(onSuccess)
      .catch(onError);

  const buildNewPack = useBuildNewPack();
  const [_, setDialogOpen] = useState(false);
  return (
    <div>
      <PackDialog
        packMethod={(packName, wordsInput) =>
          modifyPack(buildNewPack(packName, wordsInput), {
            onSuccess: () => {
              setDialogOpen(false);
              window.location.reload();
            },
          })
        }
        buttonText='Modify pack'
        label='Modify pack'
        pack={pack}
      ></PackDialog>
    </div>
  );
}

export default PackModifyDialog;
