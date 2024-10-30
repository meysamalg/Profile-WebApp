export default function Projects() {
  const skills = [
    { name: "React", level: 50 },
    { name: "Next.js", level: 60 },
    { name: "Tailwind CSS", level: 75 },
    { name: "TypeScript", level: 70 },
  ];

  return (
    <section className="p-8 bg-gray-300 rounded-lg shadow-lg">
      <h2 className="text-gray-800 text-3xl font-semibold mb-6 text-center">
        Skills
      </h2>
      <ul className="space-y-4">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex justify-between items-center text-gray-800"
          >
            <span className="font-medium">{skill.name}</span>
            <div className="relative w-2/3">
              <div className="bg-gray-700 h-3 rounded-lg overflow-hidden shadow-inner">
                <div
                  className={`bg-green-500 h-full rounded-lg`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="absolute right-0 -top-6 text-sm font-semibold text-gray-800">
                {skill.level}%
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
