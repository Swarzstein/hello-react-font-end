import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const  greeting = useSelector(state => state.greeting);
  return (
    <div>
      <h1>{greeting.text}</h1>
    </div>
  );
}

export default Greeting;

// import React, { useEffect, useState } from 'react';

// const Greeting = () => {

//   const [greeting, setGreeting] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/greetings');
//         const data = await response.json();
//         setGreeting(data);
//       } catch (error) {
//         console.log('Error fetching greeting:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <div>
//       <h2>Greeting</h2>
//       <h1>{greeting.text}</h1>
//     </div>
//   );
// }

// export default Greeting;