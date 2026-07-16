import SectionTitle from "./SectionTitle";


export default function Certifications(){

return (

<section className="py-20 px-6">

<div className="max-w-5xl mx-auto">

<SectionTitle
title="Certifications"
/>


<div className="grid md:grid-cols-3 gap-5">

<div className="border p-5 rounded-xl">
AWS Developer
</div>


<div className="border p-5 rounded-xl">
Oracle Java
</div>


<div className="border p-5 rounded-xl">
Spring Professional
</div>


</div>

</div>

</section>

)

}