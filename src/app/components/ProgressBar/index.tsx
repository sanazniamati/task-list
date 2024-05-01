/** @format */

import { FC } from "react";
import { ProgressWrapper } from "./style";
interface ProgressProps {
  strokeWidth: number;
  sqSize: number;
  percentage?: number;
}

const ProgressBar: FC<ProgressProps> = ({ strokeWidth, sqSize, percentage }) => {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100;
  return (
    <ProgressWrapper>
      <svg width={sqSize} height={sqSize} viewBox={viewBox} className="circular-progressbar">
        <circle
          className="circle-background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className="circle-progress"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
    </ProgressWrapper>
  );
};
export default ProgressBar;
