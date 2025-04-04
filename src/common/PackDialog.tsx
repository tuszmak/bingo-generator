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
import { PackContent } from '@/Packs/types';
import { SetupTooltip } from '@/Setup/SetupTooltip';
import { ReactNode, useState } from 'react';

interface DialogProps {
  label: ReactNode | string;
  packMethod: (packName: string, wordsInput: string) => void;
  buttonText: string;
  pack?: PackContent;
}

function PackDialog({ label, packMethod, buttonText, pack }: DialogProps) {
  const [packName, setPackName] = useState(pack?.name ?? 'Your pack!');
  const [wordsInput, setWordsInput] = useState(pack?.content ?? '');
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <a className='text-slate-600 hover:text-slate-800'> {label} </a>
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
                required
                name='name'
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
                name='words'
                onChange={(e) => setWordsInput(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type='submit'
              onClick={() => packMethod(packName, wordsInput)}
            >
              {buttonText}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default PackDialog;
