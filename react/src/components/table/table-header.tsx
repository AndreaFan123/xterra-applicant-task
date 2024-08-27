export default function TableHeader({ headers }: { headers: string[] }) {
  return (
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
  );
}
