import SectionTitle from "./SectionTitle";


const experiences = [

{
company:"Mastercard",
role:"Senior Backend Engineer / BizOps Engineer",
project:
"Real-Time Payment Processing Platform",

description:
"Built and supported a highly available real-time payment platform powering financial transactions at enterprise scale.",

highlights:[
"Developed Java Spring Boot microservices processing 1M+ transactions/day.",
"Built CI/CD automation pipelines using Jenkins and Chef Habitat.",
"Implemented observability solutions using Splunk and Dynatrace.",
"Improved production reliability through automation and root cause analysis."
],

tech:[
"Java",
"Spring Boot",
"Microservices",
"Jenkins",
"Chef Habitat",
"Splunk",
"Dynatrace",
"ActiveMQ"
]

},


{
company:"Verizon",
role:"Software Engineer",
project:
"TradeMore Mobile Device Selling Platform",

description:
"Developed backend services for a mobile device trade-in platform enabling customers to evaluate and sell used devices.",

highlights:[
"Developed REST APIs using Java 8, Spring Boot, Spring and Hibernate.",
"Built backend services using microservice architecture.",
"Created Swagger API documentation and integration testing.",
"Performed root cause analysis and resolved production defects."
],

tech:[
"Java 8",
"Spring Boot",
"Hibernate",
"REST APIs",
"Microservices",
"MSSQL",
"Swagger"
]

}


];


export default function Projects(){


return (

<section
id="experience"
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
title="Professional Experience"
/>



<div
className="
grid
md:grid-cols-2
gap-8
"
>


{
experiences.map(exp=>(


<div

key={exp.company}

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
text-2xl
font-bold
"
>

{exp.company}

</h3>



<p
className="
mt-2
font-semibold
text-blue-600
"
>

{exp.role}

</p>



<h4
className="
mt-4
font-semibold
"
>

{exp.project}

</h4>



<p
className="
mt-3
text-gray-600
dark:text-gray-300
"
>

{exp.description}

</p>



<ul
className="
mt-5
space-y-2
text-sm
text-gray-700
dark:text-gray-300
"
>

{
exp.highlights.map(item=>(

<li
key={item}
>
• {item}
</li>

))
}

</ul>



<div
className="
flex
flex-wrap
gap-2
mt-5
"
>

{
exp.tech.map(t=>(

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


</div>


))
}


</div>


</div>


</section>


)

}