import React from "react";

const ResultTable = ({ data }) => {
  const tableData = data.map((element, idx) => {
    return (
      <tr key={element[0]}>
        <td>{idx + 1}</td>
        <td>{element[0]}</td>
        <td>{element[1]}</td>
      </tr>
    );
  });

  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Word</th>
          <th>Word Count</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
};

export default ResultTable;
