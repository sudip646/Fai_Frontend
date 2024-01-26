import React from "react";

function Dropdown() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ marginRight: '10px' }}
        >
          Select
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a className="dropdown-item" href="#">
              Student
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Salaried
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Business
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;

