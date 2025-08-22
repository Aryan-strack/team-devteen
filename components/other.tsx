//  <section className="py-20 bg-gradient-to-r from-white via-gray-50 to-gray-100 overflow-hidden border-b border-gray-200">
//             <div className="container mx-auto max-w-7xl mb-12 text-center">
//               <h3
//                 className="text-3xl font-bold mb-3 font-display 
//           bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent"
//               >
//                 Our Technology Stack
//               </h3>
//               <p className="text-lg text-gray-600">
//                 From modern frameworks to cloud-native tools — we bring the best tech
//                 to your projects
//               </p>
//             </div>

//             {/* Two-column layout */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               {/* Left: Marquee 3D */}
//               <div className="relative flex h-96 w-full flex-row items-center justify-center gap-6 overflow-hidden [perspective:300px]">
//                 <div
//                   className="flex flex-row items-center gap-6"
//                   style={{
//                     transform:
//                       "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(10deg)",
//                   }}
//                 >
//                   <Marquee pauseOnHover vertical className="[--duration:25s]">
//                     {firstRow.map((tech) => (
//                       <TechCard key={tech} tech={tech} />
//                     ))}
//                   </Marquee>
//                   <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
//                     {secondRow.map((tech) => (
//                       <TechCard key={tech} tech={tech} />
//                     ))}
//                   </Marquee>
//                 </div>

//                 {/* Gradient Fades */}
//                 <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-gray-100"></div>
//                 <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-100"></div>
//                 <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-100"></div>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-100"></div>
//               </div>

//               {/* Right: Icon Cloud */}
//               <div className="relative flex h-96 items-center justify-center overflow-hidden">
//                 <IconCloud images={images} />
//               </div>
//             </div>
//           </section>