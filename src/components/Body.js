import React, { useState,useEffect } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";

const Body = () => {
  const [activeTab, SetActiveTab] = useState("Profile");
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    hobby: "",
    genre: "",
    notification: false,
    privacy: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []); // This runs once when the component mounts
  
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]); 

  //now we need to work on validation
 //handlechange
 const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validate = () => {
    const newErrors = {};
    //validation for profile field
    if (!formData.name.trim()) newErrors.name = "name is required";
    if (!formData.age) newErrors.age = "age is required";
    if(!formData.email.trim()) newErrors.email = "email is required"

    //validation interest field
    if (!formData.hobby.trim()) newErrors.hobby = "hobby is required";
    if (!formData.genre.trim()) newErrors.genre = "genre is required";

    setErrors(newErrors);
    //if no erroes then it will
    return Object.keys(newErrors).length === 0;
  };

 
  //handlesubmit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`form submitted: ${JSON.stringify(formData, null, 2)}`);
    } else {
      alert("form contain some issue please fix it ");
    }
  };

  const TabDirection = () => {
    switch (activeTab) {
      case "Profile":
        return (
          <Profile
            formData={formData}
            errors={errors}
            onChange={handleChange}
          />
        );
      case "Interest":
        return (
          <Interest
            formData={formData}
            errors={errors}
            onChange={handleChange}
          />
        );
      case "Setting":
        return (
          <Setting
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onSubmit = {handleSubmit}
          />
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div className="main_container">
        <button onClick={() => SetActiveTab("Profile")}>Profile </button>
        <button onClick={() => SetActiveTab("Interest")}>Interest </button>
        <button onClick={() => SetActiveTab("Setting")}>Setting </button>
      </div>
      <div>{TabDirection()}</div>
    </>
  );
};

export default Body;
