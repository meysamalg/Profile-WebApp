import Profile from "../Components/Profile";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";

export default function Home() {
  return (
    <div className="font-sans flex flex-col md:flex-row md:space-x-4 p-4 bg-gray-600 w-full">
      <div className="mb-4 md:mb-0 w-4/12">
        <Profile />
      </div>

      <div className="hidden md:block border-l border-gray-300 mx-4" />

      <div className="w-4/12">
        <Skills />
      </div>

      <div className="bg-re md:block border-l border-gray-300 mx-4" />

      <div className="mb-4 md:mb-0 w-4/12">
        <Projects />
      </div>
    </div>
  );
}
