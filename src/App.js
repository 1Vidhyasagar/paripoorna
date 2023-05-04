import { useState } from "react";
import DataTable from "./components/DataTable";

const App = () => {
  const [screen, setScreen] = useState(1);

  const columns1 = [
    { field: "id", header: "ID" },
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
    { field: "phone", header: "Phone" },
    { field: "country", header: "Country" },
    { field: "city", header: "City" },
  ];

  const columns2 = [
    { field: "id", header: "ID" },
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
    { field: "phone", header: "Phone" },
  ];

  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "(123) 456-7890",
      country: "USA",
      city: "New York",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "(123) 456-7890",
      country: "Canada",
      city: "Toronto",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phone: "(123) 456-7890",
      country: "UK",
      city: "London",
    },
    {
      id: 4,
      name: "Sarah Lee",
      email: "sarah.lee@example.com",
      phone: "(123) 456-7890",
      country: "Australia",
      city: "Sydney",
    },
    {
      id: 5,
      name: "Mike Brown",
      email: "mike.brown@example.com",
      phone: "(123) 456-7890",
      country: "USA",
      city: "Los Angeles",
    },
  ];

  const handleScreenChange = (screenNumber) => {
    setScreen(screenNumber);
  };

  return (
    <div className="App">
      <div className="button-group">
        <button onClick={() => handleScreenChange(1)}>Screen 1</button>
        <button onClick={() => handleScreenChange(2)}>Screen 2</button>
      </div>
      {screen === 1 && (
        <DataTable
          columns={columns1}
          data={data}
          globalFilter={false}
          individualColumnFilter={true}
          pagination={true}
        />
      )}
      {screen === 2 && (
        <DataTable
          columns={columns2}
          data={data}
          globalFilter={true}
          individualColumnFilter={true}
          sorting={true}
          refresh={true}
        />
      )}
    </div>
  );
};

export default App;
