export default function Header() {
    return (
      <div className="flex justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-lg font-bold">meysam alamgir</h1>
        <nav className="flex space-x-4">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
    );
  }
  