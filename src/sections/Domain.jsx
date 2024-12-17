import React from 'react';
import './Domain.css';
import { executivesList } from '../assets/executives_data';
function MyComponent(props) {
  
  return (
    <div className='executives_data text-slate-100'>
      <div className='child_data '>
        <h3 className='text-blue-600'>{props.name1}</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        {executivesList.map((heads) => {
          if (heads.Domain === props.name1) {
            return (
          <li>{heads.Name}</li>
            );
          }
          return null;
        })}
        </ul>
      </div>

      {/* Child 2 */}
      <div className='child_data'>
        <h3 className='text-blue-600'>{props.name2}</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        {executivesList.map((heads) => {
          if (heads.Domain === props.name2) {
            return (
          <li>{heads.Name}</li>
            );
          }
          return null;
        })}
        </ul>
      </div>
      {/* Child 3 */}
      <div className='child_data'>
        <h3 className='text-blue-600'>{props.name3}</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        {executivesList.map((heads) => {
          if (heads.Domain === props.name3) {
            return (
          <li>{heads.Name}</li>
            );
          }
          return null;
        })}
        </ul>
      </div>
    </div>
  );
}

export default MyComponent;



// import React from "react";
// import stylesheet from '.'

// export default function Domain(){
//     return(
//         <div className={style.executives_data}>
//             <h3>props.name</h3>
//             <li>atik</li>
//             <li>wthoi</li>
//             <li>wetkoi</li>
//             <li>aotiawot</li>
//         </div>
//     )
// }