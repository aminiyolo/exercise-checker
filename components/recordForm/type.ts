import { EXERCISE } from '@/constant';

type ExerciseName = (typeof EXERCISE)[number]['name'];
type ExerciseNameType = ExerciseName | '';
type ExerciseCountType = '분' | '개' | '';
type RecordType = {
  name: ExerciseName;
  count: number;
  type: ExerciseCountType;
  id: number;
};

export type { ExerciseNameType, ExerciseCountType, RecordType };
