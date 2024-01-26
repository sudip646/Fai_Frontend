import React, { useState } from 'react';

function DropdownField({ fields, setFields }) {
  const [displayName, setDisplayName] = useState('');
  const [fieldType, setFieldType] = useState('');
  const [maxLengthAllowed, setMaxLengthAllowed] = useState('');
  const [mandatory, setMandatory] = useState('');
  const [fieldData, setFieldData] = useState('');

  const submit = () => {
    if (fields.length === 4) {
      alert("Cannot Add more than 4 fields");
      return;
    }

    const formData = {
      displayName,
      fieldType,
      maxLengthAllowed,
      mandatory,
      fieldData,
    };

    if (mandatory === "Yes" && fieldData === "") {
      alert("Field Data Cannot be empty");
      return;
    }

    console.log('Form Data:', JSON.stringify(formData));

    setFields([...fields, {
      fieldName: displayName,
      fieldType: "Dropdown",
      fieldDataType: fieldType,
      fieldValidations: maxLengthAllowed,
      fieldData: fieldData,
      mandatory: mandatory
    }]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div style={{ marginRight: '20px' }}>
        <label htmlFor="displayName" className="form-label">
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

      <div style={{ marginRight: '20px' }}>
        <label htmlFor="fieldType" className="form-label">
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
                onClick={() => setFieldType('String')}
              >
                String
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginRight: '20px' }}>
        <label htmlFor="maxLengthAllowed" className="form-label">
          Field MaxLength Allowed
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="maxLengthAllowed"
            aria-describedby="basic-addon3"
            value={maxLengthAllowed}
            onChange={(e) => setMaxLengthAllowed(e.target.value)}
          />
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

      <div style={{ marginRight: '20px' }}>
        <label htmlFor="fieldData" className="form-label">
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

      <div>
        <button type="button" className="btn btn-secondary" onClick={submit}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default DropdownField;

