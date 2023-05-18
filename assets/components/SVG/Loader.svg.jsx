import React from "react";

export const BarLoading = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <rect x="17.5" y="30" width="15" height="40" fill="currentColor">
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="18;30;30"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.2s"
        ></animate>
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="64;40;40"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.2s"
        ></animate>
      </rect>
      <rect x="42.5" y="30" width="15" height="40" fill="currentColor">
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="20.999999999999996;30;30"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.1s"
        ></animate>
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="58.00000000000001;40;40"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.1s"
        ></animate>
      </rect>
      <rect x="67.5" y="30" width="15" height="40" fill="currentColor">
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="20.999999999999996;30;30"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        ></animate>
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="58.00000000000001;40;40"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        ></animate>
      </rect>
    </svg>
  );
};

export const CkeckValidateIconOutline = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.2 130.2"
    >
      <circle
        className="path circle"
        fill="none"
        stroke="#73AF55"
        strokeWidth="6"
        strokeMiterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <polyline
        className="path check"
        fill="none"
        stroke="#73AF55"
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        points="100.2,40.2 51.5,88.8 29.8,67.5 "
      />
    </svg>
  );
};

export const CkeckErrorIconOutline = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.2 130.2"
    >
      <circle
        className="path circle"
        fill="none"
        stroke="#D06079"
        strokeWidth="6"
        strokeMiterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <line
        className="path line"
        fill="none"
        stroke="#D06079"
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="34.4"
        y1="37.9"
        x2="95.8"
        y2="92.3"
      />
      <line
        className="path line"
        fill="none"
        stroke="#D06079"
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="95.8"
        y1="38"
        x2="34.4"
        y2="92.2"
      />
    </svg>
  );
};

export const DotTyping = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle cx="4" cy="12" r="3" fill="currentColor">
        <animate
          id="svgSpinners3DotsFade0"
          fill="freeze"
          attributeName="opacity"
          begin="0;svgSpinners3DotsFade1.end-0.25s"
          dur="0.75s"
          values="1;.2"
        />
      </circle>
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity=".4">
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="svgSpinners3DotsFade0.begin+0.15s"
          dur="0.75s"
          values="1;.2"
        />
      </circle>
      <circle cx="20" cy="12" r="3" fill="currentColor" opacity=".3">
        <animate
          id="svgSpinners3DotsFade1"
          fill="freeze"
          attributeName="opacity"
          begin="svgSpinners3DotsFade0.begin+0.3s"
          dur="0.75s"
          values="1;.2"
        />
      </circle>
    </svg>
  );
};
