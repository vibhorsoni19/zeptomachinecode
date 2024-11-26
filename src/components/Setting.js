import React from "react";

const Setting = ({ formData, onChange, onSubmit }) => {
  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    onChange(name, checked);
  };
  return (
    <div className="setting_container">
      <form onSubmit={onSubmit}>
        <label>
          Notification:
          <input
            type="checkbox"
            name="notification"
            checked={formData.notification}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Privacy:
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Setting;
