// 'use client'

// import React, { useState, useRef, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { SendIcon, BotIcon, UserIcon } from 'lucide-react'

// interface Message {
//   id: number;
//   text: string;
//   sender: 'user' | 'ai';
//   timestamp: Date;
// }

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

// function ChatPage() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   const handleSendMessage = async () => {
//     if (inputMessage.trim() === '') return;

//     const newMessage: Message = {
//       id: Date.now(),
//       text: inputMessage,
//       sender: 'user',
//       timestamp: new Date(),
//     };

//     setMessages([...messages, newMessage]);
//     setInputMessage('');
//     setIsTyping(true);

//     try {
//       const response = await fetch('/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: inputMessage }),
//       });

//       const data = await response.json();

//       // Extract the AI's response from the nested structure
//       const aiResponseText = data.outputs[0].outputs[0].outputs.message.message.text;

//       const aiResponse: Message = {
//         id: Date.now() + 1,
//         text: aiResponseText || "Sorry, I couldn't process your request.",
//         sender: 'ai',
//         timestamp: new Date(),
//       };

//       setMessages(prevMessages => [...prevMessages, aiResponse]);
//     } catch (error) {
//       console.error('Error:', error);
//       const errorMessage: Message = {
//         id: Date.now() + 1,
//         text: "Sorry, there was an error processing your request.",
//         sender: 'ai',
//         timestamp: new Date(),
//       };
//       setMessages(prevMessages => [...prevMessages, errorMessage]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-black text-white">
//       <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black opacity-50 z-0"></div>

//       <header className="relative z-10 p-4 border-b border-gray-800">
//         <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">AI Research Assistant Chat</h1>
//       </header>

//       <main className="flex-grow relative z-10 p-4 overflow-hidden">
//         <GlowingCard className="h-full flex flex-col">
//           <div className="flex-grow overflow-y-auto mb-4 space-y-4">
//             {messages.map((message) => (
//               <motion.div
//                 key={message.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div className={`max-w-3/4 p-3 rounded-lg ${message.sender === 'user' ? 'bg-purple-700' : 'bg-blue-700'}`}>
//                   <div className="flex items-center mb-1">
//                     {message.sender === 'user' ? (
//                       <UserIcon className="w-4 h-4 mr-2" />
//                     ) : (
//                       <BotIcon className="w-4 h-4 mr-2" />
//                     )}
//                     <span className="text-xs text-gray-300">
//                       {message.timestamp.toLocaleTimeString()}
//                     </span>
//                   </div>
//                   <p>{message.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//             {isTyping && (
//               <div className="flex justify-start">
//                 <div className="bg-blue-700 p-3 rounded-lg">
//                   <p>AI is typing...</p>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>
//           <div className="flex items-center space-x-2">
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//               placeholder="Type your message here..."
//               className="flex-grow p-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <ShimmeringButton onClick={handleSendMessage} className="p-2 rounded-full">
//               <SendIcon className="w-6 h-6" />
//             </ShimmeringButton>
//           </div>
//         </GlowingCard>
//       </main>

//       <footer className="relative z-10 p-4 border-t border-gray-800 text-center text-sm text-gray-500">
//         © 2025 AI Research Assistant. All rights reserved.
//       </footer>
//     </div>
//   )
// }

// export default function Chat() {
//   return <ChatPage />
// }




// v1

// "use client"

// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { SendIcon, BotIcon, UserIcon } from 'lucide-react';

// interface Message {
//   id: number;
//   text: string;
//   sender: 'user' | 'ai';
//   timestamp: Date;
// }

// const GlowingCard = ({ children, className = "" }) => (
//   <div className={`relative ${className}`}>
//     <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-75 transition duration-1000"></div>
//     <div className="relative bg-gray-900 bg-opacity-70 rounded-lg p-6 ring-1 ring-gray-800 shadow-xl">
//       {children}
//     </div>
//   </div>
// );

// const ShimmeringButton = ({ children, onClick, className = "" }) => (
//   <button
//     onClick={onClick}
//     className={`relative px-4 py-2 font-bold text-white rounded-lg group ${className}`}
//   >
//     <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-gradient-to-r from-cyan-600 to-purple-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>
//     <span className="relative z-10 mix-blend-screen">{children}</span>
//   </button>
// );

// function ChatPage() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   const handleSendMessage = async () => {
//     if (inputMessage.trim() === '') return;

//     const newMessage: Message = {
//       id: Date.now(),
//       text: inputMessage,
//       sender: 'user',
//       timestamp: new Date(),
//     };

//     setMessages([...messages, newMessage]);
//     setInputMessage('');
//     setIsTyping(true);

//     try {
//       const response = await fetch('/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: inputMessage }),
//       });

//       const data = await response.json();

//       const aiResponseText = data.outputs[0].outputs[0].outputs.message.message.text;

