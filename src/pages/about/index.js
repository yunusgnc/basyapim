import React, { useEffect } from "react";
import WhoWeAre from "../../../component/about/WhoWeAre";
import LoopSection from "../../../component/home/LoopSection";
import SectionTwo from "../../../component/about/SectionTwo";
import OurClients from "../../../component/about/OurClients";
import Intro from "../../../component/about/Intro";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromRemote } from "@/redux-toolkit/action/getDataFromRemote";

export default function index() {
  const dispatch = useDispatch();
  const dataArray = useSelector((state) => state.getData.dataArray);

  useEffect(() => {
    // Sayfa yüklendiğinde aboutHead1Get fonksiyonunu çağır
    dispatch(getDataFromRemote());
  }, []);

  const setSearchDataFunction = (data, content) => {
    if (data?.type?.includes(content)) {
      return (
        <div key={data.id}>
          {data.content.split("\n").map((line, index) => (
            <React.Fragment key={index}>{line}</React.Fragment>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <WhoWeAre data={dataArray} searchDataFunction={setSearchDataFunction} />
      <LoopSection
        data={dataArray}
        searchDataFunction={setSearchDataFunction}
      />
      <SectionTwo data={dataArray} searchDataFunction={setSearchDataFunction} />
      <OurClients data={dataArray} searchDataFunction={setSearchDataFunction} />
      <Intro data={dataArray} searchDataFunction={setSearchDataFunction} />
    </div>
  );
}
