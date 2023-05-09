import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <div>Home Page </div>
    <div className='flex gap-17 py-17 px-17'>
      <ol>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/contect">Contect</Link></li>
        <li><a href="/about">About</a></li>

      </ol>
      
      </div>
    </div>
  );
}


