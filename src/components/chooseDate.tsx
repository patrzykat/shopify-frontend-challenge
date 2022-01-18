import DatePicker from "react-datepicker";
import { ChooseDatePropType } from "../interfaces";
import "react-datepicker/dist/react-datepicker.css";

export default function ChooseDate({ date, setDate }: ChooseDatePropType) {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex">
        <span className="text-sm border-2 rounded-l px-4 py-2 bg-gray-300 whitespace-no-wrap">
          Date:
        </span>
        <DatePicker
          className="border-2 rounded-r px-4 py-2 w-full"
          selected={date}
          onChange={(newDate) => setDate(newDate)}
          dateFormat="yyyy-MM-dd"
        />
      </div>
    </div>
  );
}
