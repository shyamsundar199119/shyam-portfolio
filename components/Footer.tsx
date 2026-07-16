"use client";
import { FaGithub,FaLinkedin } from "react-icons/fa";


export default function Footer(){

return (

<footer
className="
border-t
py-8
text-center
"
>


<p>
© {new Date().getFullYear()} Shyam Sundar
</p>


<div
className="
flex
justify-center
gap-6
mt-4
"
>

<a
href="https://github.com/shyamsundar199119"
target="_blank"
>
<FaGithub size={25}/>
</a>


<a
href="https://www.linkedin.com/in/shyam-sundar-durai-pandian-5886b8149/"
target="_blank"
>
<FaLinkedin size={25}/>
</a>


</div>


</footer>

)

}