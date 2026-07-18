import { getGithubRepos } from "@/lib/github";
import SectionTitle from "./SectionTitle";


const featuredProjects = [
  {
    repo: "career-agent",
    title: "Career Agent AI",
    description:
      "AI-powered career assistant that finds matching jobs, analyzes opportunities, and helps manage the job search workflow.",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "AI",
      "PostgreSQL"
    ]
  },

  {
    repo: "leetcode-java-solutions",
    title: "LeetCode Java Solutions",
    description:
      "Collection of optimized Java solutions covering algorithms, data structures, and coding interview patterns.",
    tech: [
      "Java",
      "Algorithms",
      "Data Structures"
    ]
  },

  {
    repo: "portfolio",
    title: "Developer Portfolio",
    description:
      "Modern personal portfolio built with Next.js showcasing my experience, projects, and technical skills.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS"
    ]
  }
];


export default async function GithubProjects(){


const repos =
await getGithubRepos();



const projects =
featuredProjects.map(project => {

const repo =
repos.find(
(repo:any)=>
repo.name.toLowerCase() === project.repo
);


return {
...project,
githubUrl: repo?.html_url ?? "#",
stars: repo?.stargazers_count ?? 0
};

});



return (

<section
id="projects"
className="
py-20
px-6
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
gap-8
"
>


{
projects.map((project)=>(


<div

key={project.repo}

className="
rounded-2xl
border
p-6
bg-white
dark:bg-black/30
hover:-translate-y-2
hover:shadow-2xl
transition-all
duration-300
"

>


<h3
className="
text-xl
font-bold
"
>

{project.title}

</h3>



<p
className="
mt-3
text-gray-600
dark:text-gray-300
leading-relaxed
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
project.tech.map((tech)=>(

<span

key={tech}

className="
px-3
py-1
rounded-full
text-sm
bg-blue-100
dark:bg-blue-900/30
text-blue-700
dark:text-blue-300
"

>

{tech}

</span>

))
}


</div>



<div
className="
mt-6
flex
justify-between
items-center
"
>


<a

href={project.githubUrl}

target="_blank"

className="
text-blue-600
font-semibold
hover:underline
"

>

View GitHub →

</a>



<span
className="
text-sm
text-gray-500
"
>

⭐ {project.stars}

</span>


</div>


</div>


))
}


</div>


</div>


</section>


)

}