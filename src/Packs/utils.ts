import { useUser } from '@clerk/react-router';
import { NewPack } from './types';

export const buildNewPackFactory =
  (userId: string) =>
  (packName: string, wordsInput: string): NewPack => ({
    name: packName ?? 'Your pack!',
    content: wordsInput,
    uploadedByUserId: userId,
    likes: [],
  });

export const useBuildNewPack = () => {
  const { user } = useUser();
  if (!user) throw new Error('Cannot use component without user');

  return buildNewPackFactory(user.id);
};
