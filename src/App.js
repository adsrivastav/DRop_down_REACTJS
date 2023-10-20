import React, { useState } from 'react';  // Import React and the useState hook from the 'react' library.
import Dropdown from './Dropdown';  // Import the 'Dropdown' component from a file called 'Dropdown'.
import './App.css';  // Import a CSS file.

// Define a functional component called 'App'.
const App = () => {
  // Define an array of 'options' with labels and values.
  const options = [
    { label: 'HTML', value: 'Hypertext Markup Language for creating web pages and web applications.' },
    { label: 'CSS5', value: 'Cascading Style Sheets for styling web content and layouts.' },
    { label: 'JavaScript', value: 'A programming language for adding interactivity to websites.' },
    { label: 'React', value: 'A JavaScript library for building user interfaces.' },
    { label: 'Node.js', value: 'A runtime environment for executing JavaScript on the server side.' },
    { label: 'Express.js', value: 'A web application framework for Node.js.' },
  ];

  // Declare and initialize state variable 'selectedOption' using the useState hook.
  const [selectedOption, setSelectedOption] = useState(null);

  // Define a function to handle the selection of an option and update 'selectedOption'.
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Render the JSX markup for the 'App' component.
  return (
    <div className='container-fluid'>
      <div className="row mt-4">
        <div className="col-md-12">
          <h1 className='text-danger text-center'>React Dropdown</h1>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <h2 className='fw-bold text-bg-secondary text-center p-2'>Select Your Skills As a Web Developer</h2>
        </div>
      </div>
      {/* Render the 'Dropdown' component, passing 'options' and 'handleOptionSelect' as props. */}
      <Dropdown options={options} onSelect={handleOptionSelect} />
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Conditionally render a description if 'selectedOption' is not null. */}
          {selectedOption && <h2 className='fw-bold text-primary text-center p-2'>Description: {selectedOption.value}</h2>}
        </div>
      </div>
    </div>
  );
};

export default App;  // Export the 'App' component as the default export.
