import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Header(){
  return (
    <div>
      <header className="flex justify-between max-w-[1600px] m-auto">
        <Logo/>
        <div className="flex flex-row gap-4">
          <Link to={`/home`}>Home</Link>
          <Link to={`/projects`}>Projects</Link>
          <Link to={`/contact`}>Contact Me</Link>
        </div>
      </header>
    </div>
  )
}