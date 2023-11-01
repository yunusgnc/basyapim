import React from "react";
import WorkDetails from "../../../component/projects/WorkDetails";
import WorkFrame from "../../../component/projects/WorkFrame";
import LoopSection from "../../../component/home/LoopSection";
import SectionThree from "../../../component/projects/SectionThree";
import Awards from "../../../component/projects/Awards";

export default function index() {
  return (
    <div>
      <WorkDetails />
      <WorkFrame />
      <LoopSection />
      <SectionThree />
      <Awards />
    </div>
  );
}
