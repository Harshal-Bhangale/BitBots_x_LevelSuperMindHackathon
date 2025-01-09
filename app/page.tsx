
// 'use client'

// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ArrowRightIcon, BeakerIcon, CodeBracketIcon, GlobeAltIcon, MagnifyingGlassIcon, ChatBubbleBottomCenterTextIcon, CpuChipIcon } from '@heroicons/react/24/outline'
// import Link from 'next/link'

// const GlowingCard = ({ children, className = "" }) => (
//   <div className={`relative ${className}`}>
//     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
//     <div className="relative bg-black bg-opacity-50 rounded-lg p-6 ring-1 ring-gray-900/5 shadow-lg">
//       {children}
//     </div>
//   </div>
// )

// const ShimmeringButton = ({ children, onClick, className = "" }) => (
//   <button
//     onClick={onClick}
//     className={`relative px-6 py-3 font-bold text-white rounded-full group ${className}`}
//   >
//     <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
//     <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
//     <span className="relative">{children}</span>
//   </button>
// )

// function EnhancedLandingPage() {
//   const [currentFeature, setCurrentFeature] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentFeature((prev) => (prev + 1) % 3)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black opacity-50 z-0"></div>

//       {/* Hero Section */}
//       <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//             Social Media Performance <br />
//             Using Gen AI
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 max-w-2xl">
//             {/* Unleash the power of CrewAI Agents and Langflow to transform your research process. */}
//           </p>
//           <Link href="/chat">
//             <ShimmeringButton className="text-lg">
//               Chatbot Analyzer
//             </ShimmeringButton>
//           </Link>
//         </motion.div>
//         <motion.div
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//         >
//           {/* <ArrowRightIcon className="h-8 w-8 rotate-90" /> */}
//         </motion.div>
//       </section>





//       {/* Features Showcase Section */}
//       <section className="relative z-10 py-20 px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Experience the Future</h2>
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <div>
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentFeature}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: 20 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <GlowingCard>
//                     <h3 className="text-2xl font-semibold mb-4">
//                       {["Smart Search Algorithms", "Real-time Collaboration", "Interactive Visualizations"][currentFeature]}
//                     </h3>
//                     <p>
//                       {[
//                         "Our AI utilizes advanced search algorithms to find the most relevant and up-to-date information for your research.",
//                         "Collaborate with AI agents and team members in real-time, streamlining your research process like never before.",
//                         "Transform complex data into stunning, interactive visualizations that bring your research to life."
//                       ][currentFeature]}
//                     </p>
//                   </GlowingCard>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//             <div className="relative h-64 md:h-96">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-xl opacity-50"></div>
//               <div className="absolute inset-0 rounded-lg overflow-hidden">
//                 <div className="w-full h-full bg-black flex items-center justify-center">
//                   <p className="text-2xl font-bold text-center">AI Research Assistant Demo</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>







//       {/* Footer */}
//       <footer className="relative z-10 py-8 px-4 border-t border-gray-800">
//         <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">AI Research Assistant</h3>
//           </div>
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <ul className="flex justify-center space-x-4">
//               <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
//               <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
//               <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
//               <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3 text-center md:text-right">
//             <p>&copy; 2023 AI Research Assistant. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default function Home() {
//   return <EnhancedLandingPage />
// }


//  v1


//  v2


// 'use client'

// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ArrowRightIcon, BeakerIcon, CodeBracketIcon, GlobeAltIcon, MagnifyingGlassIcon, ChatBubbleBottomCenterTextIcon, CpuChipIcon } from '@heroicons/react/24/outline'
// import Link from 'next/link'

// const GlowingCard = ({ children, className = "" }) => (
//   <div className={`relative ${className}`}>
//     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
//     <div className="relative bg-black bg-opacity-50 rounded-lg p-6 ring-1 ring-gray-900/5 shadow-lg">
//       {children}
//     </div>
//   </div>
// )

// const ShimmeringButton = ({ children, onClick, className = "" }) => (
//   <button
//     onClick={onClick}
//     className={`relative px-6 py-3 font-bold text-white rounded-full group ${className}`}
//   >
//     <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
//     <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
//     <span className="relative">{children}</span>
//   </button>
// )

// function EnhancedLandingPage() {
//   const [currentFeature, setCurrentFeature] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentFeature((prev) => (prev + 1) % 3)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black opacity-50 z-0"></div>

//       {/* Header with Bit Bots and GitHub button */}
//       <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
//         <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 ml-6">
//           Bit Bots
//         </div>
//         <button
//           onClick={() => window.open('https://www.google.com', '_blank')}
//           className="mr-6"
//         >
//           <ShimmeringButton>
//             GitHub
//           </ShimmeringButton>
//         </button>
//       </header>


