import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-white text-4xl text-center mt-4">
        Homepage Component
      </h1>
      <p className="w-[800px] mx-auto text-center mt-2 text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nostrum
        corrupti sequi libero maxime iure pariatur necessitatibus? Quam qui vel
        asperiores quidem sapiente.{" "}
      </p>
      <div className="text-center mt-2">
        <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-lg">
          NextJS Docs
        </button>
      </div>
    </div>
  );
}
