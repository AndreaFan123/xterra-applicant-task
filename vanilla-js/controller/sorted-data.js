// find out which athlete had the fastest swimming time, bike time and run time
// Exclude 00:00:00 and 23:59:59

import { parseTime } from "../utils/parse-time-utils.js";

export function filterTheFastest(category, sortedData, fastestData) {
  return sortedData.find(
    (athlete) => athlete.last_name === fastestData[category].athlete.last_name
  )["last_name"];
}

export function findFastestTime(data) {
  let fastestResult = {
    swim: { athlete: null, time: Infinity },
    bike: { athlete: null, time: Infinity },
    run: { athlete: null, time: Infinity },
  };

  data.forEach((athlete) => {
    const splits = {
      swim_time: parseTime(
        athlete.splits.find((split) => split.name === "swim_time").time
      ),
      bike_time: parseTime(
        athlete.splits.find((split) => split.name === "bike_time").time
      ),
      run_time: parseTime(
        athlete.splits.find((split) => split.name === "run_time").time
      ),
    };

    if (splits.swim_time < fastestResult["swim"].time) {
      fastestResult["swim"] = { athlete, time: splits.swim_time };
    }

    if (splits.bike_time < fastestResult["bike"].time) {
      fastestResult["bike"] = { athlete, time: splits.bike_time };
    }

    if (splits.run_time < fastestResult["run"].time) {
      fastestResult["run"] = { athlete, time: splits.run_time };
    }
  });

  return fastestResult;
}

export function sortedTotalTimeData(data) {
  const filterOutNotValidTotalTime = data.filter((time) =>
    parseTime(time.total_time)
  );

  const sortedTotalTime = filterOutNotValidTotalTime.sort((time_a, time_b) => {
    const time_a_in_seconds = parseTime(time_a.total_time);
    const time_b_in_seconds = parseTime(time_b.total_time);

    return time_a_in_seconds - time_b_in_seconds;
  });
  return sortedTotalTime;
}
