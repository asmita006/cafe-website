import React from 'react';
import logo from './Logo.png'; // ✅ Correct relative path

interface LogoProps {
  size?: number;
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 80 }) => {
  return (
    <div style={{ width: size, height: size }}>
      <img
        src={logo}
        alt="Ice Cream Café Logo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

export default Logo;
