
// Example No. 1 Dynamic Values Using Variables
// function NineDynamicJsx() {
//     const name = "WhiteHat";
//     const rating = 8.7;
//     const summary = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex iusto perferendis, culpa molestiae sunt veritatis recusandae, praesentium cumque doloribus rerum rem excepturi quae ipsum, hic eius! Tempora delectus dolorum libero, error pariatur molestias omnis nihil dignissimos! Cum, ullam nihil."
//   return (
//     <>
//     <div>
//         <img src="office.jpg" alt="" width="80%" />
//       </div>
//      <h2>Name : {name}</h2>
//      <h3>Rating : {rating}</h3>
//      <p>Summary : {summary}</p>
//     </>
//   )
// }

// export default NineDynamicJsx

// ------------------------------------------------------ //

// Example No. 2 Dynamic Values Using Function Call
function NineDynamicJsx() {
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

export default NineDynamicJsx