//       const aiResponse: Message = {
//         id: Date.now() + 1,
//         text: aiResponseText || "Sorry, I couldn't process your request.",
//         sender: 'ai',
//         timestamp: new Date(),
//       };

//       setMessages(prevMessages => [...prevMessages, aiResponse]);
//     } catch (error) {
//       console.error('Error:', error);
//       const errorMessage: Message = {
//         id: Date.now() + 1,
//         text: "Sorry, there was an error processing your request.",
//         sender: 'ai',
//         timestamp: new Date(),
//       };
//       setMessages(prevMessages => [...prevMessages, errorMessage]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-950 text-white">
//       <div className="fixed inset-0 bg-gradient-to-r from-gray-900 via-gray-950 to-black opacity-90 z-0"></div>

//       <header className="relative z-10 p-4 border-b border-gray-800">
//         <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
//           ChatGPT-Style AI Chatbot
//         </h1>
//       </header>

//       <main className="flex-grow relative z-10 p-4 overflow-hidden">
//         <GlowingCard className="h-full flex flex-col">
//           <div className="flex-grow overflow-y-auto mb-4 space-y-4">
//             {messages.map((message) => (
//               <motion.div
//                 key={message.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div className={`max-w-3/4 p-4 rounded-lg shadow-md ${message.sender === 'user' ? 'bg-gradient-to-r from-purple-700 to-indigo-700' : 'bg-gradient-to-r from-cyan-600 to-blue-700'}`}>
//                   <div className="flex items-center mb-1">
//                     {message.sender === 'user' ? (
//                       <UserIcon className="w-4 h-4 mr-2 text-white" />
//                     ) : (
//                       <BotIcon className="w-4 h-4 mr-2 text-white" />
//                     )}
//                     <span className="text-xs text-gray-400">
//                       {message.timestamp.toLocaleTimeString()}
//                     </span>
//                   </div>
//                   <p className="text-white">{message.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//             {isTyping && (
//               <div className="flex justify-start">
//                 <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-3 rounded-lg">
//                   <p>AI is typing...</p>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>
//           <div className="flex items-center space-x-2">
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//               placeholder="Type your message here..."
//               className="flex-grow p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//             <ShimmeringButton onClick={handleSendMessage} className="p-2 rounded-lg">
//               <SendIcon className="w-6 h-6 text-white" />
//             </ShimmeringButton>
//           </div>
//         </GlowingCard>
//       </main>

//       <footer className="relative z-10 p-4 border-t border-gray-800 text-center text-sm text-gray-400">
//         © 2025 ChatGPT-Style AI Chatbot. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default function Chat() {
//   return <ChatPage />;
// }


// v2

// "use client"

// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { SendIcon, BotIcon, UserIcon } from 'lucide-react';

// interface Message {
//   id: number;
//   text: string;
//   sender: 'user' | 'ai';
//   timestamp: Date;
// }

// const GlowingCard = ({ children, className = "" }) => (
//   <div className={`relative ${className}`}>
//     <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-75 transition duration-1000"></div>
//     <div className="relative bg-gray-900 bg-opacity-70 rounded-lg p-6 ring-1 ring-gray-800 shadow-xl">
//       {children}
//     </div>
//   </div>
// );

// const ShimmeringButton = ({ children, onClick, className = "" }) => (
//   <button
//     onClick={onClick}
//     className={`relative px-4 py-2 font-bold text-white rounded-lg group ${className}`}
//   >
//     <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-gradient-to-r from-cyan-600 to-purple-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>
//     <span className="relative z-10 mix-blend-screen">{children}</span>
//   </button>
// );

// function ChatPage() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   const handleSendMessage = async () => {
//     if (inputMessage.trim() === '') return;

//     const newMessage: Message = {
//       id: Date.now(),
//       text: inputMessage,
//       sender: 'user',
//       timestamp: new Date(),
//     };

//     setMessages([...messages, newMessage]);
//     setInputMessage('');
//     setIsTyping(true);

//     try {
//       const response = await fetch('/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: inputMessage }),
//       });

//       const data = await response.json();

//       const aiResponseText = data.outputs[0].outputs[0].outputs.message.message.text;

//       const aiResponse: Message = {
//         id: Date.now() + 1,
//         text: aiResponseText || "Sorry, I couldn't process your request.",
//         sender: 'ai',
//         timestamp: new Date(),
//       };

//       setMessages(prevMessages => [...prevMessages, aiResponse]);
//     } catch (error) {
//       console.error('Error:', error);
//       const errorMessage: Message = {
//         id: Date.now() + 1,
//         text: "Sorry, there was an error processing your request.",
//         sender: 'ai',
//         timestamp: new Date(),
//       };
//       setMessages(prevMessages => [...prevMessages, errorMessage]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-950 text-white">
//       <div className="fixed inset-0 bg-gradient-to-r from-gray-900 via-gray-950 to-black opacity-90 z-0"></div>

