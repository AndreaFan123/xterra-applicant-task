import { ResultType } from "../../constants/result";
import { formattedParseTime } from "../../utils/parse-time";
import {
  filterTheFastest,
  findFastestTime,
  sortedTotalTimeData,
} from "../../utils/table-sort";
import TableHead from "./table-head";
import TableRow from "./table-row";

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

  const sortedData = sortedTotalTimeData(result as ResultType[]);
  const fastestData = findFastestTime(result as ResultType[]);

  const matchedFastestOfSwim = filterTheFastest(
    "swim",
    sortedData,
    fastestData
  );
  const matchedFastestBike = filterTheFastest("bike", sortedData, fastestData);
  const matchedFastestRun = filterTheFastest("run", sortedData, fastestData);
  const swimTime = formattedParseTime(fastestData["swim"].time);
  const bikeTime = formattedParseTime(fastestData["bike"].time);
  const runTime = formattedParseTime(fastestData["run"].time);

  return (
    <table>
      <thead>
        <tr>
          {headers?.map((header, index) => (
            <TableHead key={index} header={header} />
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData?.map((athlete, index) => (
          <TableRow
            key={index}
            athlete={athlete}
            fastestAthleteAndTime={{
              swim: { name: matchedFastestOfSwim, time: swimTime },
              bike: { name: matchedFastestBike, time: bikeTime },
              run: { name: matchedFastestRun, time: runTime },
            }}
          />
        ))}
      </tbody>
    </table>
  );
}
