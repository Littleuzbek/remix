import { useState } from "react"
import "./gender.css"

export function GenderSelection({ onChange, defaultValue = "", name = "gender", className = "" }) {
  const [selectedGender, setSelectedGender] = useState(defaultValue)

  const handleChange = (event) => {
    const value = event.target.value
    setSelectedGender(value)
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <div className={`gender-selection ${className}`}>
      <div className="gender-option">
        <input
          type="radio"
          id="male"
          name={name}
          value="male"
          checked={selectedGender === "male"}
          onChange={handleChange}
          className="gender-radio"
        />
        <label htmlFor="male" className="gender-label">
          <span className="radio-custom"></span>
          Erkak
        </label>
      </div>

      <div className="gender-option">
        <input
          type="radio"
          id="female"
          name={name}
          value="female"
          checked={selectedGender === "female"}
          onChange={handleChange}
          className="gender-radio"
        />
        <label htmlFor="female" className="gender-label">
          <span className="radio-custom"></span>
          Ayol
        </label>
      </div>
    </div>
  )
}
