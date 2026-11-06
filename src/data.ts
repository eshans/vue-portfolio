import { siElixir, siPhoenixframework, siTypescript, siVuedotjs } from "simple-icons"

export const email = "eric.shans@gmail.com"
export const linkedin = "https://www.linkedin.com/in/eric-shans/"
export const github = "https://github.com/eshans"

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
]

export interface Skill {
  name: string
  image?: string
  // Brand icon from simple-icons, drawn as an SVG in the brand color
  svg?: { path: string; hex: string }
}

export const skills: Skill[] = [
  { name: "HTML", image: "/skills/html.png" },
  { name: "CSS", image: "/skills/css.png" },
  { name: "JavaScript", image: "/skills/javascript.png" },
  { name: "TypeScript", svg: siTypescript },
  { name: "Vue", svg: siVuedotjs },
  { name: "React", image: "/skills/react.png" },
  { name: "Elixir", svg: siElixir },
  { name: "Tailwind", image: "/skills/tailwind.png" },
  { name: "Phoenix LiveView", svg: siPhoenixframework },
  { name: "GitHub", image: "/skills/github.png" },
]

export interface Project {
  name: string
  stack: string
  image: string
  live: string
  code?: string
}

export const projects: Project[] = [
  {
    name: "DJ Site",
    stack: "Vue, Tailwind",
    image: "/projects/dj-site.jpg",
    code: "https://github.com/eshans/dj-eric-shans",
    live: "https://www.djericshans.com",
  },
  {
    name: "3Bridge Records",
    stack: "Vue, Nuxt",
    image: "/projects/3bridge-records.jpg",
    code: "https://github.com/eshans/3bridge-records",
    live: "https://3bridge-records.pages.dev/",
  },
  {
    name: "Weiner Pest Services",
    stack: "Vue, Tailwind",
    image: "/projects/weiner-pest.jpg",
    code: "https://github.com/eshans/weiner-pest-services",
    live: "http://www.weinerpestservices.com/",
  },
  {
    name: "Stock Photo Search",
    stack: "React",
    image: "/projects/photo-search.jpg",
    code: "https://github.com/eshans/react-photo-search",
    live: "https://stock-photo-search-react.netlify.app/",
  },
  {
    name: "Cesium 137 Band Site",
    stack: "Design, Development, Branding",
    image: "/projects/cesium-137.jpg",
    live: "http://www.cesium137.com/",
  },
  {
    name: "3Bridge Elements",
    stack: "Design, Development, Branding",
    image: "/projects/3bridge-elements.jpg",
    live: "https://www.3bridgelements.com",
  },
]
