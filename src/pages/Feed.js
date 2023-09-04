import React, { useContext, useEffect } from "react";

import { DataContext } from "../context/contextApi";
import LeftNav from "../components/LeftNav";
import VideoCard from "../components/VideoCard";
import ShimmerVideoCard from "../shared/ShimmerVideoCard";

const Feed = ({ item }) => {
  const { loading, searchResults } = useContext(DataContext);
  const { selectedCategory, setSelectedCategory } = useContext(DataContext);
  // console.log("from feed", searchResults);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex h-[calc(100%-56px)]">
      <LeftNav
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black p-5">
        <div className="flex items-center h-10  text-black dark:text-white   bg-white/[0.15] md:bg-black/[0.15] dark:bg-white/[0.15] rounded-lg  text-2xl font-bold mb-5 p-8">
          {selectedCategory}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {loading
            ? Array(24)
                .fill("")
                .map((e, index) => {
                  return <ShimmerVideoCard key={index} />;
                })
            : searchResults.map((item, index) => {
                if (item.type !== "video") return false;
                return <VideoCard key={index} video={item?.video} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
