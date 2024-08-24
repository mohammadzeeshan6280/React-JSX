
import Seven from "./Seven";


// Example 1
// export default function EightReactFragment() {
//     return (
//       <>
//         <Seven/>
//         <Seven/>
//         <Seven/>
//         <Seven/>
//         <Seven/>
//       </>
//     )
//   }


// Example 2 Array With Keys
// export default function EightReactFragment() {
//   return ([<Seven key="1"/>, <Seven key="2"/>, <Seven key="3"/>]
//     // <>
//     //   <Seven/>
//     //   <Seven/>
//     //   <Seven/>
//     //   <Seven/>
//     //   <Seven/>
//     // </>
//   )
// }

// Example 3 React.Fragments
// import React from "react";
// export default function EightReactFragment() {
//     return (
//      <React.Fragment>
//         <Seven/>
//         <Seven/>
//         <Seven/>
//         <Seven/>
//         <Seven/>
//      </React.Fragment>
//     );
//   }


// Example 4 Fragments
import { Fragment } from "react";
export default function EightReactFragment() {
    return (
     <Fragment>
        <Seven/>
        <Seven/>
        <Seven/>
        <Seven/>
        <Seven/>
     </Fragment>
    );
  }

