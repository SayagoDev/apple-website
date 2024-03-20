import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';

export const App = () => {
  return (
    <main className="bg-black overlfow-y-auto">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  )
}

export default App
