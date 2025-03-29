import { getAllUsers } from "@/utils/features";
import Link from "next/link";

export const metadata = {
  title: "Users",
};

const Home = async ({ params }) => {
  const users = await getAllUsers(params.id);
  // console.log("users", users);

  return (
    <div>
      <h1 className="text-4xl text-center mt-2">Homepage Component</h1>
      <div className="flex flex-col p-4 text-2xl">
        {users?.map((i) => (
          <Link key={i.id} href={`/user/${i.id}`}>
            {i.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