//       <header className="relative z-10 p-4 border-b border-gray-800">
//         <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
//           ChatGPT-Style AI Chatbot
//         </h1>
//       </header>

//       <main className="flex-grow relative z-10 p-4 overflow-hidden">
//         <GlowingCard className="h-full flex flex-col">
//           <div className="flex-grow overflow-y-auto mb-4 space-y-4">
//             {messages.map((message) => (
//               <motion.div
//                 key={message.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div className={`max-w-3/4 p-4 rounded-lg shadow-md ${message.sender === 'user' ? 'bg-gradient-to-r from-purple-700 to-indigo-700' : 'bg-gradient-to-r from-cyan-600 to-blue-700'}`}>
//                   <div className="flex items-center mb-1">
//                     {message.sender === 'user' ? (
//                       <UserIcon className="w-4 h-4 mr-2 text-white" />
//                     ) : (
//                       <BotIcon className="w-4 h-4 mr-2 text-white" />
//                     )}
//                     <span className="text-xs text-gray-400">
//                       {message.timestamp.toLocaleTimeString()}
//                     </span>
//                   </div>
//                   <p className="text-white">{message.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//             {isTyping && (
//               <div className="flex justify-start">
//                 <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-3 rounded-lg">
//                   <p>AI is typing...</p>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>
//           <div className="flex items-center space-x-2">
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//               placeholder="Type your message here..."
//               className="flex-grow p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//             <ShimmeringButton onClick={handleSendMessage} className="p-2 rounded-lg">
//               <SendIcon className="w-6 h-6 text-white" />
//             </ShimmeringButton>
//           </div>
//         </GlowingCard>
//       </main>

//       <footer className="relative z-10 p-4 border-t border-gray-800 text-center text-sm text-gray-400">
//         © 2025 ChatGPT-Style AI Chatbot. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default function Chat() {
//   return <ChatPage />;
// }


// v3

// "use client"

// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { SendIcon, BotIcon, UserIcon } from 'lucide-react';

// interface Message {
//   id: number;
//   text: string;
//   sender: 'user' | 'ai';
//   timestamp: Date;
// }

// const GlowingCard = ({ children, className = "" }) => (
//   <div className={`relative ${className}`}>
//     <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-75 transition duration-1000"></div>
//     <div className="relative bg-gray-900 bg-opacity-70 rounded-lg p-6 ring-1 ring-gray-800 shadow-xl">
//       {children}
//     </div>
//   </div>
// );

// const ShimmeringButton = ({ children, onClick, className = "" }) => (
//   <button
//     onClick={onClick}
//     className={`relative px-4 py-2 font-bold text-white rounded-lg group ${className}`}
//   >
//     <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-gradient-to-r from-cyan-600 to-purple-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>
//     <span className="relative z-10 mix-blend-screen">{children}</span>
//   </button>
// );

// function ChatPage() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   const handleSendMessage = async () => {
//     if (inputMessage.trim() === '') return;

//     const newMessage: Message = {
//       id: Date.now(),
//       text: inputMessage,
//       sender: 'user',
//       timestamp: new Date(),
//     };

//     setMessages([...messages, newMessage]);
//     setInputMessage('');
//     setIsTyping(true);

//     try {
//       const response = await fetch('/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: inputMessage }),
//       });

//       const data = await response.json();

//       const aiResponseText = data.outputs[0].outputs[0].outputs.message.message.text;

//       const aiResponse: Message = {
//         id: Date.now() + 1,
//         text: aiResponseText || "Sorry, I couldn't process your request.",
//         sender: 'ai',
//         timestamp: new Date(),
//       };

//       setMessages(prevMessages => [...prevMessages, aiResponse]);
//     } catch (error) {
//       console.error('Error:', error);
//       const errorMessage: Message = {
//         id: Date.now() + 1,
//         text: "Sorry, there was an error processing your request.",
//         sender: 'ai',
//         timestamp: new Date(),
//       };
//       setMessages(prevMessages => [...prevMessages, errorMessage]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-950 text-white">
//       <div className="fixed inset-0 bg-gradient-to-r from-gray-900 via-gray-950 to-black opacity-90 z-0"></div>

//       <header className="relative z-10 p-4 border-b border-gray-800">
//         <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
//           ChatGPT-Style AI Chatbot
//         </h1>
//       </header>

