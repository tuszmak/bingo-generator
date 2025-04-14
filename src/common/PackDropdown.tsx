import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import PackDeleteDialog from '@/Packs/PackDeleteDialog';
import PackModifyDialog from '@/Packs/PackModifyDialog';
import { PackContent } from '@/Packs/types';
import { EllipsisVertical } from 'lucide-react';

function PackDropdown({ pack }: { pack: PackContent }) {
  const handleOpen = (e: Event) => {
    e.preventDefault();
  };

  return (
    <div className='text-2xl font-semibold'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={handleOpen}>
            <PackModifyDialog pack={pack} />
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={handleOpen}>
            <PackDeleteDialog pack={pack} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default PackDropdown;
