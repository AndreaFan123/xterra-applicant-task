import { fetchResults } from "./model/fetch-results.js";
import { createTable } from "./view/create-table.js";
import { displayErrorMessage } from "./view/display-error.js";
import { sortedTotalTimeData } from "./controller/sorted-data.js";
import "./style.css";

async function init() {
  try {
    const data = await fetchResults();
    const sortedData = sortedTotalTimeData(data);
    createTable(sortedData);
  } catch (error) {
    console.error(error.message);
    displayErrorMessage();
  }
}

init();
