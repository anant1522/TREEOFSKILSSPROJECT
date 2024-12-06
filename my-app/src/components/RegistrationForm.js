import React, { useState } from 'react';
import './Form.css';  // Importing the style for the form

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    center: '',
    childName: '',
    gender: '',
    age: '',
    parentName: '',
    address: '',
    mobile1: '',
    mobile2: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      terms: e.target.checked,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send data to backend API
    try {
      const response = await fetch('http://localhost:4000/api/registration/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    

      if (response.ok) {
        const result = await response.json();
        alert('Registration successful!');
        console.log('Response:', result);
        window.location.href = '/course-selection'; // Redirect after successful registration
      } else {
        const error = await response.json();
        alert(`Registration failed: ${error.error || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const validateMobileNumber = (input) => {
    input.value = input.value.replace(/[^0-9]/g, ''); 
    if (input.value.length > 10) {
      input.value = input.value.slice(0, 10); 
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <select
            id="center"
            name="center"
            value={formData.center}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Choose Center
            </option>
            <option value="Kidwai Nagar East">Kidwai Nagar East</option>
            <option value="Lodhi Road">Lodhi Road</option>
            <option value="Andrews Ganj Extn">Andrews Ganj Extn</option>
            <option value="Rk Puram">Rk Puram</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="childName"
            name="childName"
            placeholder="Name of Student"
            value={formData.childName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group gender-group">
          <label>Gender:</label>
          <div className="gender-options">
            <input
              type="radio"
              id="male"
              name="gender"
              value="M"
              checked={formData.gender === 'M'}
              onChange={handleChange}
              required
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="F"
              checked={formData.gender === 'F'}
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Age of Student"
            value={formData.age}
            onChange={handleChange}
            required
            min="3"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="parentName"
            name="parentName"
            placeholder="Name of Parent"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="address"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="mobile1"
            name="mobile1"
            placeholder="Mobile No. 1 (Required)"
            value={formData.mobile1}
            onChange={handleChange}
            required
            maxLength="10"
            minLength="10"
            pattern="[0-9]{10}"
            onInput={(e) => validateMobileNumber(e.target)}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="mobile2"
            name="mobile2"
            placeholder="Mobile No. 2 (Optional)"
            value={formData.mobile2}
            onChange={handleChange}
            maxLength="10"
            minLength="10"
            pattern="[0-9]{10}"
            onInput={(e) => validateMobileNumber(e.target)}
          />
        </div>
        <div className="form-group terms-group">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleCheckboxChange}
            required
          />
          <label htmlFor="terms">I accept the terms and conditions</label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
