import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { PriceFormatter } from "../../extra/PriceFormatter";
import { formatDate, isString } from "../../extra/Extra";

export default function PaymentPeriod({ nasiya }) {
  return (
    <>
      <span>
        <p>
          {isString(nasiya?.payment1?.date)
            ? nasiya?.payment1?.date
            : formatDate(nasiya?.payment1?.date, true)}
        </p>
        <MdOutlineRadioButtonChecked />
        <p>{PriceFormatter(nasiya?.payment1?.sum)}</p>
      </span>
      <TfiLayoutLineSolid />
      <span>
        <p>
          {isString(nasiya?.payment2?.date)
            ? nasiya?.payment2?.date
            : formatDate(nasiya?.payment2?.date, true)}
        </p>
        {nasiya?.payment2?.condition ? (
          <MdOutlineRadioButtonChecked />
        ) : (
          <MdOutlineRadioButtonUnchecked />
        )}
        <p>{PriceFormatter(nasiya?.payment2?.sum)}</p>
      </span>
      <TfiLayoutLineSolid />
      <span>
        <p>
          {isString(nasiya?.payment3?.date)
            ? nasiya?.payment3?.date
            : formatDate(nasiya?.payment3?.date, true)}
        </p>
        {nasiya?.payment3?.condition ? (
          <MdOutlineRadioButtonChecked />
        ) : (
          <MdOutlineRadioButtonUnchecked />
        )}
        <p>{PriceFormatter(nasiya?.payment3?.sum)}</p>
      </span>
    </>
  );
}
