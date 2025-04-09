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
    pack: NewPack,
    { onSuccess, onError }: FetchOptions
  ) =>
    await fetch('/api/v1/table/stuff', {
      method: 'post',
      body: JSON.stringify(pack),
      headers: { 'content-type': 'application/json' },
    })
      .then(onSuccess)
      .catch(onError);

  const buildNewPack = useBuildNewPack();
  const [dialogOpen, setDialogOpen] = useState(false);
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
