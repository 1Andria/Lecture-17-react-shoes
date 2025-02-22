import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function CenterSwip({ toggler }) {
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "/firstPicture.png",
          "/secondPicture.png",
          "/thirdPicture.png",
          "/fourthPicture.png",
        ]}
      />
    </>
  );
}

export default CenterSwip;
