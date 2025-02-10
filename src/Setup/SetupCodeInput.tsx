import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DEFAULT_BOARD_STRING_ARRAY } from '@/Game/defaultBoard';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const SetupCodeInput = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (code) {
      localStorage.setItem(
        'userSpecs',
        JSON.stringify(DEFAULT_BOARD_STRING_ARRAY)
      );
      navigate('/game');
    }
  };
  return (
    <div>
      <form>
        <Label htmlFor='code'>Insert code</Label>
        <Input
          type='text'
          required
          id='code'
          defaultValue={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
};
