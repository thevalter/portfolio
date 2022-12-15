import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import bootstrap from "../assets/bootstrap.png";
import postgreSQL from "../assets/postgreSQL.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-600",
    },
    {
      id: 7,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 8,
      src: node,
      title: "Node JS",
      style: "shadow-green-800",
    },
    {
      id: 9,
      src: postgreSQL,
      title: "PostgreSQL",
      style: "shadow-blue-800",
    },
  ];

  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-gray-900 to-black pt-40 w-full h-auto"
    >
      <div className="w-9/12 mx-auto flex flex-col justify-center h-full text-gray-200 rounded-3xl bg-black">
        <div className="pt-20 mb-16 flex flex-col">
          <p className="text-4xl mx-auto font-bold font-signature text-green-500">
            Skills
          </p>
          <p className="py-6 px-2 mx-auto text-center max-w-full">
            Principais tecnologias que tenho experiência
          </p>
        </div>

        <div className="flex flex-wrap w-10/12 mx-auto mb-40 gap-8 justify-between text-center">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 rounded-lg w-3/12 mx-auto max-md:w-5/12 max-sm:w-10/12 flex flex-col justify-end ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 font-signature">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience