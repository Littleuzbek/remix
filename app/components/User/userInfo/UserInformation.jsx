import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Form } from "@remix-run/react";
import { DatePicker } from "./DatePicker";
import { GenderSelection } from "./GenderSelect";

export default function UserInformation() {
  const userInfo = useSelector((state) => state.cart.user);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  // console.log(userInfo);

  function formatTimestampToDate(timeObj) {
    if (!timeObj) return null;
    const milliseconds =
      timeObj.seconds * 1000 + Math.floor(timeObj.nanoseconds / 1_000_000);

    const date = new Date(milliseconds);

    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  const [birth, setBirth] = useState("Tug'ilgan sana");

  useEffect(() => {
    if (userInfo) {
      setName(userInfo?.name || "");
      setSurname(userInfo?.surname || "");
      setNum(userInfo?.number || "");
      setEmail(userInfo?.email || "");
      setGender(userInfo?.gender || "male");
      setBirth(formatTimestampToDate(userInfo?.birthDay) || "Tug'ilgan sana");
    }
  }, [userInfo]);
  // function dateToTimestampObject(dateString) {
  //   const date = new Date(dateString);

  //   const milliseconds = date.getTime();
  //   const seconds = Math.floor(milliseconds / 1000);
  //   const nanoseconds = (milliseconds % 1000) * 1_000_000;

  //   return {
  //     seconds: seconds,
  //     nanoseconds: nanoseconds
  //   };
  // }

  const formatPhoneNumber = (value) => {
    // Remove non-digit characters
    let digits = value.replace(/\D/g, "");

    // Always start with "998"
    if (!digits.startsWith("998")) {
      digits = "998" + digits;
    }

    // Limit to 12 digits max: 998 XX XXX XX XX
    digits = digits.slice(0, 12);

    // Format the number
    let formatted = "+998";
    if (digits.length > 3) {
      formatted += " " + digits.slice(3, 5);
    }
    if (digits.length > 5) {
      formatted += " " + digits.slice(5, 8);
    }
    if (digits.length > 8) {
      formatted += " " + digits.slice(8, 10);
    }
    if (digits.length > 10) {
      formatted += " " + digits.slice(10, 12);
    }

    return formatted;
  };

  const cancelChange = () => {
    setName(userInfo?.name || "");
    setSurname(userInfo?.surname || "");
    setNum(userInfo?.number || "");
    setEmail(userInfo?.email || "");
    setGender(userInfo?.gender || "male");
    setBirth(formatTimestampToDate(userInfo?.birthDay) || "Tug'ilgan sana");
  };
  return (
    <div className="user-information">
      <h2>Ma'lumotlarim</h2>

      <Form
        id="infoForm"
        className="user-settings"
        method="post"
      >
        <div className="product-info">
          <p>Ism</p>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="product-info">
          <p>Familiya</p>
          <input
            type="text"
            required
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="product-info">
          <p>Telfon raqam</p>
          <input
            type="numeric"
            required
            value={num}
            onChange={(e) => {
              setNum(formatPhoneNumber(e.target.value));
            }}
            onKeyDown={(e) => {
              if (e.target.value.length === 4 && "Backspace" === e.key) {
                e.target.value = "";
              }
            }}
          />
        </div>
        <div className="product-info">
          <p>Email</p>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="product-info">
          <p>Tug'ilgan sana</p>
          <DatePicker
            onDateChange={(date) => setBirth(date)}
            placeholder={birth}
          />
        </div>
        <GenderSelection
          onChange={(gender) => setGender(gender)}
          defaultValue={gender}
          name="user-gender"
        />
      </Form>

      {name !== (userInfo?.name || "") ||
      surname !== (userInfo?.surname || "") ||
      num !== (userInfo?.number || "") ||
      email !== (userInfo?.email || "") ||
      gender !== (userInfo?.gender || "male") ||
      birth !== (userInfo?.birthDay || "Tug'ilgan sana") ? (
        <div className="info-form-btn-container">
          <button
            type="button"
            form="infoForm"
            className="info-form-btn"
            onClick={() => cancelChange()}
          >
            Cancel
          </button>
          <button type="submit" form="infoForm" className="info-form-btn">
            Submit
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
