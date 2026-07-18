"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "./SectionTitle";


export default function Contact(){

const [sent,setSent]=useState(false);


const sendEmail = async (e:any) => {

e.preventDefault();


try {

await emailjs.sendForm(

process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,

process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,

e.target,

process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!

);


setSent(true);


e.target.reset();


}

catch(error){

console.error(
"Email sending failed:",
error
);

alert(
"Failed to send message. Please try again."
);

}

};


return (

<section
id="contact"
className="
py-20
px-6
"
>

<div className="
max-w-3xl
mx-auto
">


<SectionTitle
title="Contact Me"
subtitle="Have an idea? Let's build it. Or let's talk tech over a coffee—or a beer. Skål! 🍺"
/>


<form

onSubmit={sendEmail}

className="
space-y-5
"

>


<input

name="name"

placeholder="Your Name"

className="
w-full
border
rounded-lg
p-3
bg-transparent
"

/>



<input

name="email"

placeholder="Your Email"

className="
w-full
border
rounded-lg
p-3
bg-transparent
"

/>



<textarea

name="message"

placeholder="Your Message"

rows={5}

className="
w-full
border
rounded-lg
p-3
bg-transparent
"

/>



<button

className="
bg-blue-600
text-white
px-6
py-3
rounded-lg
hover:scale-105
transition
"

>

Send Message

</button>


{
sent &&
<p className="text-green-600">
Message sent successfully!
</p>
}


</form>


</div>


</section>

)

}