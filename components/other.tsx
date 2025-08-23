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

{/* Our Team */}
        // <section className="mb-20">
        //   <div className="text-center mb-12">
        //     <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
        //     <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        //       The talented individuals behind DevTeen, each bringing unique expertise and passion to every project.
        //     </p>
        //   </div>

        //   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        //     {teamMembers.map((member) => (
        //       <Card
        //         key={member.name}
        //         className="text-center hover:shadow-lg transition-all duration-300 border-border/50"
        //       >
        //         <CardHeader>
        //           <div className="relative w-32 h-32 mx-auto mb-4">
        //             <Image
        //               src={member.image || "/placeholder.svg"}
        //               alt={member.name}
        //               width={128}
        //               height={128}
        //               className="rounded-full object-cover"
        //             />
        //           </div>
        //           <CardTitle className="text-xl">{member.name}</CardTitle>
        //           <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
        //         </CardHeader>
        //         <CardContent className="space-y-4">
        //           <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>

        //           <div className="flex justify-center space-x-3">
        //             {member.social.linkedin && (
        //               <Button variant="outline" size="sm" asChild>
        //                 <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
        //                   <Linkedin className="h-4 w-4" />
        //                 </a>
        //               </Button>
        //             )}
        //             {member.social.twitter && (
        //               <Button variant="outline" size="sm" asChild>
        //                 <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
        //                   <Twitter className="h-4 w-4" />
        //                 </a>
        //               </Button>
        //             )}
        //             {member.social.github && (
        //               <Button variant="outline" size="sm" asChild>
        //                 <a href={member.social.github} target="_blank" rel="noopener noreferrer">
        //                   <Github className="h-4 w-4" />
        //                 </a>
        //               </Button>
        //             )}
        //             {member.social.website && (
        //               <Button variant="outline" size="sm" asChild>
        //                 <a href={member.social.website} target="_blank" rel="noopener noreferrer">
        //                   <Globe className="h-4 w-4" />
        //                 </a>
        //               </Button>
        //             )}
        //           </div>
        //         </CardContent>
        //       </Card>
        //     ))}
        //   </div>
        // </section>