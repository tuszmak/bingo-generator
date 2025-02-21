import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const SetupTooltip = () => {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <img
              src='src/assets/tooltip_question_mark.svg'
              width={20}
              height={20}
              onClick={(e) => e.preventDefault()}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Separate words with commas: foo,bar</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
