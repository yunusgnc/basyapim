import React from "react";
import BackgroundVideoComponent from "../../component/home/TopDivVideoSection";
import LoopSection from "../../component/home/LoopSection";
import LatestWorksComponent from "../../component/home/LatestWorksComponent";
import SectionFour from "../../component/home/SectionFour";
import TextLinesComponent from "../../component/home/TextLinesComponent";
import TransitionDiv from "../../component/animate-single-div/TransitionDiv";

export default function index() {
  return (
    <div>
      <TransitionDiv />
      <BackgroundVideoComponent />
      <LoopSection />
      <LatestWorksComponent />
      <SectionFour />
      <TextLinesComponent />
    </div>
  );
}
