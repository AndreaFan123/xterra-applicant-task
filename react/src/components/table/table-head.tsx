export default function TableHead({ header }: { header: string }) {
  return (
    <th>
      {header === "Splits" ? "Discipline (Swimming / Bike / Running)" : header}
    </th>
  );
}
