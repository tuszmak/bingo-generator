import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { SetupTooltip } from '@/Setup/SetupTooltip';
import { useUser } from '@clerk/react-router';
import { useState } from 'react';
import { NewPack } from './types';

export default function PackCreateDialog({ label }: { label: string }) {
  const createPack = async () => {
    const submitUser =
      user?.username ?? user?.primaryEmailAddress?.emailAddress ?? 'Anonymous';
    const response = await fetch('/api/v1/table', {
      method: 'post',
      body: JSON.stringify({
        name: packName,
        content: wordsInput,
        submittedBy: submitUser,
        likes: [],
      } satisfies NewPack),
      headers: { 'content-type': 'application/json' },
    });
    if (response.ok) {
      setDialogOpen(false);
      window.location.reload();
    }
  };

  const { user } = useUser();
  const [packName, setPackName] = useState('');
  const [wordsInput, setWordsInput] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <a className='text-slate-600'>{label} </a>
      </DialogTrigger>
      <form>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Pack name
              </Label>
              <Input
                id='name'
                className='col-span-3'
                value={packName}
                onChange={(e) => setPackName(e.target.value)}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='words'>
                <div className='flex justify-end items-center gap-1'>
                  Words <SetupTooltip />
                </div>
              </Label>
              <Textarea
                id='words'
                className='col-span-3'
                value={wordsInput}
                onChange={(e) => setWordsInput(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type='button' onClick={createPack}>
              Create pack
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
