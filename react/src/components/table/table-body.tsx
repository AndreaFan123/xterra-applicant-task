// import { ResultType } from "../../constants/result";

// type fastestResultType = {
//   swim: {
//     athlete: null;
//     time: number;
//   };
//   bike: {
//     athlete: null;
//     time: number;
//   };
//   run: {
//     athlete: null;
//     time: number;
//   };
// };

// export default function TableBody({
//   athlete,
//   fastestTime,
// }: {
//   athlete: ResultType;
//   fastestTime: fastestResultType;
// }) {
//   return (
//     <>
//       <td>{athlete.first_name}</td>
//       <td>{athlete.last_name}</td>
//       <td>{athlete.gender}</td>
//       <td>{athlete.nationality}</td>
//       <td>{athlete.division}</td>
//       {/* <td>
//         {athlete === fastestTime.swim.athlete ? (
//           <strong>{athlete.splits[0].time}</strong>
//         ) : (
//           athlete.splits[0].time
//         )}
//       </td>
//       <td>
//         {athlete === fastestTime.bike.athlete ? (
//           <strong>{athlete.splits[1].time}</strong>
//         ) : (
//           athlete.splits[1].time
//         )}
//       </td>
//       <td>
//         {athlete === fastestTime.run.athlete ? (
//           <strong>{athlete.splits[2].time}</strong>
//         ) : (
//           athlete.splits[2].time
//         )}
//       </td> */}
//     </>
//   );
// }
