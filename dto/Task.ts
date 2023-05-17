export interface Task {
  id: number;
  title: string;
  creationDate: Date;
  completionDate: Date | null;
  userId: number;
}
