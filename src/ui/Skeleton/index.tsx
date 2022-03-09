import React from "react";
import { AnimatedBackground } from "ui/Skeleton/styles";

interface SkeletonProps {
  width: number;
  height: number;
}

export const Skeleton = ({ width, height, ...props }: SkeletonProps) => {
  return <AnimatedBackground height={height} width={width} {...props} />;
};
