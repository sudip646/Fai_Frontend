import React, { useState } from "react";

function TextBox({ fields, setFields }) {
  const [displayName, setDisplayName] = useState("");
  const [fieldType, setFieldType] = useState(""); // Default value can be set based on your requirements
  const [maxLength, setMaxLength] = useState("");
  const [mandatory, setMandatory] = useState(""); // Default value can be set based on your requirements
  const [fieldData, setFieldData] = useState("");

  const submitValues = () => {
    // Do something with the gathered values

    if (fields.length === 4) {
      alert("Cannot Add more than 4 fields");
      return;
    }

    console.log('Field Display Name:', displayName);
    console.log('Field Type:', fieldType);
    console.log('Field MaxLength Allowed:', maxLength);
    console.log('Mandatory:', mandatory);
    console.log('Field Data:', fieldData);

    if (mandatory === "Yes" && fieldData === "") {
      alert("Field Data Cannot be empty");
      return;
    }

    setFields([
      ...fields,
      {
        fieldName: displayName,
        fieldType: "TextBox",
        fieldDataType: fieldType,
        fieldValidations: maxLength,
        fieldData: fieldData,
        mandatory: mandatory,
      },
    ]);
  };

  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '20px' }}>
      <div>
        <label htmlFor="basic-url" className="form-label">
          Field Display Name
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="displayName"
            aria-describedby="basic-addon3"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
      </div>

      <div style={{ marginLeft: '20px' }}>
        <label htmlFor="basic-url" className="form-label">
          Field Display Type
        </label>
        <div className="dropdown1">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLinkFieldType"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {fieldType || 'Select'}
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLinkFieldType">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setFieldType('Number')}
              >
                Number
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginLeft: '20px' }}>
        <label htmlFor="basic-url" className="form-label">
          Field MaxLength Allowed
        </label>
        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            id="maxLength"
            aria-describedby="basic-addon3"
            value={maxLength}
            onChange={(e) => setMaxLength(e.target.value)}
          />
        </div>
      </div>

      <div style={{ marginLeft: '20px' }}>
        <label htmlFor="basic-url" className="form-label">
          Mandatory
        </label>
        <div className="dropdown1">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLinkMandatory"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {mandatory || 'Select'}
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLinkMandatory">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setMandatory('Yes')}
              >
                Yes
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setMandatory('No')}
              >
                No
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginLeft: '20px' }}>
        <label htmlFor="basic-url" className="form-label">
          Field Data
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="fieldData"
            aria-describedby="basic-addon3"
            value={fieldData}
            onChange={(e) => setFieldData(e.target.value)}
          />
        </div>
      </div>

      <div style={{ marginLeft: '20px' }}>
        <button type="button" className="btn btn-secondary" onClick={() => submitValues()}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default TextBox;

