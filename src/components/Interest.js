import React from "react";

const Interest = ({ formData, errors, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  return (
    <div className="interest_Container">
      <h3>Interest</h3>
      <form>
        <label>
          Hobby:
          <input
            type="text"
            name="hobby"
            placeholder="Hobby.."
            value={formData.hobby}
            onChange={handleInputChange}
          />
          {errors.hobby && <div style={{ color: "red" }}>{errors.hobby}</div>}
        </label>

        <br />
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            placeholder="Genre.."
            onChange={handleInputChange}
            value={formData.genre}
          />
          {errors.genre && <div style={{ color: "red" }}>{errors.genre}</div>}
        </label>
      </form>
    </div>
  );
};

export default Interest;
