import React from 'react';

interface ScheduleMeetingButtonProps {
  onClick: () => void;
}

const ScheduleMeetingButton: React.FC<ScheduleMeetingButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-[#00A99D] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#008F84] focus:outline-none focus:ring-2 focus:ring-[#00A99D] focus:ring-offset-2 flex items-center space-x-2"
    >
      <svg 
        className="w-5 h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      <span>Schedule Meeting</span>
    </button>
  );
};

export default ScheduleMeetingButton;
