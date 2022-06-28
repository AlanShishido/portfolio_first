import { Link } from "react-router-dom";

export function Header(){
  return (
    <div>
      <header className="flex justify-between max-w-[1100px] m-auto">
        <h1>Alan Hideyuki Shishido</h1>
        <div className="flex flex-row gap-4">
          <Link to={`/home`}>Home</Link>
          <Link to={`/projects`}>Projects</Link>
          <Link to={`/contact`}>Contact Me</Link>
        </div>
      </header>
    </div>
  )
}