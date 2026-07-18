import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";

import Stats from "@/components/Stats";
import GithubProjects from "@/components/GithubProjects";

import Contact from "@/components/Contact";

import FloatingBackground from "@/components/FloatingBackground";

import ScrollTop from "@/components/ScrollTop";


export default function Home(){

return (

<main>

<FloatingBackground/>

<Navbar/>

<Hero/>

<Stats/>

<About/>

<Experience/>

<Skills/>

<Projects/>

<GithubProjects/>

<Contact/>

<ScrollTop/>

<Footer/>

</main>

)

}