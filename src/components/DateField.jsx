import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateField({ fields, setFields }) {
  const [displayName, setDisplayName] = useState("");
  const [fieldType, setFieldType] = useState("");
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  const [mandatory, setMandatory] = useState("");
  const [fieldData, setFieldData] = useState("");

  const submit = () => {
    if (fields.length === 4) {
      alert("Cannot Add more than 4 fields");
      return;
    }

    const formData = {
      displayName,
      fieldType,
      minDate,
      maxDate,
      mandatory,
      fieldData,
    };

    if (mandatory === "Yes" && fieldData === "") {
      alert("Field Data Cannot be empty");
      return;
    }

    console.log('Form Data:', JSON.stringify(formData));
    setFields([
      ...fields,
      {
        fieldName: displayName,
        fieldType: "Date",
        fieldDataType: fieldType,
        fieldValidations: minDate +" "+ " to"+" " + maxDate,
        fieldData: fieldData,
        mandatory: mandatory,
      },
    ]);
  };

  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <div style={{ marginRight: '20px' }}>
        <label htmlFor="basic-url" className="form-label">
          Field Display Name
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
      </div>

      <div style={{ marginRight: '20px' }}>
        <label htmlFor="fieldType" className="form-label">
          Field Display Type
        </label>
        <div className="dropdown1">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {fieldType || "Select"}
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setFieldType("Date")}
              >
                Date
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginRight: '20px' }}>
        <label htmlFor="basic-url" className="form-label">
          Date Range Validation
        </label>
        <div tyle={{ marginRight: '20px' }}>
        <DatePicker selected={minDate} onChange={(date) => setMinDate(date)} />
      </div>
     

      <div style={{ marginRight: '20px' }}>
        <DatePicker selected={maxDate} onChange={(date) => setMaxDate(date)} />
      </div>
      </div>

      <div style={{ marginRight: '20px' }}>
        <label htmlFor="mandatory" className="form-label">
          Mandatory
        </label>
        <div className="dropdown1">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {mandatory || "Select"}
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setMandatory("Yes")}
              >
                Yes
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setMandatory("No")}
              >
                No
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginRight: '20px' }}>
        <label htmlFor="basic-url" className="form-label">
          Field Data
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            value={fieldData}
            onChange={(e) => setFieldData(e.target.value)}
          />
        </div>
      </div>

      <div>
        <div>
          <button type="button" className="btn btn-secondary" onClick={submit}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default DateField;
