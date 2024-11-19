import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle the opening of the sidebar on mouse enter
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  // Function to handle the closing of the sidebar on mouse leave
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="sidebar-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="sidebar-list">
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
          <li>
            <Link to="/register" className="sidebar-link">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className="sidebar-link">
              Login
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
