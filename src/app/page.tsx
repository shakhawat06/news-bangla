import MainNews from "@/components/MainNews";
import Marque from "@/components/Marque";

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles
  
  return (
    <div className="">
      <Marque />

      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />
        </div>

        {/* most read section */}
        <div className="bg-green-600 col-span-1"></div>
      </div>
    </div>
  );
}
