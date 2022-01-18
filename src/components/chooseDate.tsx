import DatePicker from "react-datepicker";
import { ChooseDatePropType } from "../interfaces";
import "react-datepicker/dist/react-datepicker.css";

export default function ChooseDate({ date, setDate }: ChooseDatePropType) {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="flex flex-col">
          <DatePicker
            className="rounded-lg border-2 border-black px-4 py-2 w-full text-center"
            selected={date}
            onChange={(newDate) => setDate(newDate)}
            dateFormat="yyyy-MM-dd"
          />
        </div>
      </div>
      <p className="block text-xs text-center mt-2">
        Photos from the week of selected date
      </p>
    </>
  );
}
