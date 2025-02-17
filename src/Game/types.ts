import { z } from 'zod';

export type StateSetterType<T> = React.Dispatch<React.SetStateAction<T>>;

export const wordArraySchemaFactory = (width: number) =>
  z.object({
    board: z.array(z.string()).min(width ** 2, {
      message: `Your list of words is too small for a ${width} x ${width} table`,
    }),
    width: z.number().positive({
      message: 'Table width must be greater than zero',
    }),
  });

export interface BaseTable {
  board: string[];
  width: number;
}
