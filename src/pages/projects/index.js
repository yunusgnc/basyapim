import React, { useEffect } from "react";
import WorkDetails from "../../../component/projects/WorkDetails";
import WorkFrame from "../../../component/projects/WorkFrame";
import LoopSection from "../../../component/home/LoopSection";
import SectionThree from "../../../component/projects/SectionThree";
import Awards from "../../../component/projects/Awards";
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
      <WorkDetails
        data={dataArray}
        searchDataFunction={setSearchDataFunction}
      />
      <WorkFrame data={dataArray} searchDataFunction={setSearchDataFunction} />
      <LoopSection
        data={dataArray}
        searchDataFunction={setSearchDataFunction}
      />
      <SectionThree
        data={dataArray}
        searchDataFunction={setSearchDataFunction}
      />
      <Awards data={dataArray} searchDataFunction={setSearchDataFunction} />
    </div>
  );
}
