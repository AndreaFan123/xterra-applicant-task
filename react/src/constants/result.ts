export type SplitsType = {
  name: string;
  time: string;
};

export type ResultType = {
  first_name: string;
  last_name: string;
  gender: string;
  nationality: string;
  division: string;
  total_time: string;
  splits: SplitsType[];
};
