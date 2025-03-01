export interface PackContent {
  id: number;
  code: string;
  content: string;
  name: string;
  createdAt?: Date;
  createdBy?: string;
  likeCount?: number;
}