//       <main className="flex-grow relative z-10 p-4 overflow-hidden">
//         <GlowingCard className="h-full flex flex-col">
//           <div className="flex-grow overflow-y-auto mb-4 space-y-4">
//             {messages.map((message) => (
//               <motion.div
//                 key={message.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div className={`max-w-3/4 p-4 rounded-lg shadow-md ${message.sender === 'user' ? 'bg-gradient-to-r from-purple-700 to-indigo-700' : 'bg-gradient-to-r from-cyan-600 to-blue-700'}`}>
//                   <div className="flex items-center mb-1">
//                     {message.sender === 'user' ? (
//                       <UserIcon className="w-4 h-4 mr-2 text-white" />
//                     ) : (
//                       <BotIcon className="w-4 h-4 mr-2 text-white" />
//                     )}
//                     <span className="text-xs text-gray-400">
//                       {message.timestamp.toLocaleTimeString()}
//                     </span>
//                   </div>
//                   <p className="text-white">{message.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//             {isTyping && (
//               <div className="flex justify-start">
//                 <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-3 rounded-lg">
//                   <p>AI is typing...</p>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>
//         </GlowingCard>
//       </main>

//       <footer className="relative z-10 p-4 border-t border-gray-800">
//         <div className="flex items-center space-x-2">
//           <input
//             type="text"
//             value={inputMessage}
//             onChange={(e) => setInputMessage(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//             placeholder="Type your message here..."
//             className="flex-grow p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
//           />
//           <ShimmeringButton onClick={handleSendMessage} className="p-2 rounded-lg">
//             <SendIcon className="w-6 h-6 text-white" />
//           </ShimmeringButton>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default function Chat() {
//   return <ChatPage />;
// }


// v4

// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { SendIcon, BotIcon, UserIcon } from 'lucide-react';

// interface Message {
//   id: number;
//   text: string;
//   sender: 'user' | 'ai';
//   timestamp: Date;
// }

// const GlowingCard = ({ children, className = "" }) => (
//   <div className={`relative ${className}`}>
//     <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg blur opacity-50 transition duration-1000"></div>
//     <div className="relative bg-gray-800 bg-opacity-80 rounded-lg p-6 ring-1 ring-gray-700 shadow-xl">
//       {children}
//     </div>
//   </div>
// );

// const ShimmeringButton = ({ children, onClick, className = "" }) => (
//   <button
//     onClick={onClick}
//     className={`relative px-6 py-3 font-medium text-white rounded-full group ${className}`}
//   >
//     <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-gradient-to-r from-teal-500 to-purple-500 group-hover:translate-x-0 group-hover:translate-y-0 rounded-full"></span>
//     <span className="relative z-10 mix-blend-screen">{children}</span>
//   </button>
// );

// function ChatPage() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   const handleSendMessage = async () => {
//     if (inputMessage.trim() === '') return;

//     const newMessage: Message = {
//       id: Date.now(),
//       text: inputMessage,
//       sender: 'user',
//       timestamp: new Date(),
//     };

//     setMessages([...messages, newMessage]);
//     setInputMessage('');
//     setIsTyping(true);

//     try {
//       const response = await fetch('/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: inputMessage }),
//       });

//       const data = await response.json();

//       const aiResponseText = data.outputs[0].outputs[0].outputs.message.message.text;

//       const aiResponse: Message = {
//         id: Date.now() + 1,
//         text: aiResponseText || "Sorry, I couldn't process your request.",
//         sender: 'ai',
//         timestamp: new Date(),
//       };

//       setMessages(prevMessages => [...prevMessages, aiResponse]);
//     } catch (error) {
//       console.error('Error:', error);
//       const errorMessage: Message = {
//         id: Date.now() + 1,
//         text: "Sorry, there was an error processing your request.",
//         sender: 'ai',
//         timestamp: new Date(),
//       };
//       setMessages(prevMessages => [...prevMessages, errorMessage]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
//       <div className="fixed inset-0 bg-gradient-to-r from-gray-900 via-purple-800 to-teal-900 opacity-90 z-0"></div>

//       <header className="relative z-10 p-6 border-b border-gray-700">
//         <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">
//           Social Media Performance Analyzer
//         </h1>
//       </header>

//       <main className="flex-grow relative z-10 p-6 overflow-hidden">
//         <GlowingCard className="h-full flex flex-col">
//           <div className="flex-grow overflow-y-auto mb-4 space-y-4">
//             {messages.map((message) => (
//               <motion.div
//                 key={message.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div className={`max-w-3/4 p-4 rounded-lg shadow-lg ${message.sender === 'user' ? 'bg-gradient-to-r from-teal-600 to-teal-800' : 'bg-gradient-to-r from-purple-600 to-purple-800'}`}>
//                   <div className="flex items-center mb-2">
//                     {message.sender === 'user' ? (
//                       <UserIcon className="w-5 h-5 mr-2 text-white" />
//                     ) : (
//                       <BotIcon className="w-5 h-5 mr-2 text-white" />
//                     )}
//                     <span className="text-xs text-gray-300">
//                       {message.timestamp.toLocaleTimeString()}
//                     </span>
//                   </div>
//                   <p className="text-white">{message.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//             {isTyping && (
//               <div className="flex justify-start">
//                 <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-3 rounded-lg text-white">
//                   <p>AI is typing...</p>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>
//         </GlowingCard>
//       </main>

