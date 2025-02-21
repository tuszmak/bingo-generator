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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { convertStringToTableFactory } from '@/Game/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ZodError, ZodIssue } from 'zod';
import { SetupTooltip } from './SetupTooltip';

export const SetupFileInput = () => {
  const [fileInput, setFileInput] = useState<FileList | null>(null);
  const [width, setWidth] = useState(0);
  const [errors, setErrors] = useState<ZodIssue[]>([]);
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();
  const convertStringToTable = convertStringToTableFactory(navigate);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (fileInput && fileInput.length > 0) {
      try {
        const fileText = fileInput[0];
        const fileTextAwaited = await fileText.text();
        convertStringToTable(fileTextAwaited, width);
      } catch (error: unknown) {
        if (error instanceof ZodError) {
          setErrors(error.issues);
          setOpenDialog(false);
        }
      }
    }
  };

  return (
    <div>
      <form className='flex gap-3 flex-col'>
        {errors.map((error, i) => (
          <p key={i} className='text-red-500'>
            {error.message}
          </p>
        ))}
        <div className='flex items-center gap-1'>
          <Label htmlFor='text'>Words</Label>
          <SetupTooltip />
        </div>
        <Input
          onChange={(e) => {
            setFileInput(e.target.files);
          }}
          id='text'
          type='file'
          accept='.txt,.json'
        />
        <Label htmlFor='width'>Width/Height</Label>
        <Input
          min={1}
          type='number'
          required
          id='width'
          onChange={(e) => setWidth(parseInt(e.target.value))}
        />
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button>Submit</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                Are you satisfied with these keywords?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button type='button' onClick={(e) => handleSubmit(e)}>
                  Yes
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type='button' variant='secondary'>
                  No
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </div>
  );
};
