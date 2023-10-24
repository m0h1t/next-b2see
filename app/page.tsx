import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <main style={{fontFamily:'Inter', fontWeight:'500'}}>
      <NavBar />
        <Link href={'/titles'}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        style={{display: 'none'}}
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Titles page{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Check out all the titles you need, with the click of a button!
          </p>
        </Link>
    </main>
  )
}