//       {/* Hero Section */}
//       <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//             Social Media Performance <br />
//             Using Gen AI
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 max-w-2xl">
//             {/* Unleash the power of CrewAI Agents and Langflow to transform your research process. */}
//           </p>
//           <Link href="/chat">
//             <ShimmeringButton className="text-lg">
//               Chatbot Analyzer
//             </ShimmeringButton>
//           </Link>
//         </motion.div>
//       </section>

//       {/* How to Work Section */}
//       <section className="py-20 px-4 text-center bg-black">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//           How to Work?
//         </h2>
//         <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
//           To get started with the Chatbot Analyzer, simply click the button above.
//         </p>

//         <div className="mb-8">
//           <h3 className="text-2xl font-semibold mb-4">Watch the Tutorial</h3>
//           <div className="flex justify-center">
//             <iframe
//               width="900"
//               height="415"
//               src="https://www.youtube.com/embed/KWsQoU1kQB0?autoplay=1&mute=1&controls=1&enablejsapi=1"  // Added 'enablejsapi' for improved control interaction
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="cursor-pointer"  // Ensures the cursor is a pointer over the video
//               style={{ pointerEvents: 'auto' }}  // Explicitly allow interaction with the iframe
//             ></iframe>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative z-10 py-8 px-4 border-t border-gray-800">
//         <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Bit Bots</h3>
//           </div>
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <ul className="flex justify-center space-x-4">
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3 text-center md:text-right">
//             <p>&copy; 2025 Bit Bots. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default function Home() {
//   return <EnhancedLandingPage />
// }



//  v3

// 'use client'

// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Code, MessageSquare } from 'lucide-react'

// const ProfessionalButton = ({ children, onClick, className = "", primary = false }) => (
//   <button
//     onClick={onClick}
//     className={`
//       relative overflow-hidden px-6 py-3 rounded-lg font-semibold
//       transition-all duration-300 ease-in-out
//       ${primary ?
//         'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl' :
//         'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white shadow-md hover:shadow-lg'
//       }
//       transform hover:-translate-y-0.5
//       ${className}
//     `}
//   >
//     <span className="relative z-10 flex items-center justify-center gap-2">
//       {children}
//     </span>
//     <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
//   </button>
// )

// const GlowingCard = ({ children, className = "" }) => (
//   <div className={`relative group ${className}`}>
//     <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
//     <div className="relative bg-gray-900 rounded-lg p-6 ring-1 ring-gray-800 shadow-xl">
//       {children}
//     </div>
//   </div>
// )

// function EnhancedLandingPage() {
//   const [currentFeature, setCurrentFeature] = useState(0)
//   const [videoLoaded, setVideoLoaded] = useState(false)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentFeature((prev) => (prev + 1) % 3)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   const navigateToChat = () => {
//     window.location.href = '/chat'
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-black opacity-50 z-0"></div>

//       {/* Header */}
//       <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 bg-gray-900/80 backdrop-blur-sm">
//         <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 ml-6">
//           Bit Bots
//         </div>
//         <div className="mr-6 flex gap-4 items-center">
//           <ProfessionalButton
//             onClick={() => window.open('https://www.google.com', '_blank')}
//           >
//             <Code className="w-5 h-5" />
//             GitHub
//           </ProfessionalButton>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//             Social Media Performance Analysis <br /> Gen AI
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-gray-300">
//             Harness the power of AI to analyze and optimize your social media presence
//           </p>
//           <ProfessionalButton onClick={navigateToChat} primary className="text-lg">
//             <MessageSquare className="w-6 h-6" />
//             Launch Analyzer
//           </ProfessionalButton>
//         </motion.div>
//       </section>

//       {/* How to Work Section */}
//       <section className="relative z-10 py-20 px-4 text-center bg-gray-900/80">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//           How It Works
//         </h2>
//         <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
//           Our AI-powered analyzer provides deep insights into your social media performance
//         </p>

//         <div className="mb-12">
//           <h3 className="text-2xl font-semibold mb-6 text-gray-100">Watch the Tutorial</h3>
//           <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
//             <div className="aspect-w-16 aspect-h-9">
//               <iframe
//                 src="https://www.youtube.com/embed/KWsQoU1kQB0"
//                 title="Tutorial Video"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="w-full h-full"
//                 onLoad={() => setVideoLoaded(true)}
//               />
//             </div>
//             {!videoLoaded && (
//               <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
//                 <span className="text-gray-400">Loading video...</span>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative z-10 py-8 px-4 border-t border-gray-800 bg-gray-900/80">
//         <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Bit Bots</h3>
//           </div>
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <ul className="flex justify-center space-x-4">
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3 text-center md:text-right text-gray-400">
//             <p>&copy; 2025 Bit Bots. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default function Home() {
//   return <EnhancedLandingPage />
// }

// v6 


/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, MessageSquare } from 'lucide-react'

interface ProfessionalButtonProps {
  children: React.ReactNode
  onClick: () => void
  className?: string
  primary?: boolean
}

