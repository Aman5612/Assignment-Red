import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect } from "react";

interface Props {
  handleSelectedData: (status: boolean) => void;
  selectedData: number[];
  status: boolean;
}

const NavBar = ({ handleSelectedData, selectedData, status }: Props) => {
  const handleSubmit = () => {
    handleSelectedData(status);
  };
  useEffect(() => {
    console.log("NavBar", selectedData);
  }, [selectedData]);

  return (
    <div className="flex max-md:flex-col justify-between max-md:items-center w-full ">
      <div className="flex gap-6 p-2 max-sm:items-center">
        <span className="ml-2 rounded-lg overflow-hidden ">
          <Image src="/Logo.png" alt="logo" width={250} height={150} />
        </span>
        <Input
          className="border-2 border-solid border-slate-950 w-[400px] h-14 my-auto focus:outline-none max-sm:hidden placeholder:text-lg"
          placeholder="Search......"
        />
      </div>

      <Button
        className="w-40 text-xl my-auto mr-4 hover:bg-gray-700 max-sm:mt-4"
        onClick={handleSubmit}
      >
        {status ? (
          "Send Data"
        ) : (
          <>
            <span className="-ml-3 mr-3 text-[30px] font-extrabold">+</span>Add
            Data
          </>
        )}
      </Button>
    </div>
  );
};

export default NavBar;
