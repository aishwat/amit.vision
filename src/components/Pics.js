import React from "react";
import { ReactPictureGrid } from "react-picture-grid";
import { Fragment } from "react";

// import Back from "../assets/back.jpg";
import SubHeader from "./SubHeader";

let data = [];
for (let i = 1; i < 20; i++) {
  data.push({
    image: `images/img${i}.jpeg`,
    title: `img${i}`,
    description: `img${i}`,
  });
}

// console.log(data);
const Pics = () => {
  return (
    <Fragment>
      <SubHeader>My Life in Pictures</SubHeader>

      <ReactPictureGrid
        showPreview
        closeOnClick
        data={data}
        gap={20}
        backDropColor={"rgba(54, 86, 138, 0.5)"}
        // showTitle
        pattern={[
          "big",
          "small",
          "small",
          "tall",
          "tall",
          "tall",
          "small",
          "big",
          "small",
          "small",
          "tall",
          "tall",
          "big",
          "wide",
        ]}
      />
    </Fragment>
  );
};

export default Pics;
