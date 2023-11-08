import React, { useEffect } from "react";
import ContactUs from "../../../component/contact-us/ContactUs";
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
      <ContactUs data={dataArray} searchDataFunction={setSearchDataFunction} />
    </div>
  );
}
