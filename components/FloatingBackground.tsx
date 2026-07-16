"use client";


import { motion } from "framer-motion";


export default function FloatingBackground(){

return (

<div
className="
fixed
inset-0
-z-10
overflow-hidden
"
>


<motion.div

animate={{
x:[0,100,0],
y:[0,-100,0]
}}

transition={{
duration:12,
repeat:Infinity
}}

className="
absolute
top-20
left-20
w-72
h-72
bg-blue-500/20
rounded-full
blur-3xl
"

/>


<motion.div

animate={{
x:[0,-100,0],
y:[0,100,0]
}}

transition={{
duration:15,
repeat:Infinity
}}

className="
absolute
bottom-20
right-20
w-96
h-96
bg-purple-500/20
rounded-full
blur-3xl
"

/>


</div>

)

}