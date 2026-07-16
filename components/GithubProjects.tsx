import { getGithubRepos } from "@/lib/github";
import SectionTitle from "./SectionTitle";


export default async function GithubProjects(){

const repos =
await getGithubRepos();


return (

<section
className="
py-20
px-6
"
>

<div className="
max-w-6xl
mx-auto
">

<SectionTitle
title="GitHub Projects"
/>


<div
className="
grid
md:grid-cols-3
gap-6
"
>


{
repos
.slice(0,6)
.map((repo:any)=>(


<div
key={repo.id}
className="
border
rounded-xl
p-6
hover:shadow-xl
transition
"
>

<h3
className="
font-bold
text-xl
"
>
{repo.name}
</h3>


<p className="
mt-3
text-gray-600
dark:text-gray-300
">

{
repo.description ??
"No description available"
}

</p>


<p
className="
mt-4
text-blue-600
"
>
{repo.language}
</p>


</div>


))
}


</div>


</div>

</section>

)

}