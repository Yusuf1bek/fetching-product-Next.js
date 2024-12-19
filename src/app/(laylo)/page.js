import Hero from "@/components/Hero";
import { memo } from "react";

function Home() {
  return (
    <div className="">
      <Hero/>
    </div>
  );
}

export default memo(Home)
