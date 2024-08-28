import { ResultType } from "../constants/result";
import { parseTime } from "./parse-time";

export type FastestTimeType = {
  swim: { athlete: ResultType | null; time: number };
  bike: { athlete: ResultType | null; time: number };
  run: { athlete: ResultType | null; time: number };
};

export function sortedTotalTimeData(result: ResultType[]) {
  const filterOutNotValidTotalTime = result.filter((time) =>
    parseTime(time.total_time)
  );

  const sortedTotalTime = filterOutNotValidTotalTime.sort((time_a, time_b) => {
    const time_a_in_seconds = parseTime(time_a.total_time);
    const time_b_in_seconds = parseTime(time_b.total_time);

    if (time_a_in_seconds && time_b_in_seconds) {
      return time_a_in_seconds - time_b_in_seconds;
    }
    return 0;
  });
  return sortedTotalTime;
}

export function findFastestTime(result: ResultType[]) {
  const fastestResult: FastestTimeType = {
    swim: { athlete: null, time: Infinity },
    bike: { athlete: null, time: Infinity },
    run: { athlete: null, time: Infinity },
  };

  result.forEach((athlete) => {
    const splits = {
      swim_time: parseTime(
        athlete.splits.find((split) => split.name === "swim_time")?.time
      ),
      bike_time: parseTime(
        athlete.splits.find((split) => split.name === "bike_time")?.time
      ),
      run_time: parseTime(
        athlete.splits.find((split) => split.name === "run_time")?.time
      ),
    };

    if (splits.swim_time && splits.bike_time && splits.run_time) {
      if (splits?.swim_time < fastestResult["swim"].time) {
        fastestResult["swim"] = { athlete, time: splits.swim_time };
      }

      if (splits?.bike_time < fastestResult["bike"].time) {
        fastestResult["bike"] = { athlete, time: splits.bike_time };
      }

      if (splits?.run_time < fastestResult["run"].time) {
        fastestResult["run"] = { athlete, time: splits.run_time };
      }
    }
  });
  return fastestResult;
}

export function filterTheFastest(
  category: string,
  sortedResult: ResultType[],
  fastestTime: FastestTimeType
) {
  const fastestAthlete = fastestTime[category as keyof FastestTimeType].athlete;
  return fastestAthlete
    ? sortedResult.find(
        (athlete) => athlete.last_name === fastestAthlete.last_name
      )?.last_name
    : "";
}
