import ProjectCard from "./ProjectCard";
import firebnb from "../assets/firebnb.png";
import niho from "../assets/niho.png";
import frello from "../assets/frello.png";

export default function FourthSection() {
  return (
    <section className='w-full h-[700px] py-10 px-20'>
        <div className='w-full h-full flex-center gap-10'>
            <ProjectCard
            image={firebnb}
            title={"Firebnb"}
            comment={"A react app like airbnb, made using Firebase, where you can rent a house or a room."}
            tag1={"#react"} tag2={"#tailwind"} tag3={"#firebase"}
            link={"https://firebnb-react.vercel.app/"}
            />
            <ProjectCard
            image={niho}
            title={"NihoGrocery"}
            comment={"A react app like airbnb, made using Firebase, where you can rent a house or a room."}
            tag1={"#react"} tag2={"#tailwind"}
            link={"https://niho-grocery.vercel.app/"}
            />
            <ProjectCard
            image={frello}
            title={"Frello"}
            comment={"A react app like airbnb, made using Firebase, where you can rent a house or a room."}
            tag1={"#react"} tag2={"#tailwind"} tag3={"#framer-motion"}
            link={"https://frello-react.vercel.app/"}
            />
        </div>
    </section>
  )
}
