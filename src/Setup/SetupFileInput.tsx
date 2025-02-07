import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const SetupFileInput = () => {
  const [fileInput, setFileInput] = useState<FileList | null>(null);
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (fileInput && fileInput.length > 0) {
      const a = fileInput[0];
      a.text().then((data) => {
        const board = data.replace(/\s/g, '').split(',');
        localStorage.setItem(
          'userSpecs',
          JSON.stringify({
            board,
            width,
          })
        );
      });
    }
    navigate('/game');
  };

  return (
    <div>
      <form>
        <Label htmlFor='text'>Words</Label>
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
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
};
