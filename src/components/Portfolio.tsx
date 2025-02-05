import CardPortfolio from "./CardPortfolio";

export default function Portfolio() {
  return (
    <div className="flex flex-col  bg-black text-white h-auto p-[50px]">
      <div className="">
        <h2 className="font-publicSans text-base font-normal tracking-widest">
          RECENT WORKS
        </h2>
        <p className="font-dmSerifDisplay text-5xl leading-relaxed">
          Here are some of my favorite projects I have done. Feel free to check
          them out.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CardPortfolio
          imageSrc="placeholder.jpeg"
          imageAlt="Project 1"
          title="BloomHouse"
          description="This project showcases amazing features and functionality."
          link="https://example.com/project1"
          linkText="View Project"
        />
        <CardPortfolio
          imageSrc="placeholder.jpeg"
          imageAlt="Project 2"
          title="Reality Check"
          description="A deep dive into modern UI/UX design principles."
          link="https://example.com/project2"
          linkText="Read More"
        />
        <CardPortfolio
          imageSrc="placeholder.jpeg"
          imageAlt="Project 2"
          title="Music Player"
          description="A deep dive into modern UI/UX design principles."
          link="https://example.com/project2"
          linkText="Read More"
        />
        <CardPortfolio
          imageSrc="placeholder.jpeg"
          imageAlt="Project 2"
          title="Smile School"
          description="A deep dive into modern UI/UX design principles."
          link="https://example.com/project2"
          linkText="Read More"
        />{" "}
        <CardPortfolio
          imageSrc="placeholder.jpeg"
          imageAlt="Project 2"
          title="Atlas NextJS"
          description="A deep dive into modern UI/UX design principles."
          link="https://example.com/project2"
          linkText="Read More"
        />{" "}
        <CardPortfolio
          imageSrc="placeholder.jpeg"
          imageAlt="Project 2"
          title="Capstone Project"
          description="A deep dive into modern UI/UX design principles."
          link="https://example.com/project2"
          linkText="Read More"
        />
      </div>
    </div>
  );
}
