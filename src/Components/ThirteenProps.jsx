// import TwelveSeriesDataJson from "../api/TwelveSeriesDataJson.json";
// import ThirteenSeriesData from "./ThirteenSeriesData";


// export default function ThirteenProps() {
//   return (
//     <>
//   <ul>
//     {TwelveSeriesDataJson.map((curElem) => ( <ThirteenSeriesData key={curElem.id} curElem={curElem}/>
//     ))}
//   </ul>
//    </>
 
//   )
// }


// FourteenDestructuring
import TwelveSeriesDataJson from "../api/TwelveSeriesDataJson.json";
import FourteenDestructuring from "./FourteenDestructuring";


export default function ThirteenProps() {
  return (
    <>
  <ul>
    {TwelveSeriesDataJson.map((curElem) => ( <FourteenDestructuring key={curElem.id} data={curElem}/>
    ))}
  </ul>
   </>
 
  )
}

