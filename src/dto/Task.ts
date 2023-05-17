import { User } from './User';

export interface Task {
  id: number;
  title: string;
  creationDate: Date;
  completionDate: Date | null;
  userId: User['id'];
}
