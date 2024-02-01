import Image from 'next/image'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between max-w-screen mx-auto">
      <Sidebar />
      <div className="border w-full min-h-screen flex items-center justify-center mx-4">
        Main
      </div>
    </main>
  )
}
