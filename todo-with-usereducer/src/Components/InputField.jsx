import React from 'react';

const InputField = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '7px',
    position: 'relative',
    color: 'white',
  };

  const labelStyle = {
    fontSize: '15px',
    paddingLeft: '10px',
    position: 'absolute',
    top: '13px',
    transition: '0.3s',
    pointerEvents: 'none',
  };

  const inputStyle = {
    width: '200px',
    height: '45px',
    border: 'none',
    outline: 'none',
    padding: '0px 7px',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '15px',
    backgroundColor: 'transparent',
    boxShadow:
      '3px 3px 10px rgba(0,0,0,1), -1px -1px 6px rgba(255, 255, 255, 0.4)',
  };

  const inputFocusStyle = {
    border: '2px solid transparent',
    color: '#fff',
    boxShadow:
      '3px 3px 10px rgba(0,0,0,1), -1px -1px 6px rgba(255, 255, 255, 0.4), inset 3px 3px 10px rgba(0,0,0,1), inset -1px -1px 6px rgba(255, 255, 255, 0.4)',
  };

  return (
    <div style={containerStyle}>
      <input
        required
        type="text"
        name="text"
        style={inputStyle}
        onFocus={(e) => {
          e.target.style = { ...inputStyle, ...inputFocusStyle };
        }}
        onBlur={(e) => {
          e.target.style = inputStyle;
        }}
      />
      <label style={labelStyle}>Username</label>
    </div>
  );
};

export default InputField;