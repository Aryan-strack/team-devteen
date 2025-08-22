import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMaterialdesign,
  SiAmazon,
  SiDocker,
  SiGithub,
  SiGraphql,
  SiTailwindcss,
  SiFlutter,
  SiAngular,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFigma,
  SiSupabase,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiLaravel,
  SiDjango,
  SiFlask,
  SiNestjs,
  SiGit,
  SiVercel,
} from "react-icons/si"

import { FaSass, FaCode } from "react-icons/fa";


export const techIcons: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  Python: SiPython,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  MySQL: SiMysql,
  Laravel: SiLaravel,
  Django: SiDjango,
  Flask: SiFlask,
  "Material-UI": SiMaterialdesign,
  AWS: SiAmazon,
  Docker: SiDocker,
  GitHub: SiGithub,
  GraphQL: SiGraphql,
  TailwindCSS: SiTailwindcss,
  Flutter: SiFlutter,
  "React Native": SiReact,
  Angular: SiAngular,
  Express: SiExpress,
  FastAPI: SiFastapi,
  Firebase: SiFirebase,
  Figma: SiFigma,
  Supabase: SiSupabase,
  Bootstrap: SiBootstrap,
  Sass: FaSass,
  NestJS: SiNestjs,
  Git: SiGit,
  Vercel: SiVercel,
  "Visual Studio": FaCode

}

// 🎨 Brand colors mapping
const techColors: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#000000",
  TypeScript: "#3178C6",
  "Node.js": "#68A063",
  Python: "#3776AB",
  MongoDB: "#47A248",
  PostgreSQL: "#336791",
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  PHP: "#777BB4",
  MySQL: "#4479A1",
  Laravel: "#FF2D20",
  Django: "#092E20",
  Flask: "#000000",
  "Material-UI": "#0081CB",
  AWS: "#FF9900",
  Docker: "#2496ED",
  GitHub: "#181717",
  GraphQL: "#E10098",
  TailwindCSS: "#38BDF8",
  Flutter: "#02569B",
  "React Native": "#61DAFB",
  Angular: "#DD0031",
  Express: "#000000",
  FastAPI: "#009688",
  Firebase: "#FFCA28",
  Figma: "#F24E1E",
  Supabase: "#3ECF8E",
  Bootstrap: "#7952B3",
  Sass: "pink",
  NestJS: "#E0234E",
  Git: "#F05032",
  Vercel: "#000000",
  "Visual Studio": "#007ACC"

}

export function TechIcon({
  tech,
  className = "h-5 w-5",
}: {
  tech: string
  className?: string
}) {
  const Icon = techIcons[tech] || SiReact
  const color = techColors[tech] || "#6B7280" // default gray-500
  return <Icon className={className} style={{ color }} />
}
