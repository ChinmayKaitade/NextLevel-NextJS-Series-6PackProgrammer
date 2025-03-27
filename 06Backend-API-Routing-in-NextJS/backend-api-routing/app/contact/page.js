import React from "react";
import Contact from "./contact";
import ServerComponent from "@/components/servers/ServerComponent";

const page = () => {
  return (
    <div>
      <Contact value={"Next Level NextJS Series"}>
        <ServerComponent />
      </Contact>
    </div>
  );
};

export default page;
