import React from 'react';

const Navbar = ({ setCategory }) => {
  const categories = ["general", "business", "entertainment", "health", "science", "sports", "technology"];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          <strong>News 18</strong>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((cat, index) => (
              <li className="nav-item" key={index}>
                <div className="nav-link" onClick={() => setCategory(cat)} style={{ cursor: 'pointer' }}>{cat}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
