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
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          fill="none"
          className="circle-background"
        />
        <circle
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          fill="none"
          strokeDasharray={dashArray}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          className="circle-progress"
          style={{
            // strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
    </ProgressWrapper>
  );
};
export default ProgressBar;
