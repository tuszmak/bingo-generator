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
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { z, ZodError, ZodIssue } from 'zod';
import { SetupTooltip } from './SetupTooltip';

export const SetupFileInput = () => {
  const [fileInput, setFileInput] = useState<FileList | null>(null);
  const [width, setWidth] = useState(0);
  const [errors, setErrors] = useState<ZodIssue[]>([]);
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();

  const wordArraySchema = z.object({
    board: z.array(z.string()).min(width ** 2, {
      message: `Your list of words is too small for a ${width} x ${width} table`,
    }),
    width: z.number().positive({
      message: 'Table width must be greater than zero',
    }),
  });

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (fileInput && fileInput.length > 0) {
      try {
        const fileText = fileInput[0];
        const board = (await fileText.text()).replace(/\s/g, '').split(',');
        const data = { board, width };
        wordArraySchema.parse(data);
        localStorage.setItem('userSpecs', JSON.stringify(data));
        navigate('/game');
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
      <form>
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
