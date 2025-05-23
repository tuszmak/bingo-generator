import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BaseTable } from '@/Game/types';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface BoardResponse {
  id: number;
  code: string;
  name: string;
  content: string;
}

const getErrorMessage = (statusCode: number): string => {
  switch (statusCode) {
    case 500:
      return 'Something failed in the server.';
    case 404:
      return "This code doesn't have a table!";
    default:
      return '';
  }
};

export const SetupCodeInput = () => {
  const [code, setCode] = useState('');
  const [width, setWidth] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.MouseEvent) => {
    if (code) {
      e.preventDefault();
      const response = await fetch(`/api/table/${code}`);
      console.log(response);

      const errorMessage = getErrorMessage(response.status);
      setErrorMessage(errorMessage);

      if (!errorMessage) {
        const board: BoardResponse = await response.json();
        if (board.name) {
          localStorage.setItem('foo', board.content);
          const words = board.content.split(',');
          const boardPayload: BaseTable = { board: words, width };

          localStorage.setItem('userSpecs', JSON.stringify(boardPayload));
          navigate('/game');
        }
      }
    }
  };
  return (
    <div>
      <form className='flex gap-3 flex-col'>
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        <Label htmlFor='code'>Insert code</Label>
        <Input
          type='text'
          required
          id='code'
          defaultValue={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Label htmlFor='width'>Width/Height</Label>
        <Input
          min={1}
          type='number'
          required
          id='width'
          onChange={(e) => setWidth(parseInt(e.target.value))}
        />
        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
      </form>
    </div>
  );
};
