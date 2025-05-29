import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { TfiLayoutLineSolid } from "react-icons/tfi";

export default function PaymentPeriod({ nasiya }) {
  return (
    <>
      <span>
        <p>{nasiya?.payment1?.date}</p>
        <MdOutlineRadioButtonChecked />
        <p>
          {nasiya?.payment1?.sum
            ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
            .split(".")[0]
            .replaceAll(",", " ")}
        </p>
      </span>
      <TfiLayoutLineSolid />
      <span>
        <p>{nasiya?.payment2?.date}</p>
        {nasiya?.payment2?.condition ? (
          <MdOutlineRadioButtonChecked />
        ) : (
          <MdOutlineRadioButtonUnchecked />
        )}
        <p>
          {nasiya?.payment2?.sum
            ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
            .split(".")[0]
            .replaceAll(",", " ")}
        </p>
      </span>
      <TfiLayoutLineSolid />
      <span>
        <p>{nasiya?.payment3?.date}</p>
        {nasiya?.payment3?.condition ? (
          <MdOutlineRadioButtonChecked />
        ) : (
          <MdOutlineRadioButtonUnchecked />
        )}
        <p>
          {nasiya?.payment3?.sum
            ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
            .split(".")[0]
            .replaceAll(",", " ")}
        </p>
      </span>
    </>
  );
}
