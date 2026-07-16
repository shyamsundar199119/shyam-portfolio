"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";


export default function Hero(){

return (

<section
className="
min-h-screen
flex
items-center
justify-center
px-6
"
>

<motion.div

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

className="
text-center
max-w-5xl
"


>

<h1
className="
text-5xl
md:text-7xl
font-bold
"
>

Hi, I'm{" "}

<span
className="
text-blue-600
"
>
Shyam Sundar
</span>

</h1>


<h2
className="
mt-5
text-2xl
md:text-4xl
font-semibold
"
>

Senior Backend Engineer

</h2>


<p
className="
mt-6
text-lg
text-gray-600
dark:text-gray-300
"
>

Building scalable backend systems using

<br/>

Java • Spring Boot • Microservices • AWS • Maven

</p>


<p
className="
mt-4
text-blue-600
font-semibold
"
>

Available for opportunities in Norway 🇳🇴

</p>


<div
className="
flex
justify-center
gap-6
mt-8
"
>

<a
href="https://github.com/shyamsundar199119"
target="_blank"
rel="noopener noreferrer"
className="
hover:text-blue-600
transition
"
>
<FaGithub size={30}/>
</a>


<a
href="https://www.linkedin.com/in/shyam-sundar-durai-pandian-5886b8149/"
target="_blank"
rel="noopener noreferrer"
className="
hover:text-blue-600
transition
"
>
<FaLinkedin size={30}/>
</a>


<a
href="mailto:shyamsundar199119@gmail.com"
className="
hover:text-blue-600
transition
"
>
<Mail size={30}/>
</a>


</div>


<div
className="
mt-8
flex
justify-center
gap-4
"
>


<a
href="/Shyam_Sundar_Senior_Backend_Engineer_Resume.pdf"
download
className="
bg-blue-600
text-white
px-6
py-3
rounded-lg
hover:scale-105
transition
"
>
Download Resume
</a>


</div>


</motion.div>


</section>

)

}