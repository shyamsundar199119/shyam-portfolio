"use client";

import { ArrowUp } from "lucide-react";
import { useEffect,useState } from "react";


export default function ScrollTop(){

const [visible,setVisible]=useState(false);


useEffect(()=>{

const handler=()=>{

setVisible(window.scrollY>500);

};

window.addEventListener(
"scroll",
handler
);


return()=>window.removeEventListener(
"scroll",
handler
);

},[]);



if(!visible)
return null;


return (

<button

onClick={()=>window.scrollTo({
top:0,
behavior:"smooth"
})}

className="
fixed
bottom-6
right-6
p-3
rounded-full
bg-blue-600
text-white
shadow-lg
hover:scale-110
transition
"

>

<ArrowUp/>

</button>

)

}