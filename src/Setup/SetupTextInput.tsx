import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const SetupTextInput = () => {
  const [textInput, setTextInput] = useState('');
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const board = textInput.replace(/\s/g, '').split(',');
    localStorage.setItem(
      'userSpecs',
      JSON.stringify({
        board,
        width,
      })
    );
    navigate('/game');
  };
  return (
    <div>
      <form>
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
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
};
