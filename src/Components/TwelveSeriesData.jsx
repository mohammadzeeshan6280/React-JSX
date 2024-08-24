// import TwelveSeriesDataJson from '../api/TwelveSeriesDataJson.json'

// export default function TwelveSeriesData() {
//   return (
//     <>
//     <ul>
//     <li>
//     <div>
//         <img src={TwelveSeriesDataJson[0].img_url} alt="" width="80%" />
//       </div>
//      <h2>Name : {TwelveSeriesDataJson[0].name}</h2>
//      <h3>Rating : {TwelveSeriesDataJson[0].rating}</h3>
//      <p>Summary : {TwelveSeriesDataJson[0].description}</p>
//      <p>Genre : {TwelveSeriesDataJson[0].genre} </p>
//      <p>Cast : {TwelveSeriesDataJson[0].cast} </p>

//      <a href={TwelveSeriesDataJson[0].watch_url} target='_blank'>
//      <button>Watch Now</button>
//      </a>
//      </li>

//     <li>
//     <div>
//         <img src={TwelveSeriesDataJson[1].img_url} alt="" width="80%" />
//       </div>
//      <h2>Name : {TwelveSeriesDataJson[1].name}</h2>
//      <h3>Rating : {TwelveSeriesDataJson[1].rating}</h3>
//      <p>Summary : {TwelveSeriesDataJson[1].description}</p>
//      <p>Genre : {TwelveSeriesDataJson[1].genre} </p>
//      <p>Cast : {TwelveSeriesDataJson[1].cast} </p>

//      <a href={TwelveSeriesDataJson[1].watch_url} target='_blank'>
//      <button>Watch Now</button>
//      </a>
//      </li>

//     <li>
//     <div>
//         <img src={TwelveSeriesDataJson[2].img_url} alt="" width="80%" />
//       </div>
//      <h2>Name : {TwelveSeriesDataJson[2].name}</h2>
//      <h3>Rating : {TwelveSeriesDataJson[2].rating}</h3>
//      <p>Summary : {TwelveSeriesDataJson[2].description}</p>
//      <p>Genre : {TwelveSeriesDataJson[2].genre} </p>
//      <p>Cast : {TwelveSeriesDataJson[2].cast} </p>

//      <a href={TwelveSeriesDataJson[2].watch_url} target='_blank'>
//      <button>Watch Now</button>
//      </a>
//      </li>
//     <li>
//     <div>
//         <img src={TwelveSeriesDataJson[3].img_url} alt="" width="80%" />
//       </div>
//      <h2>Name : {TwelveSeriesDataJson[3].name}</h2>
//      <h3>Rating : {TwelveSeriesDataJson[3].rating}</h3>
//      <p>Summary : {TwelveSeriesDataJson[3].description}</p>
//      <p>Genre : {TwelveSeriesDataJson[3].genre} </p>
//      <p>Cast : {TwelveSeriesDataJson[3].cast} </p>

//      <a href={TwelveSeriesDataJson[3].watch_url} target='_blank'>
//      <button>Watch Now</button>
//      </a>
//      </li>
//     <li>
//     <div>
//         <img src={TwelveSeriesDataJson[4].img_url} alt="" width="80%" />
//       </div>
//      <h2>Name : {TwelveSeriesDataJson[4].name}</h2>
//      <h3>Rating : {TwelveSeriesDataJson[4].rating}</h3>
//      <p>Summary : {TwelveSeriesDataJson[4].description}</p>
//      <p>Genre : {TwelveSeriesDataJson[4].genre} </p>
//      <p>Cast : {TwelveSeriesDataJson[4].cast} </p>

//      <a href={TwelveSeriesDataJson[4].watch_url} target='_blank'>
//      <button>Watch Now</button>
//      </a>
//      </li>
//     <li>
//     <div>
//         <img src={TwelveSeriesDataJson[5].img_url} alt="" width="80%" />
//       </div>
//      <h2>Name : {TwelveSeriesDataJson[5].name}</h2>
//      <h3>Rating : {TwelveSeriesDataJson[5].rating}</h3>
//      <p>Summary : {TwelveSeriesDataJson[5].description}</p>
//      <p>Genre : {TwelveSeriesDataJson[5].genre} </p>
//      <p>Cast : {TwelveSeriesDataJson[5].cast} </p>

//      <a href={TwelveSeriesDataJson[5].watch_url} target='_blank'>
//      <button>Watch Now</button>
//      </a>
//      </li>
//     <li>
//     <div>
//         <img src={TwelveSeriesDataJson[6].img_url} alt="" width="80%" />
//       </div>
//      <h2>Name : {TwelveSeriesDataJson[6].name}</h2>
//      <h3>Rating : {TwelveSeriesDataJson[6].rating}</h3>
//      <p>Summary : {TwelveSeriesDataJson[6].description}</p>
//      <p>Genre : {TwelveSeriesDataJson[6].genre} </p>
//      <p>Cast : {TwelveSeriesDataJson[6].cast} </p>

//      <a href={TwelveSeriesDataJson[6].watch_url} target='_blank'>
//      <button>Watch Now</button>
//      </a>
//      </li>
//        </ul>
//     </>
//   )
// }


import TwelveSeriesDataJson from '../api/TwelveSeriesDataJson.json'
export default function TwelveSeriesData() {
  return (
    <>
    <ul>
    {TwelveSeriesDataJson.map((curElem) => {
        return (
            <li key={curElem.id}>
  <div>
      <img src={curElem.img_url} alt={curElem.name} width="80%" />
    </div>
  <h2>Name : {curElem.name}</h2>
   <h3>Rating : {curElem.rating}</h3>
   <p>Summary : {curElem.description}</p>
   <p>Genre : {curElem.genre} </p>
    <p>Cast : {curElem.cast} </p>
  <a href={curElem.watch_url} target='_blank'>
 <button>Watch Now</button></a>
    </li>
        )
        
    })}
   
    </ul>
    </>
  )
}
