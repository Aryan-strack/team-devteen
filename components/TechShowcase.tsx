// import React from 'react'
// import { Marquee } from "@/components/magicui/marquee";
// import { IconCloud } from "@/components/magicui/icon-cloud";
// import { TechIcon } from "@/components/tech-icons"


// const TechCard = ({ tech }: { tech: string }) => {
//   return (
//     <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm 
//         rounded-xl px-6 py-4 shadow-md border border-gray-200 whitespace-nowrap 
//         hover:shadow-xl hover:scale-105 transition-all duration-300 group">
//       <TechIcon tech={tech} className="w-7 h-7 transition-transform group-hover:scale-110" />
//       <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
//         {tech}
//       </span>
//     </div>
//   );
// };
// export default function TechShowcase() {
//   const techStack = [
//     "React", "Next.js", "TypeScript", "Node.js", "Python", "Flask", "Django", "MongoDB", "PostgreSQL",
//     "Sass", "Flutter", "React Native", "Material-UI", "AWS", "Docker", "GitHub", "GraphQL", "TailwindCSS",
//     "Angular", "Express", "FastAPI", "Firebase", "Figma", "Supabase", "Bootstrap", "HTML", "CSS",
//     "JavaScript", "PHP", "MySQL", "Laravel", "NestJS", "Git", "Vercel", "Visual Studio"
//   ];

//   const firstRow = techStack.slice(0, techStack.length / 2);
//   const secondRow = techStack.slice(techStack.length / 2);

//   const slugs = [
//     "typescript", "javascript", "dart", "java", "react", "flutter", "android", "html5", "css3", "nodedotjs",
//     "express", "nextdotjs", "prisma", "amazonaws", "postgresql", "firebase", "nginx", "vercel",
//     "testinglibrary", "jest", "cypress", "docker", "git", "jira", "github", "gitlab", "visualstudiocode",
//     "androidstudio", "sonarqube", "figma"
//   ];

//   const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

//   return (
//     <section className="py-20 bg-gradient-to-r from-white via-gray-50 to-gray-100 overflow-hidden border-b border-gray-200">
//       <div className="container mx-auto max-w-7xl mb-12 text-center">
//         <h3 className="text-3xl font-bold mb-3 font-display 
//           bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
//           Our Technology Stack
//         </h3>
//         <p className="text-lg text-gray-600">
//           From modern frameworks to cloud-native tools — we bring the best tech to your projects
//         </p>
//       </div>

//       {/* Two-column layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Left: Marquee 3D */}
//         <div className="relative flex h-96 w-full flex-row items-center justify-center gap-6 overflow-hidden [perspective:300px]">
//           <div
//             className="flex flex-row items-center gap-6"
//             style={{
//               transform:
//                 "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(10deg)",
//             }}
//           >
//             <Marquee pauseOnHover vertical className="[--duration:25s]">
//               {firstRow.map((tech) => (
//                 <TechCard key={tech} tech={tech} />
//               ))}
//             </Marquee>
//             <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
//               {secondRow.map((tech) => (
//                 <TechCard key={tech} tech={tech} />
//               ))}
//             </Marquee>
//           </div>
//         </div>

//         {/* Right: Icon Cloud */}
//         <div className="relative flex  w-[700px] h-[700px] items-center justify-center overflow-hidden"
//         style={{ width: "700px", height: "700px" }}>
//   <IconCloud images={images} 
//     />
//         </div>
//       </div>
//     </section>
//   );
// }