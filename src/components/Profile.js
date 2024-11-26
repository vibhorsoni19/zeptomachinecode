import React from "react";

const Profile = ({ formData, errors, onChange }) => {
  const handleInputchange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="profile_container">
      <h2>profile</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            placeholder="enter name "
            name="name"
            value={formData.name}
            onChange={handleInputchange}
          />
          {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
        </label>

        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            placeholder="enter age.. "
            value={formData.age}
            onChange={handleInputchange}
          />
          {errors.age && <div style={{ color: "red" }}>{errors.age}</div>}
        </label>

        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="enter email.. "
            value={formData.email}
            onChange={handleInputchange}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </label>
      </form>
    </div>
  );
};

export default Profile;
