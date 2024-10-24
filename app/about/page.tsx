'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'

export default function AboutAndClients() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      const scrollContent = scrollContainer.children[0] as HTMLElement
      const scrollWidth = scrollContent.offsetWidth

      const scroll = () => {
        if (scrollContainer.scrollLeft >= scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }

      const intervalId = setInterval(scroll, 20)

      return () => clearInterval(intervalId)
    }
  }, [])

  const clients = [
    { name: 'High Court of Delhi', src: '/delhi.webp' },
    { name: 'Supreme Court of India', src: '/supreme-court.webp' },
    { name: 'Jharkhand High Court', src: '/jharkhand.webp' },
    { name: 'High Court of Bombay', src: '/mumbai.webp' },
    { name: 'Patna High Court', src: '/patna.webp' },
  ]

  return (
    <div className="bg-gray-900 text-gray-100">
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About.</h1>
              <p className="text-gray-400">
                Since our inception in 2018, ManCorp Innovation Labs has been forecasting and
                leveraging AI technologies.
              </p>
              <div className="mt-8">
                <Image
                  src="/founder.webp?height=400&width=300"
                  alt="Manthan Trivedi"
                  width={300}
                  height={400}
                  className="rounded-lg"
                />
                <h3 className="mt-4 text-xl font-semibold">Manthan Trivedi</h3>
                <p className="text-gray-400">Founder</p>
                <p className="mt-2 text-sm text-gray-400">
                  Our trend-watching guru and primary innovator, always ahead of the AI curve, spotting
                  tomorrow's game-changers today.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Pioneering AI Innovation Since 2018</h2>
                <p className="text-gray-400">
                  At ManCorp Innovation Labs, we're not just observers of the AI
                  revolution—we're active participants shaping its course. Since our
                  inception, we've been at the forefront of AI innovation, consistently
                  transforming how organizations operate and deliver value.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">What Sets Us Apart</h3>
                <p className="text-gray-400">
                  We don't just talk about AI—we live and breathe it. Our team spends
                  their days tinkering with cutting-edge AI tools, building projects, and
                  pushing the boundaries of what's possible. This hands-on approach
                  allows us to provide unparalleled insights into the usability and
                  problem-solving potential of various AI models.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-400">
                  We're on a journey to demystify AI and make it accessible to all,
                  with ethical principles at the cornerstone of everything we do. Every project we
                  undertake, every innovation we pursue, is guided by this mission.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Join Us on the AI Journey</h3>
                <p className="text-gray-400">
                  Whether you're a government entity looking to streamline operations, an
                  industry association aiming to empower your members, or a business
                  ready to leap into the future, we're here to guide your AI transformation
                  journey.
                </p>
                <p className="mt-2 text-gray-400">
                  Let's start revolutionizing your operations with AI! Let's chat about how we
                  can turn your challenges into opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
          <div 
            ref={scrollRef}
            className="overflow-hidden whitespace-nowrap"
          >
            <div className="inline-block animate-marquee">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="inline-block mx-4">
                  <Image
                    src={client.src}
                    alt={`${client.name} logo`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="px-4 py-2 bg-gray-800 text-gray-100 rounded hover:bg-gray-700 transition-colors">
              Talk to us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}