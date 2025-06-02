import oldMan from "./assets/oldMan-HighQuality-Photoroom.png"
import manSuit from "./assets/man-on-a-suit-Photoroom.png"
import background from "./assets/backgroundHeroFinished.png"


function App() {

  return (
    <>
    <header className="flex flex-col items-center">
      <nav className="flex max-sm:w-full max-sm:justify-end sm:min-w-[70vw] lg:min-w-[60vw] min-h-[8vh]">
        <div className="flex justify-around w-full max-sm:hidden text-lg items-center font-light">
        <p>home</p>
        <p>about</p>
        <p>contact</p>
        <p>resume</p>
        </div>
        <button className="sm:hidden mr-4 border3 p-2">Menu</button>
      </nav>

      <div className={`w-full min-h-[94vh] bg-neutral-100 bg-cover flex justify-center`}>

        <div className="border1 flex flex-col justify-center">
          <div>
              <h1 className="text-6xl">Victor Souza</h1>
              <h2 className="text-3xl">Front-End Developer</h2>
              <p>based Rhino Nevada</p>
          </div>
          <p>A Paixonate web dev that blend tecnical world with creative ethos, <br></br> crafting experiences that are seamless and intuitive.</p>
        </div>

        <div className="border1 relative min-h-full flex items-end">
            <img
              src={manSuit}
              alt="old-man-on-laptop"
              className="object-cover h-full"
            />
        </div>
        
      </div>
    </header>

    <main></main>
    <footer></footer>
    </>
  )
}

export default App
