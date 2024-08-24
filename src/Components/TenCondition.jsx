
// export default function TenCondition() {
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
//         <img src="office.jpg" alt="" width="80%" />
//       </div>
//      <h2>Name : {name}</h2>
//      <h3>Rating : {5 + 4.3}</h3>
//      <p>Summary : {summary}</p>
//      <p>Genre : {returnGenre()} </p>
//      <button>Watch Now</button>
//     </>
//   )
// }


// ------------------------If else ---------------
// Example 1 If else
// export default function TenCondition() {
//   const name = "WhiteHat";
//   // const rating = 8.7;
//   const summary = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex iusto perferendis, culpa molestiae sunt veritatis recusandae, praesentium cumque doloribus rerum rem excepturi quae ipsum, hic eius! Tempora delectus dolorum libero, error pariatur molestias omnis nihil dignissimos! Cum, ullam nihil."

//   const returnGenre = () => {
//       const genre = "RomCom";
//       return genre;
//   };

//   const age = 16;
//   if(age < 16){
//     return (
//       <>
//       <div>
//           <img src="office.jpg" alt="" width="80%" />
//         </div>
//        <h2>Name : {name}</h2>
//        <h3>Rating : {5 + 4.3}</h3>
//        <p>Summary : {summary}</p>
//        <p>Genre : {returnGenre()} </p>
//        <button>Not Available</button>
//       </>
//     )
//   }

//   return (
//     <>
//     <div>
//         <img src="office.jpg" alt="" width="80%" />
//       </div>
//      <h2>Name : {name}</h2>
//      <h3>Rating : {5 + 4.3}</h3>
//      <p>Summary : {summary}</p>
//      <p>Genre : {returnGenre()} </p>
//      <button>Watch Now</button>
//     </>
//   );
// }

// ------------------------Ternary Operator----------------

// Example 2 Ternary Operator
// export default function TenCondition() {
//     const name = "WhiteHat";
//     // const rating = 8.7;
//     const summary = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex iusto perferendis, culpa molestiae sunt veritatis recusandae, praesentium cumque doloribus rerum rem excepturi quae ipsum, hic eius! Tempora delectus dolorum libero, error pariatur molestias omnis nihil dignissimos! Cum, ullam nihil."

//     const returnGenre = () => {
//         const genre = "RomCom";
//         return genre;
//     };

//     const age = 19;

//   return (
//     <>
//     <div>
//         <img src="office.jpg" alt="" width="80%" />
//       </div>
//      <h2>Name : {name}</h2>
//      <h3>Rating : {5 + 4.3}</h3>
//      <p>Summary : {summary}</p>
//      <p>Genre : {returnGenre()} </p>
//      <button> {age >= 16 ? "Watch Now" : "Not Available"}</button>
//     </>
//   )
// }

// ----------------------- Complex if Conditions------------
// Example 3 Complex if Conditions
// export default function TenCondition() {
//   const name = "WhiteHat";
//   // const rating = 8.7;
//   const summary = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex iusto perferendis, culpa molestiae sunt veritatis recusandae, praesentium cumque doloribus rerum rem excepturi quae ipsum, hic eius! Tempora delectus dolorum libero, error pariatur molestias omnis nihil dignissimos! Cum, ullam nihil.";


//   let age = 19;
//   let canWatch = "Not Available";
//  if (age >= 18) canWatch = "Watch Now";
    

//   const returnGenre = () => {
//       const genre = "RomCom";
//       return genre;
//   };

// return (
//   <>
//   <div>
//       <img src="office.jpg" alt="" width="80%" />
//     </div>
//    <h2>Name : {name}</h2>
//    <h3>Rating : {5 + 4.3}</h3>
//    <p>Summary : {summary}</p>
//    <p>Genre : {returnGenre()} </p>
//    <button>{canWatch}</button>
//   </>
// )
// }


// ----------------------- Complex if Conditions------------
// Example If else
export default function TenCondition() {
  const name = "WhiteHat";
  // const rating = 8.7;
  const summary = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex iusto perferendis, culpa molestiae sunt veritatis recusandae, praesentium cumque doloribus rerum rem excepturi quae ipsum, hic eius! Tempora delectus dolorum libero, error pariatur molestias omnis nihil dignissimos! Cum, ullam nihil.";

let age = 19;
 const canWatch = () => {
  if (age >= 10) return "Watch Now";
  return "Not Available";
 }
    

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
   <button>{canWatch()}</button>
  </>
)
}

