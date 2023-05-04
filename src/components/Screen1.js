import React, { useState } from "react";
import DataTable from "./DataTable";

const Screen1 = ({ data }) => {
  const [globalFilter, setGlobalFilter] = useState("");

  const handleGlobalFilterChange = (event) => {
    setGlobalFilter(event.target.value);
  };

  const columns = [
    { field: "id", header: "ID" },
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
    { field: "phone", header: "Phone" },
    { field: "country", header: "Country" },
    { field: "city", header: "City" },
  ];

  return (
    <div>
      <h2>Screen 1</h2>
      <DataTable
        data={data}
        columns={columns}
        globalFilter={globalFilter}
        onGlobalFilterChange={handleGlobalFilterChange}
        pagination
      />
    </div>
  );
};

export default Screen1;
