import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  description: string;
  stack: string[];
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Senior Fullstack Developer",
    company: "Tech Corp Solutions",
    date: "2022 - Present",
    description:
      "Leading development of scalable web applications using modern technologies. Architecting solutions and mentoring junior developers to ensure code quality and best practices.",
    stack: ["Next.js", "TypeScript", "AWS"],
  },
  {
    role: "Frontend Developer",
    company: "Innovate Startup Inc",
    date: "2020 - 2022",
    description:
      "Developed responsive user interfaces and implemented complex state management solutions. Collaborated closely with UX/UI designers to improve user experience.",
    stack: ["React", "Redux", "SASS"],
  },
  {
    role: "Junior Web Developer",
    company: "Creative Digital Agency",
    date: "2018 - 2020",
    description:
      "Assisted in the development of client websites and maintained legacy codebases. Optimized website performance and ensured cross-browser compatibility.",
    stack: ["HTML5", "JavaScript", "PHP"],
  },
];

export const ExperienceSection = () => {
  return (
    <section className="container max-w-5xl mx-auto px-6 md:px-16 py-10">
      <h2 className="text-3xl font-bold mb-12 text-foreground">Experience</h2>
      <div className="relative border-l-2 border-border ml-3 md:ml-4 space-y-12">
        {EXPERIENCE_DATA.map((item, index) => (
          <div
            key={index}
            className="relative pl-8 md:pl-10 animate-in slide-in-from-bottom-6 fade-in duration-700"
            style={{
              animationDelay: `${index * 200}ms`,
              animationFillMode: "both",
            }}
          >
            {/* A. Marker (Dot) */}
            <div
              className={cn(
                "absolute -left-[9px] top-1 h-4 w-4 rounded-full transition-colors duration-300",
                index === 0 ? "bg-primary ring-4 ring-primary/20" : "bg-muted"
              )}
            />

            {/* C. Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="font-bold text-xl text-foreground">{item.role}</h3>
              <Badge
                variant="secondary"
                className="bg-primary/20 text-primary rounded-md cursor-pointer w-fit"
              >
                {item.date}
              </Badge>
            </div>

            {/* D. Details */}
            <div className="mb-4">
              <p className="font-medium text-lg text-foreground">
                {item.company}
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-1">
                {item.description}
              </p>
            </div>

            {/* E. Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {item.stack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-primary/20 text-primary rounded-md cursor-pointer"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
