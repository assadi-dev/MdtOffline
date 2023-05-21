import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const LoadingCivilPhoto = () => {
  const values = {
    width: "100px",
    height: "100px",
    borderRadius: "5px",
    border: "1px solid var(--color-primary-button-opacity)",
    background: "#17181E",
  };

  return (
    <SkeletonTheme
      baseColor="#2C3748"
      highlightColor="#2B7DE950"
      height={values.height}
      width={values.width}
      borderRadius={3}
    >
      <p>
        <Skeleton style={{ boxShadow: "0px 0px 5px 3px #2B7DE920 " }} />
      </p>
    </SkeletonTheme>
  );
};

export default LoadingCivilPhoto;
