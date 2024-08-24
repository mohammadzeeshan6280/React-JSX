import TwelveSeriesDataJson from "../api/TwelveSeriesDataJson.json";
import NineteenInline from "./NineteenInline";


export default function EighteenCss() {
  return (
    <ul className="grid grid-three-cols">
    {TwelveSeriesDataJson.map((curElem) => ( <NineteenInline key={curElem.id} data={curElem}/>
    ))}
  </ul>
  )
}
