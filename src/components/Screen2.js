import React, { useState } from "react";
import DataTable from "./DataTable";

const Screen2 = ({ data }) => {
  const [filterText, setFilterText] = useState("");
  const [sortConfig, setSortConfig] = useState(null);

  const filteredData = data.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(filterText.toLowerCase())
  );

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) {
      return filteredData;
    }
    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  return (
    <div className="screen">
      <div className="filter">
        <label>Filter: </label>
        <input type="text" value={filterText} onChange={handleFilterChange} />
      </div>
      <DataTable
        data={sortedData}
        columns={[
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Phone" },
          { key: "city", label: "City" },
        ]}
        onSort={handleSort}
        sortConfig={sortConfig}
        hasGlobalFilter={true}
        hasIndividualColumnFilter={true}
        hasPagination={false}
        hasRefresh={true} 
      />
    </div>
  );
};

export default Screen2;
