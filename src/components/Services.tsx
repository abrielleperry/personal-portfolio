import ServicesCard from "./ServicesCard";

export default function Services() {
  return (
    <div className="flex flex-col justify-center p-4 ">
      <h2 className="font-publicSans uppercase text-lg font-semibold tracking-widest mb-4">
        Resume
      </h2>
      <div className="flex flex-row flex-wrap gap-4">
        <ServicesCard
          service="Full-Stack Web Development"
          description="I design and develop responsive, dynamic, and user-friendly websites, managing both front-end and back-end to ensure seamless performance. From intuitive user interfaces to secure server-side systems, I create scalable, efficient, and cohesive web applications tailored to your business needs."
        />
        <ServicesCard
          service="Frontend Development"
          description="I design and develop engaging user interfaces that are visually appealing, interactive, and accessible. I focus on creating intuitive layouts and smooth navigation to enhance the overall user experience."
        />
        <ServicesCard
          service="Backend Development"
          description="I develop secure, reliable, and scalable server-side systems that handle data management, business logic, and application functionality. My work ensures your applications perform efficiently and remain robust under any conditions."
        />

        <ServicesCard
          service="Mobile Development"
          description="I create cross-platform mobile applications with a focus on performance, user experience, and modern design principles. My goal is to deliver intuitive apps that work seamlessly on both iOS and Android devices."
        />
        <ServicesCard
          service="API Development & Integration"
          description="I design and develop APIs that enable secure and efficient communication between different applications. I also integrate third-party services to enhance the functionality of your systems."
        />
        <ServicesCard
          service="Performance Optimization"
          description="I optimize website speed, responsiveness, and overall performance to ensure fast load times and smooth interactions. By identifying bottlenecks and enhancing efficiency, I help improve user satisfaction and engagement."
        />
        <ServicesCard
          service="UI/UX Design Support"
          description="I collaborate with designers to implement user-friendly, accessible, and visually consistent interfaces. I focus on creating intuitive experiences that are both functional and aesthetically pleasing."
        />
        <ServicesCard
          service="Maintenance & Support"
          description="I provide comprehensive maintenance and support services, including website updates, bug fixes, performance monitoring, and database optimization to ensure your applications run smoothly and securely."
        />
        <ServicesCard
          service="Consulting Services"
          description="I offer technical consulting services to help businesses improve their digital presence. Whether it’s system architecture, code reviews, or strategic planning, I provide actionable insights to support growth and innovation."
        />
      </div>
    </div>
  );
}
