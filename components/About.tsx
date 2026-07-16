import SectionTitle from "./SectionTitle";


export default function About(){

return (

<section
id="about"
className="
py-20
px-6
"
>

<div
className="
max-w-5xl
mx-auto
"
>

<SectionTitle
title="About Me"
subtitle="Senior Backend Engineer"
/>


<div
className="
text-lg
leading-8
text-gray-700
dark:text-gray-300
"
>


<p>

I am a Senior Backend Engineer with 12+ years of experience
building scalable enterprise applications, payment platforms,
and distributed systems.

</p>


<p className="mt-5">

Currently working on real-time payment systems processing
millions of transactions while focusing on reliability,
automation, observability and performance.

</p>


<p className="mt-5">

My expertise includes Java, Spring Boot, Microservices,
AWS, CI/CD automation, DevOps practices and
production support.

</p>


</div>


</div>

</section>

)

}