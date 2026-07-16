import SectionTitle from "./SectionTitle";
import { FaGithub } from "react-icons/fa";


const projects=[

{
name:"Career Agent AI",
description:
"AI powered career assistant that matches resumes with relevant jobs.",
tech:[
"Spring Boot",
"OpenAI",
"PostgreSQL"
],
github:"#"
},


{
name:"Football World Cup Scoreboard",
description:
"Java library implementing live football scoring functionality.",
tech:[
"Java",
"JUnit"
],
github:"#"
},


{
name:"Wordle Java Game",
description:
"Command line Wordle implementation using clean Java design.",
tech:[
"Java"
],
github:"#"
}


];


export default function Projects(){


return (

<section
id="projects"
className="
py-20
px-6
bg-gray-50
dark:bg-black/20
"
>


<div
className="
max-w-6xl
mx-auto
"
>


<SectionTitle
title="Featured Projects"
/>



<div
className="
grid
md:grid-cols-3
gap-6
"
>


{
projects.map(project=>(


<div

key={project.name}

className="
border
rounded-xl
p-6
hover:-translate-y-2
hover:shadow-xl
transition
"

>


<h3
className="
text-xl
font-bold
"
>

{project.name}

</h3>


<p
className="
mt-3
text-gray-600
dark:text-gray-300
"
>

{project.description}

</p>



<div
className="
flex
flex-wrap
gap-2
mt-5
"
>

{
project.tech.map(t=>(

<span

key={t}

className="
px-3
py-1
text-sm
rounded-full
bg-blue-100
text-blue-700
dark:bg-blue-900
dark:text-blue-200
"

>

{t}

</span>

))
}


</div>



<a

href={project.github}

className="
inline-flex
items-center
gap-2
mt-6
text-blue-600
"

>

<FaGithub size={18}/>

GitHub

</a>



</div>


))

}


</div>


</div>


</section>

)

}