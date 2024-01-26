import React, { useState } from 'react';
import Dropdown from './components/dropdown';
import TextBoxField from './components/TextBoxField';
import DropdownField from './components/DropdownField';
import DateField from './components/DateField';

function App() {
  const [fieldType, setFieldType] = useState('');
  const handleItemClick = (selectedType) => {
    setFieldType(selectedType);
  };

  const [fields, setFields] = useState([]);

  return (
    <>
      <Dropdown />
      <div style={{ margin: '10px' }}>
        <button
          type="button"
          className="btn btn-secondary"
          style={{ marginRight: '10px' }}
        >
          Add Field
        </button>
      </div>

      <div className="dropdown" style={{ marginBottom: '20px' }}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Field Type
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleItemClick('Text Box')}
            >
              Text Box
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleItemClick('Dropdown')}
            >
              Dropdown
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleItemClick('Date picker')}
            >
              Date picker
            </a>
          </li>
        </ul>
      </div>

      {fieldType === 'Text Box' && (
        <TextBoxField fields={fields} setFields={setFields} />
      )}
      {fieldType === 'Dropdown' && (
        <DropdownField fields={fields} setFields={setFields} />
      )}
      {fieldType === 'Date picker' && (
        <DateField fields={fields} setFields={setFields} />
      )}

      <table className="table" style={{ width: '80%', margin: 'auto' }}>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Field Name</th>
            <th scope="col">Field Type</th>
            <th scope="col">Field Data Type</th>
            <th scope="col">Field Validation</th>
            <th scope="col">Field Data</th>
            <th scope="col">Is Mandatory</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((val, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{val.fieldName}</td>
              <td>{val.fieldType}</td>
              <td>{val.fieldDataType}</td>
              <td>{val.fieldValidations}</td>
              <td>{val.fieldData}</td>
              <td>{val.mandatory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;

