import { useEffect, useState } from "react";
import ErrorMessage from "./components/table/error-message";
import TableContainer from "./components/table/table-container";
import { ResultType } from "./constants/result";

export default function App() {
  const [fetchResult, setFetchResult] = useState<ResultType[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://core.xterraplanet.com/api/application-task/cee4389b-1668-4e39-b500-3572f0982b09"
        );
        const data = await response.json();
        setFetchResult(data);
      } catch (error) {
        setErrorMessage("Something went wrong! We will fix it immediately.");
        throw new Error((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAndSetState();
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <span>Loading...</span>
      </div>
    );
  }

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return <TableContainer result={fetchResult} />;
}
