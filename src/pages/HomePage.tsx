import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export function HomePage(){
  return (
    <div>
      <Header />
      <div>
        <div>
          <span>Welcome to my site</span>
          <h1>Hi, I'm Alan, a Eletric Enginner </h1>

          <p>Innovation and constant learning. Bachelor of Electrical Engineering.</p>
        </div>

        <div>
          <img src="https://github.com/AlanShishido.png" alt="Avatar" />
        </div>

      </div>
      <Footer />
    </div>
  )
}