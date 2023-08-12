import { useState } from 'react'
import { TbMessages } from 'react-icons/tb';
import { MdGroups } from 'react-icons/md';
import { BsArrowLeftRight } from 'react-icons/bs';
import { BsClockFill } from 'react-icons/bs';
import { FaPuzzlePiece } from 'react-icons/fa';
import { FaRegLightbulb } from 'react-icons/fa';
import { PiCursorFill } from 'react-icons/pi';
import { BsCodeSlash } from 'react-icons/bs';
import { FaServer } from 'react-icons/fa';
import { FaGripHorizontal } from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai';
import { AiOutlineMobile } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';


function App() {
  const [isSoftSkills, updateSoftSkiils] = useState(false);

  const handleSoftSkillsButton = () => {
    updateSoftSkiils(true)
  }

  const handleCodeSkillsButton = () => {
    updateSoftSkiils(false)
  }

  return (
    <div className=" w-full max-w-screen-xl mx-auto relative" >

      <div className='flex flex-col justify-center items-center w-full h-full ' >
        <div className=' flex flex-col justify-start items-center h-80 w-11/12' >
          <div className="flex w-80 h-full mt-10 justify-end items-start " >
            <img src="/hiemojiapple.png" alt="apple hi emoji" className=" h-80 w-80 " />
          </div>
        </div>


        <div className="flex flex-col gap-2 w-11/12 h-full justify-center items-start p-3 mt-6 ">
          <p className="text-black font-medium w-full text-center " > Hello, my name is</p>
          <h1 className='text-blue-700 font-extrabold text-6xl w-full text-center' >VINICIUS NOGUEIRA</h1>
          <p className="text-black font-medium w-full text-center" > Building & maintaining connections with persons and softwares 👨🏻‍💻</p>
        </div>
      </div>

      <div className="flex flex-row h-auto w-full justify-center items-center mt-10 " >
        <div className="sm:flex hidden  w-72 h-full justify-end items-end " >
          <img src="/pcemojiapple.png" alt="pc emoji" className=" h-72 w-72 mb-3 " />
        </div>


        <div className="flex flex-col gap-2 w-8/12 h-full justify-center items-start p-3 pt-16 ">
          <div className="flex items-center pb-1 gap-3 ">
            <h1 className="sm:text-3xl text-xl font-extrabold text-slate-800 font-inter ">About Me</h1>
            <div className=" h-px sm:w-64 w-32 flex-grow max-w-xs bg-blue-100"></div>
          </div>
          <p className="font-light  text-slate-600 w-full text-justify " > Currently transitioning my career to become a Front-end Developer. Proficient in JavaScript, Typescript, React, Redux, Next.js, Node.js, Express, MySql and MongoDB.
            I`m pursuing a software engineering specialisation at UFMG where I am developing skills in software architecture, design patterns, testing, and TDD.
            I'm a self driven problem solver and a good team player with a passion for climbing 🧗, guitar🎸and the Netherlands culture 🇳🇱.
          </p>
        </div>
      </div>


      <div className="px-5 xs:px-10 sm:px-12 md:px-24 flex flex-wrap gap-5 items-center justify-center xl:justify-between mt-20" >
        <div className="flex rounded-full justify-center items-center w-20 h-20 bg-slate-50 p-4  shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-300 transition-all"><img src="/jslogo.png" alt="js logo" className=" w-10 h-10 sm:w-12 sm:h-12 " /></div>
        <div className="flex rounded-full justify-center items-center w-20 h-20 bg-slate-50 p-4  shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-300 transition-all"><img src="/tslogo.png" alt="ts logo" className=" w-10 h-10 sm:w-12 sm:h-12 " /></div>
        <div className="flex rounded-full justify-center items-center w-20 h-20 bg-slate-50 p-4  shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-300 transition-all"><img src="/reactlogo.png" alt="react logo" className=" w-10 h-10 sm:w-12 sm:h-12 " /></div>
        <div className="flex rounded-full justify-center items-center w-20 h-20 bg-slate-50 p-4  shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-300 transition-all"><img src="/reduxlogo.png" alt="react logo" className=" w-10 h-10 sm:w-12 sm:h-12 " /></div>
        <div className="flex rounded-full justify-center items-center w-20 h-20 bg-slate-50 p-4  shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-300 transition-all"><img src="/tailwindlogo.svg" alt="tailwind logo" className=" w-10 h-10 sm:w-12 sm:h-12 " /></div>
        <div className="flex rounded-full justify-center items-center w-20 h-20 bg-slate-50 p-4  shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-300 transition-all"><img src="/nodelogo.png" alt="nodejs logo" className=" w-10 h-10 sm:w-12 sm:h-12 " /></div>
        <div className="flex rounded-full justify-center items-center w-20 h-20 bg-slate-50 p-4  shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-300 transition-all"><img src="/expressjslogo.png" alt="express logo" className=" w-10 h-10 sm:w-12 sm:h-12 " /></div>
        <div className="flex rounded-full justify-center items-center w-20 h-20 bg-slate-50 p-4  shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-300 transition-all"><img src="/mysqllogo.svg" alt="mysql logo" className=" w-10 h-10 sm:w-12 sm:h-12 " /></div>
        <div className="flex rounded-full justify-center items-center w-20 h-20 bg-slate-50 p-4  shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-300 transition-all"><img src="/mongologo.png" alt="mongo logo" className=" w-10 h-10 sm:w-12 sm:h-12 " /></div>
        <div className="flex rounded-full justify-center items-center w-20 h-20 bg-slate-50 p-4  shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-300 transition-all"><img src="/githublogo.png" alt="github logo" className=" w-10 h-10 sm:w-12 sm:h-12 " /></div>
      </div>

      <div className='flex flex-col justify-center items-center' >
        <div className="flex flex-row mt-20 mb-6 gap-4" >
          <button onClick={handleCodeSkillsButton} className="flex items-center gap-2 border border-blue-300 text-sm sm:text-base px-6 py-2.5 sm:px-10 sm:py-4 font-roboto rounded hover:shadow-lg hover:shadow-blue-200 transition-all hover:-translate-y-1" >Coding Skills</button>
          <button onClick={handleSoftSkillsButton} className="flex items-center gap-2 border border-blue-300 text-sm sm:text-base px-6 py-2.5 sm:px-10 sm:py-4 font-roboto rounded hover:shadow-lg hover:shadow-blue-200 transition-all hover:-translate-y-1" >Soft Skills</button>
        </div>


        <div className="grid grid-cols-2 mt-5 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 lg:w-[850px]" >
          {isSoftSkills ? (<> <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-blue-700 text-white  hover:border-black cursor-pointer transition-all duration-300 ease-in-out" >
            <TbMessages className='cursor-pointer sm:text-5xl text-3xl ' />
            <div className="md:absolute bottom-6 left-0">
              <p className=" text-base font-bold sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Effective Communication</p>
              <p className="hidden md:block text-sm font-raleway font-medium md:px-6 md:line-clamp-none line-clamp-2">Effective exchange of information and ideas</p>
            </div>
          </div>

            <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-blue-700 text-white  hover:border-black cursor-pointer transition-all duration-300 ease-in-out" >
              <MdGroups className='cursor-pointer sm:text-5xl text-3xl ' />
              <div className="md:absolute bottom-6 left-0">
                <p className=" text-base font-bold sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Smart Communication</p>
                <p className="hidden md:block text-sm font-raleway font-medium md:px-6 md:line-clamp-none line-clamp-2">Working effectively in a team environment</p>
              </div>
            </div>

            <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-blue-700 text-white  hover:border-black cursor-pointer transition-all duration-300 ease-in-out" >
              <BsArrowLeftRight className='cursor-pointer sm:text-5xl text-3xl ' />
              <div className="md:absolute bottom-6 left-0">
                <p className=" text-base font-bold sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Easy Adaptability</p>
                <p className="hidden md:block text-sm font-raleway font-medium md:px-6 md:line-clamp-none line-clamp-2">Flexibility to embrace change and new technologies</p>
              </div>
            </div>


            <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-blue-700 text-white  hover:border-black cursor-pointer transition-all duration-300 ease-in-out" >
              <BsClockFill className='cursor-pointer sm:text-5xl text-2xl ' />
              <div className="md:absolute bottom-6 left-0">
                <p className=" text-base font-bold sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Time Management</p>
                <p className="hidden md:block text-sm font-raleway font-medium md:px-6 md:line-clamp-none line-clamp-2">Efficiently organizing and prioritizing tasks</p>
              </div>
            </div>


            <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-blue-700 text-white  hover:border-black cursor-pointer transition-all duration-300 ease-in-out" >
              <FaPuzzlePiece className='cursor-pointer sm:text-5xl text-3xl' />
              <div className="md:absolute bottom-6 left-0">
                <p className=" text-base font-bold sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Problem Solving</p>
                <p className="hidden md:block text-sm font-raleway font-medium md:px-6 md:line-clamp-none line-clamp-2">Analytical thinking to resolve challenges</p>
              </div>
            </div>


            <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-blue-700 text-white  hover:border-black cursor-pointer transition-all duration-300 ease-in-out" >
              <FaRegLightbulb className='cursor-pointer sm:text-5xl text-3xl' />
              <div className="md:absolute bottom-6 left-0">
                <p className=" text-base font-bold sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Creativity & Innovations</p>
                <p className="hidden md:block text-sm font-raleway font-medium md:px-6 md:line-clamp-none line-clamp-2">Generating innovative solutions and ideas</p>
              </div>
            </div> </>) : (<>

              <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-blue-700 text-white  hover:border-black cursor-pointer transition-all duration-300 ease-in-out" >
                <PiCursorFill className='cursor-pointer sm:text-5xl text-3xl ' />
                <div className="md:absolute bottom-6 left-0">
                  <p className=" text-base font-bold sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Frontend Development</p>
                  <p className="hidden md:block text-sm font-raleway font-medium md:px-6 md:line-clamp-none line-clamp-2">I bring ideas to life in the browser, coding from scratch.</p>
                </div>
              </div>

              <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-blue-700 text-white  hover:border-black cursor-pointer transition-all duration-300 ease-in-out" >
                <BsCodeSlash className='cursor-pointer sm:text-5xl text-3xl ' />
                <div className="md:absolute bottom-6 left-0">
                  <p className=" text-base font-bold sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Backend Development</p>
                  <p className="hidden md:block text-sm font-raleway font-medium md:px-6 md:line-clamp-none line-clamp-2">Building powerful server-side systems, coding from scratch.</p>
                </div>
              </div>

              <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-blue-700 text-white  hover:border-black cursor-pointer transition-all duration-300 ease-in-out" >
                <FaServer className='cursor-pointer sm:text-5xl text-3xl ' />
                <div className="md:absolute bottom-6 left-0">
                  <p className=" text-base font-bold sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Hosting & Deployments</p>
                  <p className="hidden md:block text-sm font-raleway font-medium md:px-6 md:line-clamp-none line-clamp-2">Optimum deployments & reliable hosting for web apps</p>
                </div>
              </div>


              <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-blue-700 text-white  hover:border-black cursor-pointer transition-all duration-300 ease-in-out" >
                <FaGripHorizontal className='cursor-pointer sm:text-5xl text-2xl ' />
                <div className="md:absolute bottom-6 left-0">
                  <p className=" text-base font-bold sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Web Applications</p>
                  <p className="hidden md:block text-sm font-raleway font-medium md:px-6 md:line-clamp-none line-clamp-2">Creating dynamic and intuitive web experiences.</p>
                </div>
              </div>


              <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-blue-700 text-white  hover:border-black cursor-pointer transition-all duration-300 ease-in-out" >
                <AiFillApi className='cursor-pointer sm:text-5xl text-3xl' />
                <div className="md:absolute bottom-6 left-0">
                  <p className=" text-base font-bold sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">API Development</p>
                  <p className="hidden md:block text-sm font-raleway font-medium md:px-6 md:line-clamp-none line-clamp-2">Crafting robust APIs, turning ideas into functional solutions.</p>
                </div>
              </div>


              <div className="relative sm:flex flex-shrink-0 md:block flex-row items-center rounded-xl md:rounded-2xl p-6 space-x-0 sm:space-x-6 md:space-x-0 w-full h-full md:h-[250px] md:w-[250px] border bg-blue-700 text-white  hover:border-black cursor-pointer transition-all duration-300 ease-in-out" >
                <AiOutlineMobile className='cursor-pointer sm:text-5xl text-3xl' />
                <div className="md:absolute bottom-6 left-0">
                  <p className=" text-base font-bold sm:text-xl md:text-lg xl:text-xl font-raleway sm:font-medium pr-2 md:px-6 mt-2 md:mb-2">Mobile Applications</p>
                  <p className="hidden md:block text-sm font-raleway font-medium md:px-6 md:line-clamp-none line-clamp-2">Developing mobile apps with seamless user experiences.</p>
                </div>
              </div> </>)}
        </div>
      </div>

      <div className=' px-5 xs:px-10 sm:px-12 md:px-24 py-24'>
        <div className="flex items-center gap-3 pb-10 pt-2.5 ">
          <h1 className="text-3xl font-extrabold text-slate-800 font-inter ">Something that I build</h1>
          <div className=" h-px sm:w-64 w-32 flex-grow max-w-xs bg-blue-100"></div>
        </div>


        <div>


          <div className='flex flex-col md:flex-row items-center md:justify-end md:gap-3 mb-20 relative shadow-lg border md:border-none md:shadow-none rounded overflow-hidden md:overflow-visible' style={{ opacity: 1, transform: 'none' }} >

            <div className='w-full h-full md:w-2/3 md:absolute top-0 md:top-auto left-0 flex items-start p-4 md:p-0 bg-slate-50 md:bg-transparent border-b md:border-none' >
              <a href='https://25-now.vercel.app/' className='h-full' >
                <img className='w-full h-full md:h-auto object-cover md:shadow-xl md:rounded-lg' alt='25 now app' src='/25nowapp.png' />
              </a>
            </div>

            <div className='w-full md:w-2/3 lg:w-1/2 z-10 bg-slate-50   md:bg-transparent py-5 md:mt-5' >
              <h4 className='font-roboto text-xs pb-1 text-blue-500 px-4 md:text-end'>Featured Project</h4>
              <a href='https://25-now.vercel.app/' className='text-2xl px-4 text-slate-700 font-bold flex md:justify-end'>25NOW</a>
              <div className='md:bg-blue-500 md:my-5 text-slate-700 md:text-white p-4 rounded md:shadow-lg' >
                <p className='pb-4'>This React application is a dynamic platform that utilizes the TMDB API to fetch and display detailed information about movies and TV shows. This application provides users with an engaging interface to explore and discover their favorite films and television series. Users can search for specific movies or TV shows using the search filters, enabling them to find content based on criteria such as title, release date and ratings.</p>
                <p className='pb-4'>One of the standout features of the application is the ability to play trailers. Users can watch trailers of movies and TV shows directly within the application.</p>
                <div className='pb-4'>
                  <h3 className='text-lg font-semibold'>Demo Accounts</h3>
                  <ul>
                    <li>
                      <span className='font-mediun'>Email: test2@test.com</span>
                      <span className='font-mediun'>Pass: test123</span>
                    </li>
                    <li>
                      <span className='font-mediun'>Email: test3@test.com</span>
                      <span className='font-mediun'>Pass: test123</span>
                    </li>
                  </ul>
                </div>
                <p>
                  <span className=' font-extrabold text-lg md:text-yellow-300 text-blue-500'>Note:</span>
                  The Back-End of this application is hosted on a free server, it takes about 20 seconds to respond to initial request.
                </p>
              </div>
              <div className='flex flex-wrap md:justify-end text-xs rounded text-slate-600 gap-x-8 gap-y-4 font-roboto px-4' >
                <span>React</span>
                <span>Redux</span>
                <span>TailwindCSS</span>
                <span>React Dom</span>
                <span>Node</span>
                <span>Express</span>
                <span>Mongodb</span>
              </div>
              <div className='flex px-4 mt-6 gap-5 items-center md:justify-end ' >
                <a className='bg-slate-50 p-2 rounded-full hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all border-slate-300 border' href='https://25-now.vercel.app/' >
                  < FiExternalLink className=' text-xl ' />
                </a>
              </div>

            </div>
          </div>


          <div className='flex flex-col-reverse md:flex-row items-center md:gap-3 mb-20 relative shadow-lg border md:border-none md:shadow-none rounded overflow-hidden md:overflow-visible' style={{ opacity: 1, transform: 'none' }} >
            <div className='w-full md:w-2/3 lg:w-1/2 z-10 bg-slate-50  md:bg-transparent py-5 md:mt-5' >
              <h4 className='font-roboto text-xs pb-1 text-blue-500 px-4'>Featured Project</h4>
              <a href='https://dutchway.vercel.app/' className='text-2xl px-4 text-slate-700 font-bold'>Dutch Way</a>
              <div className='md:bg-blue-500 md:my-5 text-slate-700 md:text-white p-4 rounded md:shadow-lg'>
                <p className='pb-4'>This application provides a feature-rich communication platform where users can register, invite friends, and engage in text chat, video chat, and group video chat. It combines a user-friendly interface, Real-time communication technologies, and robust backend functionality to create an immersive and interactive experience.</p>
                <div className='pb-4'>
                  <h3 className='text-lg font-semibold'>Demo Accounts</h3>
                  <ul>
                    <li>
                      <span className='font-mediun'>Email: test2@test.com</span>
                      <span className='font-mediun'>Pass: test123</span>
                    </li>
                    <li>
                      <span className='font-mediun'>Email: test3@test.com</span>
                      <span className='font-mediun'>Pass: test123</span>
                    </li>
                  </ul>
                </div>
                <p>
                  <span className=' font-extrabold text-lg md:text-yellow-300 text-blue-500'>Note:</span>
                  The Back-End of this application is hosted on a free server, it takes about 20 seconds to respond to initial request.
                </p>
              </div>
              <div className='flex flex-wrap md:justify-end text-xs rounded text-slate-600 gap-x-8 gap-y-4 font-roboto px-4' >
                <span>React</span>
                <span>Redux</span>
                <span>TailwindCSS</span>
                <span>React Dom</span>
                <span>Node</span>
                <span>Express</span>
                <span>Mongodb</span>
              </div>
              <div className='flex px-4 mt-6 gap-5 items-center md:justify-end ' >
                <a className='bg-slate-50 p-2 rounded-full hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all border-slate-300 border' href='https://25-now.vercel.app/' >
                  < FiExternalLink className=' text-xl ' />
                </a>
              </div>
            </div>
            <div className='flex w-full h-full md:w-2/3 md:absolute top-0 md:top-auto left-0 md:left-auto md:right-0 items-start p-4 md:p-0 bg-slate-50 border-b md:border-none md:bg-transparent'>
              <a href='https://dutchway.vercel.app/' className='h-full'>
                <img className='w-full h-full md:h-auto object-cover md:shadow-xl md:rounded-lg' alt='dutch way logo' src='/dutchway.png' />
              </a>
            </div>

          </div>

        </div>

      </div>


      <div className='px-5 xs:px-10 ms:px-12 md:px-24 pt-24 pb-48' style={{ opacity: 1, transform: 'none' }} >
        <div className='flex flex-col justify-center items-center' >
          <h2 className='text-5xl font-extrabold mb-5'>Get In Touch</h2>
          <p className='text-center lg:w-1/2 mb-8 text-slate-700'>I'm currently looking for opportunities. Whether its a Full-Time Job or a Freelance work. Send me a message, I'll try to get back to you as soon as possible.</p>
        </div>
        <div className='flex gap-y-4 gap-x-8 flex-wrap justify-center' >
          <a href='mailto:vns5218@icloud.com' className='flex items-center gap-2 border border-blue-300 text-sm sm:text-base px-6 py-2.5 sm:px-10 sm:py-4 font-roboto rounded hover:shadow-lg hover:shadow-blue-200 transition-all hover:-translate-y-1' >
            < GrMail className='w-6 h-6' />
            Say Hello
          </a>
          <a href='https://wa.me/+33788614862' className='flex items-center gap-2 border border-blue-300 text-sm sm:text-base px-6 py-2.5 sm:px-10 sm:py-4 font-roboto rounded hover:shadow-lg hover:shadow-blue-200 transition-all hover:-translate-y-1' >
            < FaWhatsapp className='w-6 h-6' />
            Say Hello
          </a>

        </div>
      </div>


    </div>
  );
}

export default App;
