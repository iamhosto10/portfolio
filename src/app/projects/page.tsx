import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import PastProjects from "@/components/PastProjects/PastProjects";

const page = () => {
  return (
    <main className="min-h-screen bg-background/50">
      <FeaturedProjects />
      <PastProjects />
    </main>
  );
};

export default page;
