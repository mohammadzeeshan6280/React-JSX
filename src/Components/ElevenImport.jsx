// ------------------Default Import & Export-----------------
// import ElevenExport from "./ElevenExport"; 

// ------------------ Exports Imports ------------
// import {ElevenExport} from "./ElevenExport"; // Export 

// ------------------ Exports Multiple Imports ------------
// import {ElevenExport, Footer,} from "./ElevenExport"; // Export 

// ----------- Combined Exports Multiple Imports ------------
// import ElevenExport, {Footer, Header } from "./ElevenExport"; // Export combined

// ----------- Combined Exports Multiple Imports ------------
import ElevenExport from "./ElevenExport";
import {Footer, Header } from "./ElevenExport"; // Export combined


export default function ElevenImport() {

  return (
    <>
    <Header/>
   <ElevenExport/>
   <ElevenExport/>
   <ElevenExport/>
   <Footer/>

    </>
    
  )
}
