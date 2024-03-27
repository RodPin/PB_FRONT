import React from "react";
import PageLoader from "../components/PageLoader";
import useQueryLogs from "../hooks/useQuery/useQueryLogs";

function Logs() {
  const { data: logs, isLoading } = useQueryLogs();
  return (
    <PageLoader loading={isLoading}>
      <h1>Logs</h1>
      <span style={{ whiteSpace: "pre-wrap" }}>{logs}</span>
    </PageLoader>
  );
}

export default Logs;
