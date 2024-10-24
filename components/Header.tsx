import Link from "next/link"
import {MountainIcon} from '@/app/page'

export default function Header() {

  return (

    <nav className="container mx-auto flex items-center justify-between p-4">
      <Link className="flex items-center justify-center" href="/">
        <MountainIcon className="h-6 w-6 text-purple-400" />
        <span className="ml-2 text-lg font-bold text-purple-300">HyperServe</span>
      </Link>
        <div className="space-x-4">
            {['Home', 'Services', 'About', 'Courses'].map((item) => (
                <Link key={item} href={item !== 'Home' ? `/${item.toLowerCase()}` : '/'} className="hover:underline">{item}</Link>
            ))}
        </div>
    </nav>
    
  )

  
}