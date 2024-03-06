import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";

const arr = [
  "Select",
  "ID",
  "Name",
  "Phone Number",
  "Email",
  "Hobbies",
  "Update/Delete",
];

const bodyData = [
  {
    id: 1,
    name: "John Doe",
    phone: "08012345678",
    email: "akt@123",
    Hobbies: "Football",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "08012345679",
    email: "jane@example.com",
    Hobbies: "Reading",
  },
  {
    id: 3,
    name: "Alice Johnson",
    phone: "08012345680",
    email: "alice@example.com",
    Hobbies: "Painting",
  },
  {
    id: 4,
    name: "Bob Williams",
    phone: "08012345681",
    email: "bob@example.com",
    Hobbies: "Hiking",
  },
  {
    id: 5,
    name: "Charlie Brown",
    phone: "08012345682",
    email: "charlie@example.com",
    Hobbies: "Gaming",
  },
  {
    id: 6,
    name: "Diana Prince",
    phone: "08012345683",
    email: "diana@example.com",
    Hobbies: "Dancing",
  },
  {
    id: 7,
    name: "Eve Adams",
    phone: "08012345684",
    email: "eve@example.com",
    Hobbies: "Cooking",
  },
  {
    id: 8,
    name: "Frank Miller",
    phone: "08012345685",
    email: "frank@example.com",
    Hobbies: "Fishing",
  },
  {
    id: 9,
    name: "Grace Lee",
    phone: "08012345686",
    email: "grace@example.com",
    Hobbies: "Gardening",
  },
  {
    id: 10,
    name: "Harry White",
    phone: "08012345687",
    email: "harry@example.com",
    Hobbies: "Writing",
  },
];

interface Props {
  clicked: boolean;
  data: (e: number[]) => void;
  btnStatus: (e: boolean) => void;
}

const DataTable = ({ clicked, data, btnStatus }: Props) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleCheckboxChange = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedIds([...selectedIds, id]);
      btnStatus(true);
    } else {
      setSelectedIds(selectedIds.filter((item) => item !== id));
      if (selectedIds.length === 1) {
        btnStatus(false);
      }
    }
  };

  useEffect(() => {
    if (clicked) {
      data(selectedIds);
    }
  }, [clicked, selectedIds, data]);

  return (
    <div className=" w-full max-sm:hidden">
      <table className="w-full caption-bottom text-sm">
        <thead>
          <tr className="border-b transition-colors hover:bg-gray-100 ">
            {arr.map((item) => {
              return (
                <th
                  key={item}
                  className="h-12 px-4 text-left  font-bold text-black "
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        {bodyData.length > 0 ? (
          bodyData.map((item) => {
            return (
              <TableBody
                key={item.id}
                data={item}
                onCheckboxChange={handleCheckboxChange}
              />
            );
          })
        ) : (
          <span className="text-black text-xl mx-auto ">No data available</span>
        )}
      </table>
    </div>
  );
};

export default DataTable;
