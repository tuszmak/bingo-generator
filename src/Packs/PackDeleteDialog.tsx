import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { PackContent } from './types';

function PackDeleteDialog({ pack }: { pack: PackContent }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const deletePack = async () => {
    const response = await fetch(`api/v1/table/${pack.id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      window.location.reload();
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <p className='text-red-600 font-medium w-full'>Delete</p>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Delete pack</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this pack?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              Close
            </Button>
          </DialogClose>
          <Button type='button' variant='destructive' onClick={deletePack}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default PackDeleteDialog;
