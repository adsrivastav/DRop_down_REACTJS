import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './App.css';

const App = () => {
  const options = [
    { label: 'HTML', value: 'Hypertext Markup Language for creating web pages and web applications.' },
    { label: 'CSS5', value: 'Cascading Style Sheets for styling web content and layouts.' },
    { label: 'JavaScript', value: 'A programming language for adding interactivity to websites.' },
    { label: 'React', value: 'A JavaScript library for building user interfaces.' },
    { label: 'Node.js', value: 'A runtime environment for executing JavaScript on the server side.' },
    { label: 'Express.js', value: 'A web application framework for Node.js.' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='container-fluid'>
     <div className="row mt-4">
      <div className="col-md-12">
      <h1 className='text-danger text-center'>React Dropdown </h1>
      </div>
     </div>
     <div className="row justify-content-center mt-4">
        <div className="col-md-6">
        <h2 className='fw-bold text-bg-secondary text-center p-2'>Select Your Skills As a Web Developer</h2>
        </div>
      </div>
      <Dropdown options={options} onSelect={handleOptionSelect} />
      <div className="row justify-content-center">
        <div className="col-md-6">
        {selectedOption && <h2 className='fw-bold text-primary text-center p-2'>Description:- {selectedOption.value} </h2>}
        </div>
      </div>
    </div>
  );
};

export default App;
