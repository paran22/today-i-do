export interface BoardInput {
  todayDone: string;
  good: string;
  notGood: string;
}

export interface BoardModel {
  todayDone: string;
  good: string;
  notGood: string;
  createAt: Date;
  username: string;
  userId: string;
}
