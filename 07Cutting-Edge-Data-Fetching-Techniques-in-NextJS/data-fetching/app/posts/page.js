import { getAllPosts } from "@/utils/features";
import React from "react";

const page = async () => {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col p-2 my-2">
      {posts?.map((i) => (
        <h1 className="text-gray-700 text-xl" key={i.id}>
          {i.title}
        </h1>
      ))}
    </div>
  );
};

export default page;
