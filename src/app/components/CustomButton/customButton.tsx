import React from 'react';
import Link from 'next/link';

interface CustomButtonProps {
  buttonText: string;
  disable?: boolean;
  href?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonText,
  disable,
  href,
}) => {
  return (
    <Link href={href}>
      <button
        disabled={disable}
        className={`relative inline-flex items-center justify-center px-4 py-2 text-white font-semibold transition-colors duration-300 transform rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
        ${
          disable
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }
      `}
      >
        {buttonText}
      </button>
    </Link>
  );
};

export default CustomButton;
