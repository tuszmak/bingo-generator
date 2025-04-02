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
  uploadedByUserId: string;
  likes: string[];
}

export interface User {
  userId: string;
  packIds: number[];
}
