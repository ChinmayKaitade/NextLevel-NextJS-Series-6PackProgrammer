import { getUserDetail } from "@/utils/features";
import React, { Suspense } from "react";
import Posts from "./posts";
import { notFound } from "next/navigation";

// export const dynamicParams = false; --> this is by default true when we set it into false it wil not render (It is by default SSR and not SSG)

export const generateStaticParams = () => {
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
  ];
};

export const generateMetaData = async ({ params }) => {
  const user = await getUserDetail(params.id);

  return {
    title: `${user.name}'s Profile`,
  };
};

const page = async ({ params }) => {
  const user = await getUserDetail(params.id);

  if (!user.id) return notFound();

  return (
    <>
      <div className="text-2xl p-4">
        <h1>Username is:{user.name}</h1>
        <h1>Email is:{user.email}</h1>
      </div>

      <Suspense
        fallback={<div className="text-4xl p-4">Loading HeHeHe...😁</div>}
      >
        <Posts id={params.id} />
      </Suspense>
    </>
  );
};

export default page;
