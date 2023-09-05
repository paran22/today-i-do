export interface BoardInput {
  todayDone: string;
  good: string;
  notGood: string;
}

export interface Board {
  todayDone: string;
  good: string;
  notGood: string;
  createAt: Date;
  username: string;
}
