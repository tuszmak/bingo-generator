export interface PackContent {
  id: number;
  code: string;
  content: string;
  name: string;
  createdAt?: Date;
  createdBy?: string;
  likeCount?: number;
}

export interface NewPack {
  name: string;
  content: string;
  submittedBy: string;
  likes: string[];
}
