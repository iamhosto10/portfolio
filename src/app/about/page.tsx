import CorePrinciples from "@/components/CorePrinciples/CorePrinciples";
import MyStoryCard from "@/components/MyStoryCard/MyStoryCard";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";

const page = () => {
  return (
    <main className="min-h-screen bg-background/50">
      <ProfileHeader />
      <MyStoryCard />
      <CorePrinciples />
    </main>
  );
};

export default page;
