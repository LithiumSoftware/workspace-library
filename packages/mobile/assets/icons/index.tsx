import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  fill?: string;
  path?: string;
  width?: number;
  height?: number;
  viewBox?: string;
}

const Icon = ({
  fill,
  path,
  width = 24,
  height = 24,
  viewBox = "0 0 22 22",
}: IconProps) => (
  <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
    <Path d={path} />
  </Svg>
);

export default Icon;

export const ChevronDown = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42z"
  />
);

export const ChevronRight = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"
  />
);

export const File = ({ fill = "#5C5C5C" }: IconProps) => (
  <Icon
    fill={fill}
    path="M6, 2A2, 2 0 0, 0 4, 4V20A2, 2 0 0, 0 6, 22H18A2, 2 0 0, 0 20, 20V8L14, 2H6M6, 4H13V9H18V20H6V4M8, 12V14H16V12H8M8, 16V18H13V16H8Z"
  />
);

export const FilePlus = ({ fill = "#E09503" }: IconProps) => (
  <Icon
    fill={fill}
    path="M12,14V11H10V14H7V16H10V19H12V16H15V14M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18"
    width={22}
    height={22}
    viewBox={"0 0 16 24"}
  />
);

export const Plus = ({ fill = "#757575" }: IconProps) => (
  <Icon fill={fill} path="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
);

// Password Icons
export const Eye = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
  />
);

export const EyeOff = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"
  />
);

// Header Icons
export const Menu = ({ fill = "#000" }: IconProps) => (
  <Icon fill={fill} path="M3, 6H21V8H3V6M3, 11H21V13H3V11M3, 16H21V18H3V16Z" />
);

export const Heart = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
  />
);

export const Search = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
  />
);

export const Save = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
  />
);

export const Edit = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
  />
);

export const Dot = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"
  />
);

export const Exit = ({ fill = "#757575" }: IconProps) => (
  <Icon
    fill={fill}
    path="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z"
  />
);
