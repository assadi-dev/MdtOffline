import React from "react";
import { ButtonContainer, SwitchIcon } from "./SwitchButton.styled";

const SwitchButton = ({
  value,
  onChange,
  checked,
  sliderStyle,
  switchStyle,
  sliderClass,
  switchClass,
  sliderOnColor,
  sliderOffColor,
}) => {
  const switch_class = ["switch"];
  switchClass ? switchClass.push(switchClass) : switchClass;

  return (
    <ButtonContainer style={sliderStyle} className={sliderClass}>
      <input
        type="checkbox"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <SwitchIcon
        className={switch_class.join(" ")}
        style={switchStyle}
        sliderOffColor={sliderOffColor}
        sliderOnColor={sliderOnColor}
      ></SwitchIcon>
    </ButtonContainer>
  );
};

export default SwitchButton;
