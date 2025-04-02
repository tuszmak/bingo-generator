import MenuBar from '@/common/MenuBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SetupCodeInput } from './SetupCodeInput';
import { SetupFileInput } from './SetupFileInput';
import { SetupTextInput } from './SetupTextInput';

export default function Setup() {
  return (
    <div>
      <MenuBar />
      <div className='flex flex-col gap-4 justify-center items-center h-with-menubar'>
        <div>
          <h1 className='font-bold text-2xl'>Pick a word source</h1>
        </div>
        <div>
          <Tabs defaultValue='account' className='w-[400px]'>
            <TabsList className='w-[400px]'>
              <TabsTrigger value='text' className='w-1/3'>
                Text
              </TabsTrigger>
              <TabsTrigger value='code' className='w-1/3'>
                Code
              </TabsTrigger>
              <TabsTrigger value='file' className='w-1/3'>
                File
              </TabsTrigger>
            </TabsList>
            <TabsContent value='text'>
              <SetupTextInput />
            </TabsContent>
            <TabsContent value='code'>
              <SetupCodeInput />
            </TabsContent>
            <TabsContent value='file'>
              <SetupFileInput />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