const ProfessionalButton: React.FC<ProfessionalButtonProps> = ({
  children,
  onClick,
  className = "",
  primary = false
}) => (
  <button
    onClick={onClick}
    className={`
      relative overflow-hidden px-6 py-3 rounded-lg font-semibold
      transition-all duration-300 ease-in-out
      ${primary ?
        'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl' :
        'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white shadow-md hover:shadow-lg'
      }
      transform hover:-translate-y-0.5
      ${className}
    `}
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
    </span>
    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
  </button>
)

interface GlowingCardProps {
  children: React.ReactNode
  className?: string
}

const GlowingCard: React.FC<GlowingCardProps> = ({ children, className = "" }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative bg-gray-900 rounded-lg p-6 ring-1 ring-gray-800 shadow-xl">
      {children}
    </div>
  </div>
)

function EnhancedLandingPage() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const navigateToChat = () => {
    window.location.href = '/chat'
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-black opacity-50 z-0"></div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 bg-gray-900/90 backdrop-blur-xl shadow-lg relative">
        <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 ml-6">
          Bit Bots
        </div>
        <div className="mr-6 flex gap-6 items-center relative z-20">
          <ProfessionalButton
            onClick={() => window.open('https://github.com/Harshal-Bhangale/BitBots_x_LevelSuperMindHackathon', '_blank')}
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            <Code className="w-5 h-5 mr-2" />
            GitHub
          </ProfessionalButton>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Social Media Performance Analyzer
          </h1>
          <p className="text-3xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 leading-tight py-2 px-4">
            Using Gen AI
          </p>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Harness the power of AI to analyze and optimize your social media presence
          </p>
          <ProfessionalButton onClick={navigateToChat} primary className="text-lg">
            <MessageSquare className="w-6 h-6" />
            Launch Analyzer
          </ProfessionalButton>
        </motion.div>
      </section>


      {/* How to Work Section */}
      <section className="relative z-10 py-20 px-4 text-center bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-black/90">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
          How It Works
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
          Our AI-powered analyzer provides deep insights into your social media performance, helping you optimize and grow.
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-100">Watch the Tutorial</h3>
          <div className="relative max-w-7xl mx-auto rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
            <div className="w-[900px] h-[415px] mx-auto">
              <iframe
                width="900"
                height="415"
                src="https://www.youtube.com/embed/KWsQoU1kQB0"
                title="Tutorial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
                onLoad={() => setVideoLoaded(true)}
              />
            </div>
            {!videoLoaded && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center rounded-lg">
                <span className="text-gray-400 text-lg">Loading video...</span>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* <section className="py-20 px-4 text-center bg-black">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            How to Work?
          </h2>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
            To get started with the Chatbot Analyzer, simply click the button above.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Watch the Tutorial</h3>
            <div className="flex justify-center">
              <iframe
                width="900"
                height="415"
                src="https://www.youtube.com/embed/KWsQoU1kQB0?autoplay=1&mute=1&controls=1&enablejsapi=1"  // Added 'enablejsapi' for improved control interaction
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="cursor-pointer"  // Ensures the cursor is a pointer over the video
                style={{ pointerEvents: 'auto' }}  // Explicitly allow interaction with the iframe
              ></iframe>
            </div>
          </div>
        </section> */}


      {/* Team Section */}
      <section className="relative z-10 py-28 px-6 text-center bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-black/90">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
          Meet Our Team
        </h2>
        <p className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto text-gray-300">
          Our team is passionate about using AI to enhance your social media performance. Meet the minds behind Bit Bots.
        </p>

        <div className="flex flex-wrap justify-center gap-16">
          {/* Team Member 1 */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg text-center transform transition-all duration-300 hover:scale-105 w-full sm:w-80 md:w-96">
            <img src="/assests/Profile Pic.jpg" alt="Team Member 1" className="w-40 h-40 mx-auto rounded-full mb-6" />
            <h3 className="text-2xl font-semibold text-white">Harshal Bhangale</h3>
            <p className="text-gray-400 text-lg">Backend Developer + AI Developer</p>
            <div className="flex justify-center gap-6 mt-6">
              <a href="https://github.com/Harshal-Bhangale" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/harshal-bhangale-5b803623a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg text-center transform transition-all duration-300 hover:scale-105 w-full sm:w-80 md:w-96">
            <img src="/assests/Profile Pic.jpg" alt="Team Member 2" className="w-40 h-40 mx-auto rounded-full mb-6" />
            <h3 className="text-2xl font-semibold text-white">Vaibhav Sathe</h3>
            <p className="text-gray-400 text-lg">Web Developer</p>
            <div className="flex justify-center gap-6 mt-6">
              <a href="https://github.com/ryucraftz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/vaibhav-sathe-1920a9230/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-gray-800 bg-gray-900/80">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Bit Bots</h3>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <ul className="flex justify-center space-x-4">
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right text-gray-400">
            <p>&copy; 2025 Bit Bots. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function Home() {
  return <EnhancedLandingPage />
}