// export default function FourteenDestructuring(props) {
//     console.log(props)
//     const { data } = props;
//   return (
//     <>
//        <li key={props}>
//     <div>
//       <img src={data.img_url} alt={data.name} width="40%" />
//     </div>
//   <h2>Name : {data.name}</h2>
//    <h3>Rating : {data.rating}</h3>
//    <p>Summary : {data.description}</p>
//    <p>Genre : {data.genre} </p>
//     <p>Cast : {data.cast} </p>
//   <a href={data.watch_url} target='_blank'>
//  <button>Watch Now</button></a>
//  </li>
//     </>
//   )
// }


// Example - 2
// export default function FourteenDestructuring(props) {
//     console.log(props)
//     const { id, img_url, name, rating, description, cast, genre, watch_url } = props.data;
//   return (
//     <>
//        <li key={props}>
//     <div>
//       <img src={img_url} alt={name} width="40%" />
//     </div>
//   <h2>Name : {name}</h2>
//    <h3>Rating : {rating}</h3>
//    <p>Summary : {description}</p>
//    <p>Genre : {genre} </p>
//     <p>Cast : {cast} </p>
//   <a href={watch_url} target='_blank'>
//  <button>Watch Now</button></a>
//  </li>
//     </>
//   )
// }


// Example - 3
export default function FourteenDestructuring({data}) {
    const { id, img_url, name, rating, description, cast, genre, watch_url } = data;
  return (
    <>
       <li>
    <div>
      <img src={img_url} alt={name} width="40%" />
    </div>
  <h2>Name : {name}</h2>
   <h3>Rating : {rating}</h3>
   <p>Summary : {description}</p>
   <p>Genre : {genre} </p>
    <p>Cast : {cast} </p>
  <a href={watch_url} target='_blank'>
 <button>Watch Now</button></a>
 </li>
    </>
  )
}

