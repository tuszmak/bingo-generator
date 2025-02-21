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
import { Textarea } from '@/components/ui/textarea';
import { convertStringToTableFactory } from '@/Game/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ZodError, ZodIssue } from 'zod';
import { SetupTooltip } from './SetupTooltip';

export const SetupTextInput = () => {
  const [textInput, setTextInput] = useState('');
  const [width, setWidth] = useState(0);
  const [errors, setErrors] = useState<ZodIssue[]>([]);
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();
  const convertStringToTable = convertStringToTableFactory(navigate);

  const handleSubmit = (e: React.MouseEvent) => {
    try {
      convertStringToTable(textInput, width);
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        e.preventDefault();
        setErrors(error.issues);
        setOpenDialog(false);
      }
    }
  };

  return (
    <div>
      <form className='flex gap-3 flex-col'>
        {/* //TODO preview */}
        {errors.map((error, i) => (
          <p key={i} className='text-red-500'>
            {error.message}
          </p>
        ))}
        <div className='flex gap-1 items-center'>
          <Label htmlFor='text'>Words</Label>
          <SetupTooltip />
        </div>
        <Textarea
          id='text'
          defaultValue={textInput}
          onChange={(e) => setTextInput(e.target.value)}
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
