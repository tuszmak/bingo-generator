import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { z, ZodError, ZodIssue } from 'zod';

export const SetupTextInput = () => {
  const [textInput, setTextInput] = useState('');
  const [width, setWidth] = useState(0);
  const [errors, setErrors] = useState<ZodIssue[]>([]);
  const navigate = useNavigate();

  const wordArraySchema = z.object({
    board: z.array(
      z.string().min(width ** 2, {
        message: `Your list of words is too small for a ${width} x ${width} table`,
      })
    ),
    width: z.number().positive({
      message: 'Table width must be greater than zero',
    }),
  });

  const handleSubmit = (e: React.MouseEvent) => {
    try {
      const board = textInput.replace(/\s/g, '').split(',');
      const data = { board, width };
      wordArraySchema.parse(data);
      localStorage.setItem('userSpecs', JSON.stringify(data));
      navigate('/game');
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        e.preventDefault();
        setErrors(error.issues);
      }
    }
  };

  return (
    <div>
      <form>
        {/* //TODO Valami segédlet a formatra + preview */}
        {errors.map((error, i) => (
          <p key={i} className='text-red-500'>
            {error.message}
          </p>
        ))}
        <Label htmlFor='text'>Words</Label>
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
        <Button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
