import SectionTitle from "./SectionTitle";


const skills=[

"Java",
"Spring Boot",
"Microservices",
"AWS",
"Docker",
"Kubernetes",
"Jenkins",
"Kafka",
"ActiveMQ",
"Oracle",
"PostgreSQL",
"Terraform",
"Splunk",
"Dynatrace",
"JUnit",
"Cypress"

];


export default function Skills(){

return (

<section
id="skills"
className="
py-20
px-6
"
>


<div className="max-w-5xl mx-auto">


<SectionTitle
title="Technical Skills"
/>


<div
className="
grid
grid-cols-2
md:grid-cols-4
gap-4
"
>


{
skills.map(skill=>(

<div
key={skill}
className="
p-4
rounded-xl
border
text-center
hover:scale-105
transition
"
>
{skill}
</div>

))
}


</div>


</div>


</section>

)

}