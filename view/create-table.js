import {
  sortedTotalTimeData,
  findFastestTime,
  filterTheFastest,
} from "../controller/sorted-data.js";

import { formattedParseTime } from "../utils/parse-time-utils.js";

export function createTable(data) {
  const table = document.querySelector("#table");
  const tableThead = document.querySelector("#table-head");
  const tableTr = document.querySelector("#table-tr");
  const tableBody = document.querySelector("#table-body");
  const errorMessageContainer = document.querySelector("#error-msg");

  const sortedData = sortedTotalTimeData(data);
  const fastestData = findFastestTime(data);

  const matchedFastestOfSwim = filterTheFastest(
    "swim",
    sortedData,
    fastestData
  );
  const matchedFastestBike = filterTheFastest("bike", sortedData, fastestData);
  const matchedFastestRun = filterTheFastest("run", sortedData, fastestData);

  const tableHeaders = [
    "First Name",
    "Last Name",
    "Gender",
    "Division",
    "Nationality",
    "Time",
    "Fastest",
  ];
  tableHeaders.map((header) => {
    const th = document.createElement("th");
    th.innerHTML = `
      <span>${header}</span>
    `;
    const thClass = "border";
    th.classList.add(thClass);
    tableTr.appendChild(th);
  });
  tableThead.appendChild(tableTr);
  table.appendChild(tableThead);

  sortedData.map((result) => {
    const lastName = result.last_name;
    const swimTime = formattedParseTime(fastestData["swim"].time);
    const bikeTime = formattedParseTime(fastestData["bike"].time);
    const runTime = formattedParseTime(fastestData["run"].time);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${result.first_name}</td>
      <td>${result.last_name}</td>
      <td>${result.gender}</td>
      <td>${result.division}</td>
      <td>${result.nationality}</td>
      <td>${result.total_time}</td>
      <td>${
        lastName === matchedFastestOfSwim
          ? `<span class="fastest">🥇 Swimming (${swimTime})</span>`
          : ""
      } 
      ${
        lastName === matchedFastestBike
          ? `<span class="fastest">🥇 Biking (${bikeTime})</span>`
          : ""
      } 
    ${
      lastName === matchedFastestRun
        ? `<span class="fastest">🥇 Running (${runTime})</span>`
        : ""
    }
      </td>
    
    `;
    tableBody.appendChild(row);
  });
  table.appendChild(tableBody);
  errorMessageContainer.style.display = "none";
}
