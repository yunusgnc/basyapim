import React, { useEffect } from "react";
import TopBanner from "../../../component/blog/TopBanner";
import BlogSlider from "../../../component/blog/BlogSlider";
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
      <TopBanner data={dataArray} searchDataFunction={setSearchDataFunction} />
      <BlogSlider data={dataArray} searchDataFunction={setSearchDataFunction} />
    </div>
  );
}