//       <footer className="relative z-10 p-6 border-t border-gray-700">
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             value={inputMessage}
//             onChange={(e) => setInputMessage(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//             placeholder="Type your message..."
//             className="flex-grow p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
//           />
//           <ShimmeringButton onClick={handleSendMessage}>
//             <SendIcon className="w-6 h-6 text-white" />
//           </ShimmeringButton>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default function Chat() {
//   return <ChatPage />;
// }





// // v5
// "use client";


// import { ReactNode } from 'react';
// import React, { useState, useRef, useEffect } from 'react';
// import { SendIcon, BotIcon, UserIcon, Loader2, HomeIcon } from 'lucide-react';

// interface Message {
//   id: number;
//   text: string;
//   sender: 'user' | 'ai';
//   timestamp: Date;
//   format?: 'text' | 'structured';
//   structuredContent?: {
//     title?: string;
//     sections?: {
//       heading?: string;
//       content: string[];
//     }[];
//   };
// }


// const MessageContainer = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
//   <div className={`w-full max-w-5xl mx-auto ${className}`}>
//     {children}
//   </div>
// );

// interface Section {
//   heading?: string;
//   content: string[]; // Array of strings for list items
// }

// interface ContentProps {
//   title?: string;
//   sections?: Section[]; // Array of sections
// }

// const StructuredMessage: React.FC<{ content: ContentProps }> = ({ content }) => (
//   <div className="space-y-4">
//     {content.title && (
//       <h3 className="text-lg font-semibold text-gray-200 mb-2">
//         {content.title}
//       </h3>
//     )}
//     {content.sections?.map((section, index) => (
//       <div key={index} className="space-y-2">
//         {section.heading && (
//           <h4 className="text-md font-medium text-gray-300">
//             {section.heading}
//           </h4>
//         )}
//         <ul className="space-y-2">
//           {section.content.map((item, itemIndex) => (
//             <li key={itemIndex} className="flex items-start space-x-2">
//               <span className="text-blue-400 mt-1">•</span>
//               <span className="text-gray-100">{item}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </div>
// );



// function ChatPage() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   const handleHomeClick = (e: React.MouseEvent) => {
//     if (!confirm('Are you sure you want to leave the chat?')) {
//       e.preventDefault();
//     }
//   };

//   const formatAIResponse = (text: string) => {
//     try {
//       const parsed = JSON.parse(text);
//       if (parsed.sections || parsed.title) {
//         return {
//           format: 'structured',
//           structuredContent: parsed
//         };
//       }
//     } catch (e) {
//       // If not JSON or doesn't match our structure, treat as regular text
//     }
//     return {
//       format: 'text',
//       text
//     };
//   };

//   const handleSendMessage = async () => {
//     if (inputMessage.trim() === '') return;

//     const newMessage: Message = {
//       id: Date.now(),
//       text: inputMessage,
//       sender: 'user',
//       timestamp: new Date(),
//       format: 'text'
//     };

//     setMessages([...messages, newMessage]);
//     setInputMessage('');
//     setIsTyping(true);

//     try {
//       const response = await fetch('/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: inputMessage }),
//       });

//       const data = await response.json();
//       const aiResponseText = data.outputs[0].outputs[0].outputs.message.message.text;
//       const formattedResponse = formatAIResponse(aiResponseText);

//       // Example interface for Message
//       interface Message {
//         id: number;
//         text: string;
//         sender: "user" | "ai";
//         timestamp: Date;
//         format: "text" | "structured" | undefined;
//         structuredContent?: any;
//       }


//       const aiResponse: Message = {
//         id: Date.now() + 1,
//         text: formattedResponse.format === "text" ? formattedResponse.text || "" : "",
//         sender: "ai",
//         timestamp: new Date(),
//         format: formattedResponse.format === "text" || formattedResponse.format === "structured"
//           ? formattedResponse.format
//           : undefined, // Narrow down to valid types
//         structuredContent:
//           formattedResponse.format === "structured" ? formattedResponse.structuredContent || undefined : undefined,
//       };
//       setMessages((prevMessages) => [...prevMessages, aiResponse as Message]);

//     } catch (error) {
//       console.error('Error:', error);
//       const errorMessage: Message = {
//         id: Date.now() + 1,
//         text: "Sorry, there was an error processing your request.",
//         sender: 'ai',
//         timestamp: new Date(),
//         format: 'text'
//       };
//       setMessages(prevMessages => [...prevMessages, errorMessage]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black text-gray-100">
//       <header className="border-b border-gray-800 bg-gray-900 p-4 backdrop-blur-lg bg-opacity-80">
//         <div className="max-w-5xl mx-auto flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <a
//               href="/"
//               onClick={handleHomeClick}
//               className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
//             >
//               <HomeIcon className="w-5 h-5 text-gray-400 hover:text-gray-200" />
//             </a>
//             <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Social Media Performance Analyzer
//             </h1>
//           </div>
//           <div className="flex items-center space-x-2 text-sm text-gray-400">
//             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//             <span>AI Active</span>
//           </div>
//         </div>
//       </header>

