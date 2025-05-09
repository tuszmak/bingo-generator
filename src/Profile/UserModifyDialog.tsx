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
import { useUser } from '@clerk/react-router';
import { useState } from 'react';

function UserModifyDialog() {
  const { user } = useUser();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [userName, setUserName] = useState(user?.username ?? '');
  const [email, setEmail] = useState(
    user?.emailAddresses[0]?.emailAddress ?? ''
  );

  const handleUserUpdate = async (name: string, email: string) => {
    console.log('Updating user', name, email);

    const response = await fetch(`/api/v1/users/${user?.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: name,
        email,
      }),
    });
    if (response.ok) {
      setDialogOpen(false);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button>Modify User</Button>
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
                Username
              </Label>
              <Input
                id='name'
                className='col-span-3'
                value={userName}
                placeholder='Enter your username'
                required
                name='name'
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='email'>
                <div className='flex justify-end items-center gap-1'>Email</div>
              </Label>
              <Textarea
                id='words'
                className='col-span-3'
                value={email}
                placeholder='Enter your email'
                name='words'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type='submit'
              onClick={() => handleUserUpdate(userName, email)}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default UserModifyDialog;
