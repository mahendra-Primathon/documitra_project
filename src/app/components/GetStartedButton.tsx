import React from 'react';

interface GetStartedButtonProps {
  onClick: () => void;  // Define onClick prop
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}  // Attach onClick event
      className="px-16 py-3 bg-primary text-white rounded-full hover:bg-primary transition-colors"
      aria-label="Get Started"
    >
      Get Started
    </button>
  );
};

export default GetStartedButton;
