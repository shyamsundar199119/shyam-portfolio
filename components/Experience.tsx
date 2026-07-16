import SectionTitle from "./SectionTitle";


const experiences=[

{
period:"2025 - Present",
role:"Senior BizOps Engineer / DevOps Engineer",
company:"Mastercard (via LTI Mindtree)",
points:[
"Built and maintained Jenkins CI/CD pipelines",
"Implemented monitoring dashboards using Splunk and Dynatrace",
"Automated deployment workflows using Chef Habitat",
"Supported 24x7 payment platform operations"
]
},


{
period:"2018 - 2025",
role:"Senior Software Engineer",
company:"Mastercard Payment Platform",
points:[
"Developed Java Spring Boot microservices",
"Worked on real-time payment clearing systems",
"Designed REST APIs and backend services",
"Worked with ActiveMQ messaging systems"
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