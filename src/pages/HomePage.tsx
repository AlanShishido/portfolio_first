import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export function HomePage(){
  return (
    <div>
      <Header />
      <div className="flex justify-around max-w-[1100px] m-auto">
        <div className="flex flex-col">
          <span>Welcome to my site</span>
          <h1>Hi, I'm Alan, a Eletric Enginner </h1>
          <p>UI/UX & Product Designer</p>

          <p>I’m a top online marketer and branding expert, I started my career
by lauching the popular metaverse design, in just a few short
years, I built the brand to millions of social media followers and websites visitors.</p>
        </div>

        <div>
          <img src="https://github.com/AlanShishido.png" alt="Avatar" />
        </div>

      </div>
      <Footer />
    </div>
  )
}