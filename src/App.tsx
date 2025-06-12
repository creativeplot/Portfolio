import { useEffect, useState} from "react";
import { navList } from "./data-constants/data-constants"
import { techStack } from "./data-constants/data-constants";
import * as Dialog from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "motion/react"
import { RiCloseLargeFill } from "react-icons/ri";
import laptop from "./assets/photo-table-tv.jpeg"
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import heroImage from "./assets/manStyleSuite3-Photoroom.png"
import projectImgTest from "./assets/web-design-1.png"
import projectImgTest2 from "./assets/websiteExample.png"

// next step is to add a layer to all images so it has a black and white look to it, then i want to animate this layer so it show the images color every time i hover over the image with my mouse

// ajust the icons properly


function App() {

  // removing scroll block from Dialog
  const [open, setOpen] = useState(false)

  useEffect(() => {

    if(open) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    }
  },[open])


  return (
    <>
    <header className="max-md:min-h-[100vh] flex flex-col justify-between">
      <nav className="max-md:px-2 h-16 w-full bg-white fixed top-0 z-30 flex max-md:justify-end max-md:items-center md:justify-center">
        <div className="max-md:hidden min-w-[250px] w-full max-w-[1100px] flex justify-between items-center mx-8">
        {navList.map((links) => (
          <a 
          href="/"
          key={links}
          className="grid place-content-center opacity-70 hover:opacity-100"
          >{links}</a>
        ))}
        </div>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild className="bg-white">
              <button className="md:hidden text-5xl rounded-md grid place-content-center opacity-90 mr-[2vw]"
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
                    className="fixed top-0 left-0 bg-white rounded shadow-2xl h-full"
                    initial={{
                      width: '0px',
                      paddingLeft: '0px',
                      opacity: 0
                    }}
                    animate={{
                      width: '270px',
                      paddingLeft: '40px',
                      opacity: 1
                    }}
                    exit={{
                      width: '0px',
                      paddingLeft: '0px',
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

                    <motion.div
                    initial={{
                      opacity: 0
                    }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: 0.4
                      }
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.05
                      }
                    }}
                    className="mt-8 flex flex-col gap-8">
                      {navList.map((link) => (
                        <a 
                        href="/" 
                        key={link}
                        className="max-md:uppercase"
                        >{link}</a>
                      ))}
                    </motion.div>

                    <motion.div
                    initial={{
                      opacity: 0
                    }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: 0.4
                      }
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.05
                      }
                    }}
                    className="mt-12 flex gap-8 text-3xl">
                      <a href="/">
                      <FaGithub/>
                      </a>
                      <a href="/">
                      <FaLinkedin/>
                      </a>
                      <a href="/">
                      <BsTwitterX/>
                      </a>
                    </motion.div>

                    <Dialog.Title></Dialog.Title>
                    <Dialog.Description></Dialog.Description>
                    </motion.div>

                    
                  </Dialog.Content>
                </Dialog.Portal>
              )}

            </AnimatePresence>
            
            
          </Dialog.Root>
      </nav>

      <div className="md:hidden w-full h-16">
        {/* navUnderlayer it keeps a proper size in hero section when nav moves together with the scroll */}
      </div>
      <section className="max-md:flex-grow w-full bg-neutral-100 max-sm:flex max-sm:items-center md:h-[100vh] flex justify-center">
          <div className="flex flex-col max-md:items-center justify-center w-full md:max-w-[540px] md:ml-8 max-sm:items-center">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold lg:whitespace-nowrap">Victor Souza</h1>
            <h2 className="text-3xl md:text-4xl lg:text-6xl">Front-End Developer</h2>
          </div>
          <div className="lg:w-[10vw] lg:max-w-20">
            {/* hack to make a gap */}
          </div>
          <figure className="h-full w-full max-w-[610px] max-md:hidden">
            <img 
            src={heroImage} 
            alt=""
            className="h-full w-full object-cover object-top" 
            />
          </figure>
      </section >

      <section className="flex flex-col items-center max-md:mt-20 md:mt-40">
          <h2 className="text-center text-2xl font-medium mb-4 lg:mb-8">Teck Stack</h2>
          <div className="grid grid-cols-5 max-md:gap-4 justify-items-center max-lg:px-3 min-w-[250px] w-full lg:max-w-[1200px] md:flex md:justify-around lg:justify-between">
            {techStack.map((tech) => (
              <div className="flex flex-col items-center justify-center w-16 lg:w-20 gap-y-1 hover:font-semibold filter grayscale hover:grayscale-0">
              <figure key={tech.name} className="w-16 h-16 lg:w-20 lg:h-20 p-1 rounded-md bg-neutral-200">
                <img
                  src={tech.logo}
                  alt="programming-logo"
                  className="rounded-md w-full h-full object-scale-down "
                />
              </figure>
              <p className="max-md:hidden text-normal">{tech.name}</p>
              </div>

            ))}
          </div>
      </section>
    </header>

    <main className="mx-8">

        <div className="w-full max-md:mt-28 md:mt-64 sm:flex sm:justify-center">
          <div className="lg:max-w-[1200px] sm:flex gap-4">
            <figure className="max-md:hidden w-full min-w-[300px] flex-grow">
              <img
                src={laptop}
                alt="laptop-on-a-table"
                className="h-full object-cover rounded-md filter grayscale hover:grayscale-0"/>
            </figure>

            <div className="px-4 max-w-[700px]">
              <h2 className="max-md:text-center text-2xl font-medium mb-2">About/Journey</h2>
              <p className="text-xl leading-8 opacity-80">I'm a self-taught web developer and Mobile App Developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release. Currently, I'm focused on the backend development.  i Actually can talk about my journey of becoming a self tought developer how i learned inglish end etc <a href="/" className="font-semibold">know more</a>
              </p>
            </div>
          </div>
        </div>

        <section className="max-sm:flex max-md:flex-col max-sm:items-center max-md:mt-28 md:mt-64 gap-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-medium md:text-center">Projects</h2>
          <div className="w-full max-w-[1200px] md:flex md:gap-8">
            <div className="flex flex-col items-center gap-8 md:w-[50vw]">
              <figure className="max-md:w-[90vw] max-md:h-[40vh] md:w-full md:h-[40vh] rounded-md bg-neutral-400 ">
                <img src={projectImgTest} alt="test" className="w-full h-full object-cover rounded-md filter grayscale hover:grayscale-0" />
              </figure>
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-2xl font-semibold">Simple Painting</h3>
                <p className="text-xl max-sm:max-w-[90vw]">Simple painting is an app that turns the process of painting more fast and intuitive because of its keyboard and mouse intregration</p>
              </div>

              <div className="flex flex-wrap gap-2 text-xl w-full max-sm:max-w-[90vw]">
                <p className="font-semibold">Tools:</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>Typescript</p>
              </div>

              <div className="flex items-center gap-2 w-full">
                <p className="text-xl font-semibold">Code</p>
                <FaGithub className="text-2xl" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 md:w-[50vw]">
              <figure className="max-md:w-[90vw] max-md:h-[40vh] md:w-full md:h-[40vh] rounded-md bg-neutral-400">
                <img src={projectImgTest2} alt="test" className="w-full h-full object-cover filter grayscale" />
              </figure>
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-2xl font-semibold">Simple Painting</h3>
                <p className="text-xl max-sm:max-w-[90vw]">Simple painting is an app that turns the process of painting more fast and intuitive because of its keyboard and mouse intregration</p>
              </div>

              <div className="flex flex-wrap max-sm:gap-2 text-xl w-full max-sm:max-w-[90vw]">
                <p className="font-semibold">Tools:</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>Typescript</p>
              </div>

              <div className="flex items-center gap-2 w-full">
                <p className="text-xl font-semibold">Code</p>
                <FaGithub className="text-2xl" />
              </div>
            </div>

          </div>
        </section>

        <section className="pb-32 max-md:mt-36 md:mt-64 md:flex md:justify-center">
          <div className="flex max-md:flex-col items-center w-full max-w-[1200px]">
          <form className="w-full rounded-md flex flex-col gap-4">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Contact Form</h2>
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
              className="max-sm:max-w-[90vw] h-[16vh] text-lg outline-none resize-none borderFormFilds bg-transparent mt-4"
              ></textarea>
              <button className="bg-black text-white rounded-md max-w-16 h-8 text-lg mt-4 hover:bg-orange-500 hover:text-black">Send</button>
          </form>

          <div className="w-full max-md:mt-20 flex flex-col max-w-[1200px] md:h-full gap-10 md:items-center">
            <h3 className="text-xl md:text-2xl font-semibold">Quick Contact</h3>
              <div className="flex gap-4 text-3xl">
                <FaGithub/>
                <FaLinkedin/>
              </div>
              <p className="text-lg">
              <span className="font-semibold">Email:</span> Hey@example.com
            </p>
          </div>
          </div>
        </section>

    </main>
    <footer className="h-16 flex justify-center items-center text-xs">
      <p>&copy; 2025 VICTORSOUZA. ALL RIGHT RESERVED</p>
    </footer>
    </>
  )
}

export default App
