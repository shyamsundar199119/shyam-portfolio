import SectionTitle from "./SectionTitle";


const experiences = [


{
period:"2018 - Present",
role:"Senior Software Engineer",
company:"Mastercard Payment Platform",
points:[
"Developed Java 8/11 Spring Boot microservices for real-time payment processing systems",
"Designed REST APIs and backend services using Spring Boot, Hibernate and JPA",
"Implemented asynchronous processing using ActiveMQ messaging queues",
"Improved system reliability through performance optimization and production troubleshooting",
"Participated in Agile development, code reviews and mentoring junior engineers"
]
},

{
period:"2017 - 2018",
role:"Senior Software Engineer",
company:"Newt Global",
points:[
"Developed enterprise applications using Java, Spring Boot and Hibernate",
"Designed REST APIs and database integrations",
"Implemented backend business logic and application enhancements"
]
}
];


export default function Experience(){

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


<div className="max-w-5xl mx-auto">


<SectionTitle
title="Experience"
/>


<div className="space-y-8">


{
experiences.map((exp,index)=>(

<div
key={index}
className="
border-l-4
border-blue-600
pl-6
"
>


<p className="text-blue-600 font-semibold">
{exp.period}
</p>


<h3 className="text-2xl font-bold">
{exp.role}
</h3>


<p>
{exp.company}
</p>


<ul
className="
mt-4
list-disc
ml-5
space-y-2
"
>

{
exp.points.map((p,i)=>
<li key={i}>{p}</li>
)
}

</ul>


</div>


))
}


</div>


</div>


</section>

)

}