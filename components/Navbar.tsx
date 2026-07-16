"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";


const links=[
{
name:"About",
href:"#about"
},
{
name:"Experience",
href:"#experience"
},
{
name:"Skills",
href:"#skills"
},
{
name:"Projects",
href:"#projects"
},
{
name:"Contact",
href:"#contact"
}
];


export default function Navbar(){

const [open,setOpen]=useState(false);


return (

<nav
className="
fixed
top-0
w-full
z-50
backdrop-blur-lg
border-b
bg-white/70
dark:bg-black/50
"
>


<div
className="
max-w-6xl
mx-auto
flex
justify-between
items-center
px-6
py-4
"
>


<Link
href="/"
className="
flex
flex-col
leading-tight
"
>

<span
className="
text-xl
font-bold
text-blue-600
"
>
Shyam Sundar
</span>


<span
className="
text-xs
text-gray-500
dark:text-gray-400
"
>
Senior Backend Engineer
</span>


</Link>


<div
className="
hidden
md:flex
items-center
gap-6
"
>


{
links.map(link=>(

<Link
key={link.name}
href={link.href}
className="
hover:text-blue-600
transition
"
>

{link.name}

</Link>

))
}


<ThemeToggle/>

</div>



<div className="md:hidden flex items-center gap-4">

<ThemeToggle/>


<button
onClick={()=>setOpen(!open)}
>

{
open?
<X/>
:
<Menu/>
}

</button>


</div>


</div>



{
open &&

<div
className="
md:hidden
px-6
pb-6
space-y-4
bg-white
dark:bg-black
"
>

{
links.map(link=>(

<Link

key={link.name}

href={link.href}

onClick={()=>setOpen(false)}

className="
block
hover:text-blue-600
"

>

{link.name}

</Link>

))
}

</div>

}



</nav>


)

}