import { ResultType } from "../../constants/result";

type TableRowProps = {
  athlete: ResultType;
  fastestAthleteAndTime: {
    swim: { name?: string; time?: string };
    bike: { name?: string; time?: string };
    run: { name?: string; time?: string };
  };
};

export default function TableRow({
  athlete,
  fastestAthleteAndTime,
}: TableRowProps) {
  const { swim, bike, run } = fastestAthleteAndTime;

  return (
    <tr>
      <td>{athlete.first_name}</td>
      <td>{athlete.last_name}</td>
      <td>{athlete.gender}</td>
      <td>{athlete.division}</td>
      <td>{athlete.nationality}</td>
      <td>{athlete.total_time}</td>
      <td>
        {athlete.last_name === swim.name ? `🥇 Swimming (${swim.time})` : ""}
        {athlete.last_name === bike.name ? `🥇 Bike (${bike.time})` : ""}
        {athlete.last_name === run.name ? `🥇 Running (${run.time})` : ""}
      </td>
    </tr>
  );
}
