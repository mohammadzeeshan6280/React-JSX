// Example - 1 Default Export
// export default function ElevenExport() {
//     const name = "WhiteHat";
//     // const rating = 8.7;
//     const summary = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex iusto perferendis, culpa molestiae sunt veritatis recusandae, praesentium cumque doloribus rerum rem excepturi quae ipsum, hic eius! Tempora delectus dolorum libero, error pariatur molestias omnis nihil dignissimos! Cum, ullam nihil."

//     const returnGenre = () => {
//         const genre = "RomCom";
//         return genre;
//     };
//   return (
//     <>
//     <div>
//     <img src="office.jpg" alt="" width="80%" />
//   </div>
//  <h2>Name : {name}</h2>
//  <h3>Rating : {5 + 4.3}</h3>
//  <p>Summary : {summary}</p>
//  <p>Genre : {returnGenre()} </p>
//  </>
//   )
// }


// Example - 2 Named Exports Imports
// export function ElevenExport() {
//         const name = "WhiteHat";
//         // const rating = 8.7;
//         const summary = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex iusto perferendis, culpa molestiae sunt veritatis recusandae, praesentium cumque doloribus rerum rem excepturi quae ipsum, hic eius! Tempora delectus dolorum libero, error pariatur molestias omnis nihil dignissimos! Cum, ullam nihil."
    
//         const returnGenre = () => {
//             const genre = "RomCom";
//             return genre;
//         };
//       return (
//         <>
//         <div>
//         <img src="office.jpg" alt="" width="80%" />
//       </div>
//      <h2>Name : {name}</h2>
//      <h3>Rating : {5 + 4.3}</h3>
//      <p>Summary : {summary}</p>
//      <p>Genre : {returnGenre()} </p>
//      </>
//       )
//     }


//    export const Footer = () => {
//         return (
//             <>
//             <p>Copyright @ 2024</p>
//             </>
//         )
//     }



// Example - 3 Combined Exports Imports
 function ElevenExport() {
    const name = "WhiteHat";
    // const rating = 8.7;
    const summary = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex iusto perferendis, culpa molestiae sunt veritatis recusandae, praesentium cumque doloribus rerum rem excepturi quae ipsum, hic eius! Tempora delectus dolorum libero, error pariatur molestias omnis nihil dignissimos! Cum, ullam nihil."

    const returnGenre = () => {
        const genre = "RomCom";
        return genre;
    };
  return (
    <>
    <div>
    <img src="office.jpg" alt="" width="80%" />
  </div>
 <h2>Name : {name}</h2>
 <h3>Rating : {5 + 4.3}</h3>
 <p>Summary : {summary}</p>
 <p>Genre : {returnGenre()} </p>
 </>
  )
}

export default ElevenExport;

export const Header = () => {
    return (
        <>
        <h2>Header Componetns</h2>
        </>
    )
};

export const Footer = () => {
    return (
        <>
        <p>Copyright @ 2024</p>
        </>
    )
}
