export interface IExerciseType {
  value: string;
  viewValue: string;
}

export interface IExerciseSelection {
  value: string;
  viewValue: string;
}

export interface ISessionModel {
  date?: Date | string;
  exerciseType?: string;
  exercise?: string;
  set: number[];
  reps: number[];
  weight: number[];
  volume: number[];
}

export const previousSessions: ISessionModel = {
  date: 'Sun May 08 2022 22:28:03 GMT-0400 (Eastern Daylight Time)',
  exerciseType: 'Barbell',
  exercise: 'Clean',
  set: [1, 2, 3, 4],
  reps: [12, 10, 8, 8],
  weight: [10, 20, 30, 40],
  volume: [120, 200, 240, 320],
};
