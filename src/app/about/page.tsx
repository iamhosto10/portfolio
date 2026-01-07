import MyStoryCard from "@/components/MyStoryCard/MyStoryCard";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";

const page = () => {
  return (
    <main className="min-h-screen bg-background/50">
      <ProfileHeader />
      <MyStoryCard />
    </main>
  );
};

export default page;
