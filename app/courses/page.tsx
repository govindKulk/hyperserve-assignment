import { Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link  from 'next/link'
import {MountainIcon} from '@/app/page'

const services = [
  {
    title: 'CRM Data Entry Automation',
    image: '/crm.webp?height=200&width=300',
    description: 'This is placeholder text. To change this content, double-click on the component and edit as needed.',
    price: '$200',
    duration: '3 hours'
  },
  {
    title: 'Contract Analysis with AI',
    image: '/contract.webp?height=200&width=300',
    description: 'This is placeholder text. To change this content, double-click on the component and edit as needed.',
    price: '$300',
    duration: '4 hours'
  },
  {
    title: 'Sales Call Automation',
    image: '/sales.webp?height=200&width=300',
    description: 'This is placeholder text. To change this content, double-click on the component and edit as needed.',
    price: '$250',
    duration: '2 hours'
  },
  {
    title: 'Coding with AI',
    image: '/coding.webp?height=200&width=300',
    description: 'This is placeholder text. To change this content, double-click on the component and edit as needed.',
    price: '$350',
    duration: '4 hours'
  },
]

export default function Component() {
  return (
    <div className="min-h-screen">

      <main className="container mx-auto px-4 py-8 text-purple-700">
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <input
              type="search"
              placeholder="What are you looking for?"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold">Price: {service.price}</span>
                  <span className="text-gray-600">Duration: {service.duration}</span>
                </div>
                <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}