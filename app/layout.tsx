import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {

title:
"Shyam Sundar | Senior Backend Engineer",

description:
"Senior Backend Engineer with 12+ years experience building scalable Java Spring Boot microservices, payment systems, AWS and DevOps solutions.",


keywords:[

"Java Developer",
"Spring Boot Developer",
"Backend Engineer Norway",
"AWS",
"Microservices",
"Kubernetes",
"DevOps"

],


openGraph:{

title:
"Shyam Sundar | Senior Backend Engineer",

description:
"Building scalable backend systems using Java, Spring Boot and Cloud technologies.",

type:"website"

}

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}