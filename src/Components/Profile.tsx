import Image from "next/image";

export default function Projects() {
  const projects = [
    { name: "Meysam", description: "Alamgir" },
    { name: "🖥️ Web Designer", description: "" },
  ];

  const projectImage = "/assets/hp.png";

  return (
    <section
      id="projects"
      className="p-4 w-full max-w-md mx-auto flex flex-col items-center"
    >
      <div className="flex items-center mb-4">
        <Image
          src={projectImage}
          width={150}
          height={150}
          alt="profile Logo"
          className="p-1 bg-black w-10 h-10 md:w-48 md:h-48 overflow-hidden rounded-full"
        />

        <div className="ml-4">
          <div className="space-y-2 mt-2">
            {projects.map((project, index) => (
              <div key={index} className="p-2 rounded shadow-sm">
                <h3 className="font-bold">{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="my-4 w-full" />

      <div className="text-center leading-relaxed">
        <p>
          About me: Hello ✋ I’m Elias, also known as Amin, a self-taught
          full-stack web developer with a passion for cutting-edge technology.
          I’ve been working in web development since 2018, specializing in React
          and Next.js for the front end, and .NET Core for the back end. My
          current focus is on Web3, particularly in the area of Decentralized
          Finance (DeFi), as I’m fascinated by how it’s transforming financial
          systems. I’m always eager to learn and explore new technologies to
          stay ahead in the field. Contact me: 📱 +98 937 696 8052 📧
          elias.nazemi98@gmail.com How to reach me:
        </p>
      </div>
    </section>
  );
}