//       <main className="flex-grow overflow-hidden relative">
//         <div className="absolute inset-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
//           {messages.map((message) => (
//             <div
//               key={message.id}
//               className={`px-4 py-6 ${message.sender === 'ai' ? 'bg-gray-900' : 'bg-black'
//                 } transition-colors duration-300`}
//             >
//               <MessageContainer>
//                 <div className="flex space-x-4 items-start">
//                   <div className="flex-shrink-0 mt-1">
//                     {message.sender === 'user' ? (
//                       <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
//                         <UserIcon className="w-5 h-5 text-white" />
//                       </div>
//                     ) : (
//                       <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-lg">
//                         <BotIcon className="w-5 h-5 text-white" />
//                       </div>
//                     )}
//                   </div>
//                   <div className="flex-grow space-y-2">
//                     <div className="flex items-center space-x-2">
//                       <span className="text-sm font-medium text-gray-400">
//                         {message.sender === 'user' ? 'You' : 'AI Assistant'}
//                       </span>
//                       <span className="text-xs text-gray-500">
//                         {message.timestamp.toLocaleTimeString()}
//                       </span>
//                     </div>
//                     {message.format === 'structured' ? (
//                       <StructuredMessage content={message.structuredContent} />
//                     ) : (
//                       <p className="text-gray-100 leading-relaxed whitespace-pre-wrap">
//                         {message.text}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </MessageContainer>
//             </div>
//           ))}
//           {isTyping && (
//             <div className="px-4 py-6 bg-gray-900">
//               <MessageContainer>
//                 <div className="flex space-x-4 items-start">
//                   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-lg">
//                     <BotIcon className="w-5 h-5 text-white" />
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
//                     <span className="text-gray-400 text-sm">AI is thinking...</span>
//                   </div>
//                 </div>
//               </MessageContainer>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </main>

//       <footer className="border-t border-gray-800 bg-gray-900 p-4 backdrop-blur-lg bg-opacity-80">
//         <div className="max-w-5xl mx-auto">
//           <div className="flex space-x-4 items-center">
//             <div className="flex-grow relative">
//               <input
//                 type="text"
//                 value={inputMessage}
//                 onChange={(e) => setInputMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                 placeholder="Message Social Media Performance Analyzer..."
//                 className="w-full p-4 rounded-xl bg-gray-800 text-gray-100 placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 outline-none"
//               />
//             </div>
//             <button
//               onClick={handleSendMessage}
//               className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 outline-none shadow-lg"
//             >
//               <SendIcon className="w-5 h-5" />
//             </button>
//           </div>
//           <div className="mt-2 text-xs text-gray-500 text-center">
//             AI Assistant is ready to analyze your social media performance
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default function Chat() {
//   return <ChatPage />;
// }


// v7

// "use client";

// import { ReactNode } from "react";
// import React, { useState, useRef, useEffect } from "react";
// import { SendIcon, BotIcon, UserIcon, Loader2, HomeIcon } from "lucide-react";

// // Message interface with optional structuredContent
// interface Message {
//   id: number;
//   text: string;
//   sender: "user" | "ai";
//   timestamp: Date;
//   format?: "text" | "structured";
//   structuredContent?: {
//     title?: string;
//     sections?: {
//       heading?: string;
//       content: string[];
//     }[];
//   };
// }

// // MessageContainer component
// const MessageContainer = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
//   <div className={`w-full max-w-5xl mx-auto ${className}`}>{children}</div>
// );

// // StructuredMessage component with contentProps
// interface Section {
//   heading?: string;
//   content: string[];
// }

// interface ContentProps {
//   title?: string;
//   sections?: Section[];
// }

// const StructuredMessage: React.FC<{ content?: ContentProps }> = ({ content }) => {
//   if (!content) return <p>No structured content available</p>;

//   return (
//     <div className="space-y-4">
//       {content.title && (
//         <h3 className="text-lg font-semibold text-gray-200 mb-2">{content.title}</h3>
//       )}
//       {content.sections?.map((section, index) => (
//         <div key={index} className="space-y-2">
//           {section.heading && <h4 className="text-md font-medium text-gray-300">{section.heading}</h4>}
//           <ul className="space-y-2">
//             {section.content.map((item, itemIndex) => (
//               <li key={itemIndex} className="flex items-start space-x-2">
//                 <span className="text-blue-400 mt-1">•</span>
//                 <span className="text-gray-100">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// function ChatPage() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   const handleHomeClick = (e: React.MouseEvent) => {
//     if (!confirm("Are you sure you want to leave the chat?")) {
//       e.preventDefault();
//     }
//   };

//   // Format AI response and handle JSON parsing
//   const formatAIResponse = (text: string) => {
//     try {
//       const parsed = JSON.parse(text);
//       if (parsed.sections || parsed.title) {
//         return {
//           format: "structured",
//           structuredContent: parsed,
//         };
//       }
//     } catch (e) {
//       // Treat as regular text if JSON parsing fails
//     }
//     return {
//       format: "text",
//       text,
//     };
//   };

//   const handleSendMessage = async () => {
//     if (inputMessage.trim() === "") return;

//     const newMessage: Message = {
//       id: Date.now(),
//       text: inputMessage,
//       sender: "user",
//       timestamp: new Date(),
//       format: "text",
//     };

//     setMessages([...messages, newMessage]);
//     setInputMessage("");
//     setIsTyping(true);

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message: inputMessage }),
//       });

