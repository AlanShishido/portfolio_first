import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { DownloadSimple } from "phosphor-react"

export function HomePage(){
  return (
    <div>
      <Header />
      <div className="flex justify-around max-w-[1600px] m-auto"> {/* Comentando algumas coisas */}
          <div className="flex flex-col max-w-2xl justify-center m-auto">
            <div className="flex flex-col m-2">
              <span className="text-yellow-500 text-xl mt-2">
                Hello, I am
              </span>
              <h1 className="text-black text-6xl font-bold">
                Alan Hideyuki Shishido
              </h1>
              <span className="text-green-700 text-2xl my-2">
                Electrical Enginner
              </span>
              <p className="text-black text-justify text-xl">
                I’m a top online marketer and branding expert, I started my career by lauching the popular metaverse design, in just a few short years, I built the brand to millions of social media followers and websites visitors.
              </p>
            </div>

            <div className="m-auto p-2 flex">
              <button className="rounded border border-black mx-2">
                Hire me</button>
              <button className="rounded border border-black mx-2 flex flex-row justify-between">
                Download
                <DownloadSimple />
              </button>
            </div>

          </div>

          <div>
            <img  className="h-[600px] w-[600px]"
            src="https://github.com/AlanShishido.png" 
            alt="Avatar" />
          </div>

      </div>
      <Footer />
    </div>
  )
}