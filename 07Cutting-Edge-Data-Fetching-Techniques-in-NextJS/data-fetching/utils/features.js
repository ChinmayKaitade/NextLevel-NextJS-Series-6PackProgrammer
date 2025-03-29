export const getAllUsers = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  if (!res.ok) throw new Error("Something Went Wrong");

  return await res.json();
};

export const getUserDetail = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) throw new Error("Something Went Wrong");

  return await res.json();
};

export const getUserPost = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  if (!res.ok) throw new Error("Something Went Wrong");

  const data = await res.json();

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
};

export const getAllPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  if (!res.ok) throw new Error("Something Went Wrong");

  return await res.json();
};
