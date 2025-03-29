import { getUserPost } from "@/utils/features";
import React from "react";

const Posts = async ({ id }) => {
  const posts = await getUserPost(id);

  return (
    <div className="p-4">
      {posts?.map((i) => (
        <h1 className="text-gray-700 text-xl" key={i.id}>
          {i.title}
        </h1>
      ))}
    </div>
  );
};

export default Posts;
