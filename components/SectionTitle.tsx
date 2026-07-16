export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {

return (

<div className="text-center mb-12">

<h2
className="
text-4xl
font-bold
text-blue-600
"
>
{title}
</h2>


{
subtitle &&
<p
className="
mt-3
text-gray-600
dark:text-gray-300
"
>
{subtitle}
</p>
}


</div>

)

}