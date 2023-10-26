import React from "react";
import VideoBackground from "../../../component/works/TopBanner";
import WorksBanner from "../../../component/works/WorksBanner";
import OurProcess from "../../../component/works/OurProcess";
import Lastsection from "../../../component/works/Lastsection";

export default function index() {
  return (
    <div>
      <VideoBackground />
      <WorksBanner />
      <OurProcess />
      <Lastsection />
    </div>
  );
}
