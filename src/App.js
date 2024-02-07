import React, { useState } from 'react';
import './App.css';
const tulipImage = './tulip.gif'; // Import the tulip image
const finalImage = './Final Tulip Box image.gif';

function App() {
  const [showImage, setShowImage] = useState(false); // State to track if image should be shown
  const [noClickCount, setNoClickCount] = useState(0); // State to track the number of times "No" button is clicked

  const handleYesClick = () => {
    setShowImage(true); // Set showImage state to true when "Yes" button is clicked
  };

  const handleNoClick = () => {
    if (noClickCount === 0) {
      setNoClickCount(1);
    } else {
      setNoClickCount(noClickCount + 1);
    }
  };

  return (
    <div style={{
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      {showImage ? (
        <>
          <img width='200px' height='200px' src={finalImage} alt="tulip flower" /> 
         <h1>Ok yay!!!</h1>
        </>
      ) : (
        <div
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
        >
         <img width='200px' height='200px' src={tulipImage} alt="tulip flower" /> 
          <h1>Will you be my Valentine, Noli?</h1>
          <div style={{
            width: '50%',
            padding: '23px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <button
              style={{
                marginRight: '12px',
                background: '#808080',
                padding: '8px 16px',
                fontSize: noClickCount === 0 ? '16px' : `${64 + noClickCount * 4}px`, // Increase font size based on noClickCount
                border: 'none',
                color: 'white',
                borderRadius: '4px',
                transition: 'font-size 0.3s', // Add smooth transition for font size change
              }}
              onClick={handleYesClick} // Call handleYesClick function when "Yes" button is clicked
              onMouseOver={(e) => e.target.style.backgroundColor = '#22C55E'} // Change to blue on hover
              onMouseOut={(e) => e.target.style.backgroundColor = '#808080'}  // change back
            >
              Yes
            </button>
            <button
              style={{
                background: '#808080',
                padding: '8px 16px',
                fontSize: '16px',
                border: 'none',
                color: 'white',
                borderRadius: '4px'
              }}
              onClick={handleNoClick} // Call handleNoClick function when "No" button is clicked
              onMouseOver={(e) => e.target.style.backgroundColor = '#EF4444'} // Change to blue on hover
              onMouseOut={(e) => e.target.style.backgroundColor = '#808080'}  // change backing
            >
              {noClickCount === 0 ? 'No' : `Are you really ${'really '.repeat(noClickCount)}sure?`} {/* Dynamically change button text */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
