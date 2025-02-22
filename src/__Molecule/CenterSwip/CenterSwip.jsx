import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function CenterSwip() {
  const [toggler, setToggler] = useState(true);

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>zoom</button>
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
