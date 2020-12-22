export interface iTodo {
  id: number;
  text: string;
  done: boolean;
  createdAt: Date;
}

export interface iUser {
  id: string;
  email: string;
  googleId: string;
  username: string;
}
