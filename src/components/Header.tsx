import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Header(){
  return (
    <div>
      <header className="flex justify-between items-center max-w-[1600px] m-auto h-10">
        <Logo/>
        <div className="flex flex-row gap-4">
          <Link to={`/home`}
            className="px-4 py-2">
            Home
          </Link>
          <Link to={`/projects`}
            className="px-4 py-2">
            Projects
          </Link>
          <Link to={`/contact`}
            className="px-4 py-2">
            Contact Me
          </Link>
        </div>
      </header>
    </div>
  )
}