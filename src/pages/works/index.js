import React, { useEffect } from "react";
import VideoBackground from "../../../component/works/TopBanner";
import WorksBanner from "../../../component/works/WorksBanner";
import OurProcess from "../../../component/works/OurProcess";
import Lastsection from "../../../component/works/Lastsection";
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
      <VideoBackground
        data={dataArray}
        searchDataFunction={setSearchDataFunction}
      />
      <WorksBanner
        data={dataArray}
        searchDataFunction={setSearchDataFunction}
      />
      <OurProcess data={dataArray} searchDataFunction={setSearchDataFunction} />
      <Lastsection
        data={dataArray}
        searchDataFunction={setSearchDataFunction}
      />
    </div>
  );
}
