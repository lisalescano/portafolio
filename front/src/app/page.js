import Cards from './components/cards';
import SideBar from './components/sidebar';

export default function Home() {
  return (
    <main className="flex">
      {/* Sidebar */}
      <SideBar />

      {/* Contenido principal */}
      <div className="flex-1 bg-orange-100 min-h-screen">
        <h1 className="px-10 pb-10 pt-20 font-bold text-center text-green-800 text-7xl font-mono">
          Hello World!
        </h1>
        <h3 className="px-10 pb-10 text-black max-w-xl text-green-800 font-mono font-bold">
          Welcome to my portfolio! My name is Lisandro Lescano, I am a 21 years old passionate programmer.
          I invite you to explore my work, where each project reflects my dedication to learning, innovation, and creativity.
          Whether it's a complex application or a simple design, I hope you'll find something that resonates with you.
          Thank you for stopping by, and I hope you enjoy your time here!
        </h3>
        <h1 className="pb-5 font-bold text-center text-green-800 text-5xl font-mono">Projects!</h1>

        <Cards />
      </div>
    </main>
  );
}

