import React, { useEffect } from "react";
import BackgroundVideoComponent from "../../component/home/TopDivVideoSection";
import LoopSection from "../../component/home/LoopSection";
import LatestWorksComponent from "../../component/home/LatestWorksComponent";
import SectionFour from "../../component/home/SectionFour";
import TextLinesComponent from "../../component/home/TextLinesComponent";
import TransitionDiv from "../../component/animate-single-div/TransitionDiv";
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
      <TransitionDiv
        data={dataArray}
        searchDataFunction={setSearchDataFunction}
      />
      <BackgroundVideoComponent
        data={dataArray}
        searchDataFunction={setSearchDataFunction}
      />
      <LoopSection
        data={dataArray}
        searchDataFunction={setSearchDataFunction}
      />
      <LatestWorksComponent
        data={dataArray}
        searchDataFunction={setSearchDataFunction}
      />
      <SectionFour
        data={dataArray}
        searchDataFunction={setSearchDataFunction}
      />
      <TextLinesComponent
        data={dataArray}
        searchDataFunction={setSearchDataFunction}
      />
    </div>
  );
}