//       const data = await response.json();
//       const aiResponseText = data.outputs[0].outputs[0].outputs.message.message.text;
//       const formattedResponse = formatAIResponse(aiResponseText);

//       const aiResponse: Message = {
//         id: Date.now() + 1,
//         text: formattedResponse.format === "text" ? formattedResponse.text || "" : "",
//         sender: "ai",
//         timestamp: new Date(),
//         format: formattedResponse.format,
//         structuredContent:
//           formattedResponse.format === "structured" ? formattedResponse.structuredContent : undefined,
//       };
//       setMessages((prevMessages) => [...prevMessages, aiResponse]);
//     } catch (error) {
//       console.error("Error:", error);
//       const errorMessage: Message = {
//         id: Date.now() + 1,
//         text: "Sorry, there was an error processing your request.",
//         sender: "ai",
//         timestamp: new Date(),
//         format: "text",
//       };
//       setMessages((prevMessages) => [...prevMessages, errorMessage]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-black text-gray-100">
//       <header className="border-b border-gray-800 bg-gray-900 p-4 backdrop-blur-lg bg-opacity-80">
//         <div className="max-w-5xl mx-auto flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <a
//               href="/"
//               onClick={handleHomeClick}
//               className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
//             >
//               <HomeIcon className="w-5 h-5 text-gray-400 hover:text-gray-200" />
//             </a>
//             <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Social Media Performance Analyzer
//             </h1>
//           </div>
//           <div className="flex items-center space-x-2 text-sm text-gray-400">
//             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//             <span>AI Active</span>
//           </div>
//         </div>
//       </header>

//       <main className="flex-grow overflow-hidden relative">
//         <div className="absolute inset-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
//           {messages.map((message) => (
//             <div
//               key={message.id}
//               className={`px-4 py-6 ${message.sender === "ai" ? "bg-gray-900" : "bg-black"} transition-colors duration-300`}
//             >
//               <MessageContainer>
//                 <div className="flex space-x-4 items-start">
//                   <div className="flex-shrink-0 mt-1">
//                     {message.sender === "user" ? (
//                       <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
//                         <UserIcon className="w-5 h-5 text-white" />
//                       </div>
//                     ) : (
//                       <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-lg">
//                         <BotIcon className="w-5 h-5 text-white" />
//                       </div>
//                     )}
//                   </div>
//                   <div className="flex-grow space-y-2">
//                     <div className="flex items-center space-x-2">
//                       <span className="text-sm font-medium text-gray-400">
//                         {message.sender === "user" ? "You" : "AI Assistant"}
//                       </span>
//                       <span className="text-xs text-gray-500">
//                         {message.timestamp.toLocaleTimeString()}
//                       </span>
//                     </div>
//                     {message.format === "structured" ? (
//                       <StructuredMessage content={message.structuredContent} />
//                     ) : (
//                       <p className="text-gray-100 leading-relaxed whitespace-pre-wrap">{message.text}</p>
//                     )}
//                   </div>
//                 </div>
//               </MessageContainer>
//             </div>
//           ))}
//           {isTyping && (
//             <div className="px-4 py-6 bg-gray-900">
//               <MessageContainer>
//                 <div className="flex space-x-4 items-start">
//                   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-lg">
//                     <BotIcon className="w-5 h-5 text-white" />
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
//                     <span className="text-gray-400 text-sm">AI is thinking...</span>
//                   </div>
//                 </div>
//               </MessageContainer>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </main>

