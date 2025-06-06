import { useEffect, useState} from "react";
import { navList } from "./data-constants/data-constants"
import { socialMedia } from "./data-constants/data-constants";
import { techStack } from "./data-constants/data-constants";
import * as Dialog from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "motion/react"
import { RiCloseLargeFill } from "react-icons/ri";
import laptop from "./assets/laptopColorful.png"
import { HiOutlineMenuAlt4 } from "react-icons/hi";








// IMPROVIMENTS I NEED TO WORK ON FOR MOBILE
// i need to make the hero section uniform in the mobile screen like the portfolios that i saw, i need to make sure only my name the nav and teck stack get shown in every screen hight size
// improve the links style and position inside the dialog drawer
// add social media icons, i think it is best to choose from the internet
// improve the projects section, improve name and project descriptions
// add background colors for some sections
// make the nav bar follow the scroll


function App() {

  // removing scroll block from Dialog
  const [open, setOpen] = useState(false)

  useEffect(() => {

    if(open) {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = '';
    }
  },[open])

  // nav height is defined here to keep a proper size in hero section when nav moves together with the scroll
  const navHeight = "20"


  return (
    <>
    <header className="max-sm:min-h-[100vh] flex flex-col justify-between">
      <nav className={`px-2 h-${navHeight} w-full flex max-sm:justify-end max-sm:items-center bg-white fixed top-0`}>
        {navList.map((links) => (
          <a 
          href="/"
          key={links}
          className="border1 max-sm:hidden"
          >{links}</a>
        ))}
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild className="bg-white">
              <button className="sm:hidden text-5xl rounded-md grid place-content-center opacity-90 mr-[2vw]"
              >
                <HiOutlineMenuAlt4 className="text-neutral-700"/>
              </button>
            </Dialog.Trigger>
            
            <AnimatePresence>

              {open && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild>
                    <motion.div
                    className="fixed inset-0 bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    />
                  </Dialog.Overlay>

                  <Dialog.Content asChild>
                    <motion.div
                    className="fixed top-0  left-0 bg-white rounded shadow-2xl h-full"
                    initial={{
                      width: '0vw',
                      opacity: 0
                    }}
                    animate={{
                      width: '60vw',
                      opacity: 1
                    }}
                    exit={{
                      width: '0vw',
                      opacity: 0
                    }}
                    transition={{duration: 0.2, ease: 'easeInOut'}}
                    >
                      <div className="mt-4 flex justify-end">
                      <Dialog.Close asChild>
                        <button className="px-4 py-2 text-2xl">
                          <RiCloseLargeFill/>
                        </button>
                      </Dialog.Close>
                    </div>

                    <div className="mt-16 flex flex-col gap-4 items-center">
                      {navList.map((link) => (
                        <a 
                        href="/" 
                        key={link}
                        className=""
                        >{link}</a>
                      ))}
                    </div>

                    <div className="mt-8 flex gap-4 justify-center">
                      {socialMedia.map((icon) => (
                        <a 
                        href="/" 
                        key={icon.name}
                        className="">
                          {icon.name}
                        </a>
                      ))}
                    </div>

                    <Dialog.Title></Dialog.Title>
                    <Dialog.Description></Dialog.Description>
                    </motion.div>

                    
                  </Dialog.Content>
                </Dialog.Portal>
              )}

            </AnimatePresence>
            
            
          </Dialog.Root>
      </nav>

      <div className={`sm:hidden w-full h-${navHeight}`}>
        {/* navUnderlayer */}
      </div>

      <section className="h-[50vh] max-sm:flex-grow w-full bg-neutral-100 max-sm:flex max-sm:items-center">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-5xl font-semibold">Victor Souza</h1>
            <h2 className="text-3xl">Front-End Developer</h2>
          </div>
      </section >

      <section className="mb-2">
          <h2 className="text-center text-2xl font-medium mt-12 mb-4">Teck Stack</h2>
          <div className="grid grid-cols-5 gap-4 justify-items-center px-3">
            {techStack.map((tech) => (
              <figure key={tech.name} className="border1 w-16 h-16 p-1 rounded-md bg-neutral-200">
                <img
                  src={tech.logo}
                  alt="programming-logo"
                  className="rounded-md w-full h-full object-fill"
                />
                <p className="max-sm:hidden">{tech.name}</p>
              </figure>

            ))}
          </div>
      </section>
    </header>

    <main>

      <div className="max-sm:mt-16">
        <figure>
          <img 
          src={laptop}
          alt=""
          className="max-sm:hidden"/>
        </figure>

        <div>
          <h2 className="text-center text-2xl font-medium mb-2">About</h2>
          <p className="text-xl px-4 leading-8 opacity-80">I'm a self-taught web developer and Mobile App Developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release. Currently, I'm focused on the backend development.</p>
        </div>

        <section className="max-sm:flex max-sm:flex-col max-sm:items-center gap-4">
          <h2 className="text-2xl font-medium  max-sm:mt-16">Projects</h2>
          <div className="border1 flex flex-col items-center gap-4">
            <figure className="border1 max-sm:w-[90vw] max-sm:h-[40vh] rounded-md bg-neutral-400">
            </figure>
            <h3 className="text-xl font-medium text-center">Simple Painting</h3>
            <p className="text-center">Simple Painting is an app that turns the process of painting more fast and intuitive because of its keyboard and mouse intregration</p>

            <div className="flex gap-4">
              <p>Tools</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>Typescript</p>
            </div>

            <div>
              <p>Code:GITICON</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center pb-12">
          <h2 className="text-2xl font-semibold  max-sm:mt-16 max-sm:mb-4">Contact Form</h2>
          <form className="w-[80vw] rounded-md flex flex-col gap-4">
            <input 
              type="text"
              placeholder="Name"
              className="w-full h-12 text-lg borderFormFilds bg-transparent outline-none"
              />
              <input 
              type="email"
              placeholder="Email"
              className="w-full h-12 text-lg borderFormFilds bg-transparent outline-none"
              />
              <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="max-sm:max-w-[90vw] max-sm:h-[16vh] text-lg outline-none resize-none borderFormFilds bg-transparent mt-4"
              ></textarea>
              <button className="bg-black text-white rounded-md max-w-16 h-8 text-lg mt-4">Send</button>
          </form>

          <div className="w-full max-sm:max-w-[80vw] mt-20 flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Quick Contact</h3>
            <p>
              <span className="font-semibold">Email:</span> Hey@example.com</p>
            <p>
              <span>Social:</span> linkding twitter</p>
          </div>
        </section>
      </div>

    </main>
    <footer className="h-20 flex justify-center items-center text-xs">
      <p>&copy; 2025 VICTORSOUZA. ALL RIGHT RESERVED</p>
    </footer>
    </>
  )
}

export default App
