// SettingsMenu.jsx
import React, { useRef, useState } from 'react';
import './App.css';
import App from './App.jsx';
import Navbar from './components/Navbar';

 
const Settings = ({ isOpen, onClose, onThemeChange, onFontSizeChange, onImageUpload }) => {
  const fileInputRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('16');

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && onImageUpload) {
      onImageUpload(file);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (onThemeChange) onThemeChange(!darkMode);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    if (onFontSizeChange) onFontSizeChange(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <div className="settings-menu">
      <button onClick={onClose} className="close-btn">Close ✖</button>

      <ul>
        <li>
          <label>
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} /> Enable Dark Mode
          </label>
        </li>
        <li>
          <label>
            Font Size:
            <select value={fontSize} onChange={handleFontSizeChange}>
              <option value="14">Small</option>
              <option value="16">Medium</option>
              <option value="20">Large</option>
              <option value="24">Extra Large</option>
            </select>
          </label>
        </li>
        <li>
          <button onClick={handleImageClick}>Upload Family Photo</button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </li>
      </ul>
    </div>
  );
};

export default Settings;
