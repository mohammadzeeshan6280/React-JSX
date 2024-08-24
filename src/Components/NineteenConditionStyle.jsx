import TwelveSeriesDataJson from "../api/TwelveSeriesDataJson.json";
import NineteenConditionCss from "./NineteenConditionCss";


export default function NineteenConditionStyle() {
  return (
    <div>

<ul className="grid grid-three-cols">
    {TwelveSeriesDataJson.map((curElem) => ( <NineteenConditionCss key={curElem.id} data={curElem}/>
    ))}
  </ul>
    </div>
  )
}
