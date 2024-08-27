import { ResultType } from "../../constants/result";
import { parseTime } from "../../utils/parse-time";
// import TableBody from "./table-body";
// import TableHeader from "./table-header";

export default function TableContainer({
  result,
}: {
  result: ResultType[] | null;
}) {
  const header = new Set<string>();
  const headers: string[] = [];

  if (result) {
    result.forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (!header.has(key)) {
          header.add(key);
          headers.push(key);
        }
      });
    });
  }

  // make first_name, last_name to First Name, Last Name ...
  headers.forEach((header, index) => {
    headers[index] = header
      .split("_")
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join(" ");
  });

  function sortedTotalTimeData(result: ResultType[]) {
    const filterOutNotValidTotalTime = result.filter((time) =>
      parseTime(time.total_time)
    );

    const sortedTotalTime = filterOutNotValidTotalTime.sort(
      (time_a, time_b) => {
        const time_a_in_seconds = parseTime(time_a.total_time);
        const time_b_in_seconds = parseTime(time_b.total_time);

        if (time_a_in_seconds && time_b_in_seconds) {
          return time_a_in_seconds - time_b_in_seconds;
        }
        return 0;
      }
    );
    return sortedTotalTime;
  }

  // function findFastestTime(result: ResultType[]) {
  //   const fastestResult = {
  //     swim: { athlete: null, time: Infinity },
  //     bike: { athlete: null, time: Infinity },
  //     run: { athlete: null, time: Infinity },
  //   };

  //   result.forEach((athlete) => {
  //     const splits = {
  //       swim_time: parseTime(
  //         athlete.splits.find((split) => split.name === "swim_time").time
  //       ),
  //       bike_time: parseTime(
  //         athlete.splits.find((split) => split.name === "bike_time").time
  //       ),
  //       run_time: parseTime(
  //         athlete.splits.find((split) => split.name === "run_time").time
  //       ),
  //     };

  //     if (splits?.swim_time < fastestResult["swim"].time) {
  //       fastestResult["swim"] = { athlete, time: splits.swim_time };
  //     }

  //     if (splits.bike_time < fastestResult["bike"].time) {
  //       fastestResult["bike"] = { athlete, time: splits.bike_time };
  //     }

  //     if (splits.run_time < fastestResult["run"].time) {
  //       fastestResult["run"] = { athlete, time: splits.run_time };
  //     }
  //   });

  //   return fastestResult;
  // }

  const sortedResult = sortedTotalTimeData(result || []);
  // const fastestTime = findFastestTime(result || []);

  return (
    <table>
      <thead>
        <tr>
          {headers?.map((header, index) => (
            <th key={index}>
              {header === "Splits"
                ? "Discipline (Swimming / Bike / Running)"
                : header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedResult?.map((athlete, index) => (
          <>
            <tr key={index}>
              <td>{athlete.first_name}</td>
              <td>{athlete.last_name}</td>
              <td>{athlete.gender}</td>
              <td>{athlete.nationality}</td>
              <td>{athlete.total_time}</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
}
