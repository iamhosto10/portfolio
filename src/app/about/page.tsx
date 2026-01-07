import CallToAction from "@/components/CallToAction/CallToAction";
import CorePrinciples from "@/components/CorePrinciples/CorePrinciples";
import ExperienceSection from "@/components/ExperenciaSection/ExperienceSection";
import MyStoryCard from "@/components/MyStoryCard/MyStoryCard";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import { TechnicalArsenal } from "@/components/TechnicalArsenal/TechnicalArsenal";

const page = () => {
  return (
    <main className="min-h-screen bg-background/50">
      <ProfileHeader />
      <MyStoryCard />
      <CorePrinciples />
      <ExperienceSection />
      <TechnicalArsenal />
      <CallToAction />
    </main>
  );
};

export default page;
