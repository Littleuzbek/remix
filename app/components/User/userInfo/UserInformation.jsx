import { DatePicker } from "./DatePicker";
import { GenderSelection } from "./GenderSelect";
import { Form } from "@remix-run/react";

export default function UserInformation({data, orders}) {
  return (
    <div className="user-information">
      <h2>Ma'lumotlarim</h2>

      <form className="user-settings">
        <div className="product-info">
          <p>Ism</p>
          <input
            type="text"
            required
            defaultValue={data?.name} 
          />
        </div>
        <div className="product-info">
          <p>Familiya</p>
          <input
            type="text"
            required
            defaultValue={data?.surname} 
          />
        </div>
        <div className="product-info">
          <p>Telfon raqam</p>
          <input
            type="text"
            required
            defaultValue={data?.number} 
          />
        </div>
        <div className="product-info">
          <p>Email</p>
          <input
            type="text"
            required
            defaultValue={data?.email} 
          />
        </div>
        <div className="product-info">
          <p>Tug'ilgan sana</p>
          <DatePicker
            onDateChange={(date) => console.log(date)}
            placeholder="Tug'ilgan sana"
            // className="max-w-xs"
          />
        </div>
        <GenderSelection
          onChange={(gender) => console.log(`Selected gender: ${gender}`)}
          defaultValue="male"
          name="user-gender"
        />
      </form>
    </div>
  );
}