//       <footer className="border-t border-gray-800 bg-gray-900 p-4 backdrop-blur-lg bg-opacity-80">
//         <div className="max-w-5xl mx-auto">
//           <div className="flex space-x-4 items-center">
//             <div className="flex-grow relative">
//               <input
//                 type="text"
//                 value={inputMessage}
//                 onChange={(e) => setInputMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//                 placeholder="Message Social Media Performance Analyzer..."
//                 className="w-full p-4 rounded-xl bg-gray-800 text-gray-100 placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 outline-none"
//               />
//             </div>
//             <button
//               onClick={handleSendMessage}
//               className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 outline-none shadow-lg"
//             >
//               <SendIcon className="w-5 h-5" />
//             </button>
//           </div>
//           <div className="mt-2 text-xs text-gray-500 text-center">
//             AI Assistant is ready to analyze your social media performance
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default function Chat() {
//   return <ChatPage />;
// }

//  v8"use client";

"use client"; // Add this at the very top of your file

import { ReactNode } from 'react';
import React, { useState, useRef, useEffect } from 'react';
import { SendIcon, BotIcon, UserIcon, Loader2, HomeIcon } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  format?: 'text' | 'structured';
  structuredContent?: {
    title?: string;
    sections?: {
      heading?: string;
      content: string[];
    }[];
  };
}

const MessageContainer = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`w-full max-w-5xl mx-auto ${className}`}>
    {children}
  </div>
);

interface Section {
  heading?: string;
  content: string[]; // Array of strings for list items
}

interface ContentProps {
  title?: string;
  sections?: Section[]; // Array of sections
}

const StructuredMessage: React.FC<{ content: ContentProps }> = ({ content }) => (
  <div className="space-y-4">
    {content.title && (
      <h3 className="text-lg font-semibold text-gray-200 mb-2">
        {content.title}
      </h3>
    )}
    {content.sections?.map((section, index) => (
      <div key={index} className="space-y-2">
        {section.heading && (
          <h4 className="text-md font-medium text-gray-300">
            {section.heading}
          </h4>
        )}
        <ul className="space-y-2">
          {section.content.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start space-x-2">
              <span className="text-blue-400 mt-1">•</span>
              <span className="text-gray-100">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (!confirm('Are you sure you want to leave the chat?')) {
      e.preventDefault();
    }
  };

  // Format AI response and handle JSON parsing
  const formatAIResponse = (text: string) => {
    try {
      const parsed = JSON.parse(text);
      if (parsed.sections || parsed.title) {
        return {
          format: "structured" as const,  // Ensure it is specifically "structured"
          structuredContent: parsed,
        };
      }
    } catch (e) {
      // Treat as regular text if JSON parsing fails
    }
    return {
      format: "text" as const,  // Default to "text" if not structured
      text,
    };
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
      format: 'text',
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();
      const aiResponseText = data.outputs[0].outputs[0].outputs.message.message.text;
      const formattedResponse = formatAIResponse(aiResponseText);

      // Example interface for Message
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: formattedResponse.format === "text" ? formattedResponse.text || "" : "",
        sender: "ai",
        timestamp: new Date(),
        format: formattedResponse.format, // Now safely using "text" or "structured"
        structuredContent:
          formattedResponse.format === "structured" ? formattedResponse.structuredContent : undefined,
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);

    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, there was an error processing your request.",
        sender: 'ai',
        timestamp: new Date(),
        format: 'text',
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-gray-100">
      <header className="border-b border-gray-800 bg-gray-900 p-4 backdrop-blur-lg bg-opacity-80">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a
              href="/"
              onClick={handleHomeClick}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
            >
              <HomeIcon className="w-5 h-5 text-gray-400 hover:text-gray-200" />
            </a>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Social Media Performance Analyzer
            </h1>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>AI Active</span>
          </div>
        </div>
      </header>

      <main className="flex-grow overflow-hidden relative">
        <div className="absolute inset-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`px-4 py-6 ${message.sender === 'ai' ? 'bg-gray-900' : 'bg-black'
                } transition-colors duration-300`}
            >
              <MessageContainer>
                <div className="flex space-x-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    {message.sender === 'user' ? (
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                        <UserIcon className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-lg">
                        <BotIcon className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-grow space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-400">
                        {message.sender === 'user' ? 'You' : 'AI Assistant'}
                      </span>
                      <span className="text-xs text-gray-500">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    {message.format === 'structured' && message.structuredContent ? (
                      <StructuredMessage content={message.structuredContent} />
                    ) : (
                      <p className="text-gray-100 leading-relaxed whitespace-pre-wrap">
                        {message.text}
                      </p>
                    )}
                  </div>
                </div>
              </MessageContainer>
            </div>
          ))}
          {isTyping && (
            <div className="px-4 py-6 bg-gray-900">
              <MessageContainer>
                <div className="flex space-x-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-lg">
                    <BotIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                    <span className="text-gray-400 text-sm">AI is thinking...</span>
                  </div>
                </div>
              </MessageContainer>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      <footer className="border-t border-gray-800 bg-gray-900 p-4 backdrop-blur-lg bg-opacity-80">
        <div className="max-w-5xl mx-auto">
          <div className="flex space-x-4 items-center">
            <div className="flex-grow relative">
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />
            </div>
            <button
              onClick={handleSendMessage}
              className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ChatPage;
