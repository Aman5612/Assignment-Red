import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBin5Line } from "react-icons/ri";

interface Props {
  data: {
    id: number;
    name: string;
    phone: string;
    email: string;
    Hobbies: string;
  };
  onCheckboxChange: (id: number, checked: boolean) => void;
}

const TableBody = ({ data, onCheckboxChange }: Props) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    onCheckboxChange(data.id, checked);
  };
  return (
    <tbody>
      <tr className="border-b transition-colors hover:bg-slate-100 ">
        <td className="p-4 align-middle ">
          <input
            type="checkbox"
            id={data.name}
            name={data.name}
            value={data.id}
            onChange={handleCheckboxChange}
          />
        </td>
        <td className="p-4 align-middle">{data.id}</td>
        <td className="p-4 align-middle">{data.name}</td>
        <td className="p-4 align-middle ">{data.phone}</td>
        <td className="p-4 align-middle ">{data.email}</td>
        <td className="p-4 align-middle ">{data.Hobbies}</td>
        <td className="p-4 align-middle">
          <div className="flex justify-start gap-4 space-x-2">
            <LiaEditSolid className="text-blue-400 text-[30px]" />
            <RiDeleteBin5Line className="text-red-500 text-[30px]" />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
