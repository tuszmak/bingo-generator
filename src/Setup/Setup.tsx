import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SetupCsvInput } from './SetupCsvInput';
import { SetupFileInput } from './SetupFileInput';
import { SetupTextInput } from './SetupTextInput';

export default function Setup() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList className='w-[400px]'>
          <TabsTrigger value='text' className='w-1/3'>
            Text
          </TabsTrigger>
          <TabsTrigger value='csv' className='w-1/3'>
            CSV
          </TabsTrigger>
          <TabsTrigger value='file' className='w-1/3'>
            File
          </TabsTrigger>
        </TabsList>
        <TabsContent value='text'>
          <SetupTextInput />
        </TabsContent>
        <TabsContent value='csv'>
          <SetupCsvInput />
        </TabsContent>
        <TabsContent value='file'>
          <SetupFileInput />
        </TabsContent>
      </Tabs>
    </div>
  );
}
