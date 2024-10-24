'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Search, BarChart, Lightbulb, MapPin, Book, Rocket, Award, MessageCircle, X, Twitter, Instagram, Facebook, Youtube } from "lucide-react"
import Header from '@/components/Header'


export default function LandingPageComponent() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "How can we help you today?", sender: "bot" }
  ])
  const [inputMessage, setInputMessage] = useState("")

  const sendMessage = (e) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: "user" }])
      setInputMessage("")
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thanks for your message. Our team will get back to you soon.", sender: "bot" }])
      }, 1000)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">

      <main className="flex-1 justify-center items-center ">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-purple-300 sm:text-5xl xl:text-6xl/none">
                    Engage, Discover, Enable
                    <br />
                    Unlock Your AI Potential
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Transformation-as-a-Service for Adopting AI at Scale
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    See Our Services
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-gray-800 px-8 text-sm font-medium text-gray-300 shadow-sm transition-colors hover:bg-gray-700 hover:text-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Hero"
                  className="aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
                  height="400"
                  src="/hero.jpg"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">Mission</h2>
            <div className="grid gap-6 lg:grid-cols-2 place-items-center lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-purple-700">
                  We're driven by a simple yet powerful goal: Enabling transformation with artificial intelligence for the
                  common good. Every project we undertake, every innovation we pursue, is guided by this mission.
                </p>
                <p className="text-purple-700">
                  We know that keeping up with the rapidly changing AI developments can be challenging. Our team constantly
                  scans the horizon, tracking the latest in AI developments and related sector-wise adoption trends. We
                  identify game-changing opportunities and conduct in-depth comparative analysis to keep you ahead of the
                  curve. We work with teams across industries, we speak to experts, we do our research and we're
                  experimenting all day everyday.
                </p>
                <p className="text-purple-700">
                  We don't just talk about AI—we live and breathe it. Our team spends their days tinkering with cutting-edge
                  AI tools, building projects, and pushing the boundaries of what's possible. This hands-on approach allows
                  us to provide unparalleled insights into the usability and problem-solving potential of various AI models.
                </p>
                <div>
                  <Button className="mt-4 bg-purple-600 text-white hover:bg-purple-700">Read More</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Mission"
                  className="aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
                  height="400"
                  src="/mission.webp"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                <Search className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2 text-purple-900">Continuous Research</h3>
                <p className="text-purple-700">We work across industries, speak with experts, and conduct in-depth research to keep you ahead of the curve.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                <BarChart className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2 text-purple-900">Quarterly Updates</h3>
                <p className="text-purple-700">We update our trends reports and insights every quarter, ensuring you always have the most current information at your fingertips.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                <Lightbulb className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2 text-purple-900">Proven Foresight</h3>
                <p className="text-purple-700">Our track record speaks for itself. We predicted the rise of AI as a general purpose technology in 2018, forecasted the assistive role of AI in 2019, and anticipated the need for custom-AI marketplaces in 2020.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                <MapPin className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2 text-purple-900">Pioneers in India</h3>
                <p className="text-purple-700">Our founders were the first people in India to attempt building a large language model for the Indian Judiciary.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                <Book className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2 text-purple-900">Updated Skillset</h3>
                <p className="text-purple-700">Our AI engineers have mastered model customisation and workflow automation across multiple domains, shipping solutions for enterprise use.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                <Rocket className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2 text-purple-900">Groundbreaking Innovations</h3>
                <p className="text-purple-700">The founding members of our team have delivered India's first AI-powered Smart Court Solution (SUPACE). This system, in 2021, was capable of reading text from scanned images and decipher information, generate timelines, answer questions just like the LLMs now do.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                <Award className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2 text-purple-900">Institutional Recognition</h3>
                <p className="text-purple-700">The founder has been on the advisory board of and have been invited to deliver insights at the Supreme Court of India, Income Tax Appellate Tribunal (ITAT), IIT-Mumbai, as well as various High Courts across the country.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <MountainIcon className="h-6 w-6 text-purple-400" />
              <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
                © 2024 HyperServe AI Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link className="text-gray-400 hover:text-purple-400" href="#">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link className="text-gray-400 hover:text-purple-400" href="#">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link className="text-gray-400 hover:text-purple-400" href="#">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link className="text-gray-400 hover:text-purple-400" href="#">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-4 left-4 z-50">
        <Button
          className="bg-purple-600 text-white hover:bg-purple-700 rounded-full p-4 shadow-lg"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          {isChatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>
      {isChatOpen && (
        <div className="fixed bottom-20 left-4 z-50 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-semibold text-purple-300">Chat with us</h3>
          </div>
          <div className="h-64 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] rounded-lg p-2 ${message.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-700">
            <form onSubmit={sendMessage} className="flex gap-2">
              <Input
                className="flex-grow bg-gray-700 text-gray-200 border-gray-600"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <Button type="submit" className="bg-purple-600 text-white hover:bg-purple-700">Send</Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}