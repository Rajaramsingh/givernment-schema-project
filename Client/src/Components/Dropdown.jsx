import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dropdown = ({ dropContents, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    const paths = {
      "Virtual Consultations": "/virtual-consultations",
      "Emergency Care": "/emergency-care",
      "Digital Prescriptions": "/digital-prescriptions",
      "Health Monitoring": "/health-monitoring",
      "Lab Tests": "/lab-tests",
      "Medical Records": "/medical-records"
    };
    
    navigate(paths[service]);
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <div
        className="cursor-pointer"
        onMouseEnter={() => setIsOpen(true)}
      >
        {dropContents}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
          {items.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
              onClick={() => handleServiceClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;