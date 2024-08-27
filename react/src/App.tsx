import { useEffect, useState } from "react";
import TableContainer from "./components/table/table-container";
import { ResultType } from "./constants/result";
import ErrorMessage from "./components/table/error-message";

async function fetchData() {
  const apiUri =
    "https://core.xterraplanet.com/api/application-task/cee4389b-1668-4e39-b500-3572f0982b09";

  if (!apiUri) {
    throw new Error("Something went wrong!We will fix immediately");
  }

  try {
    const resp = await fetch(apiUri);
    if (!resp.ok) {
      throw new Error("Something went wrong! We will fix immediately");
    }
    const data: ResultType[] = await resp.json();
    return data;
  } catch (error) {
    console.error((error as Error).message);
    throw new Error("Something went wrong! We will fix immediately");
  }
}

export default function App() {
  const [fetchResult, setFetchResult] = useState<ResultType[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const result = fetchData();
    if (!result) {
      setErrorMessage("Something went wrong! We will fix immediately");
      return;
    }
    result.then((data) => {
      setFetchResult(data);
    });
  }, []);

  return (
    <main>
      {errorMessage ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <TableContainer result={fetchResult} />
      )}
    </main>
  );
}
