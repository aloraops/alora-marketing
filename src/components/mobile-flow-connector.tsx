'use client';

import { useRef, useState, useEffect } from 'react';

interface FlowConnectorProps {
  /** 'converge' = 3 boxes → 1 center point, 'diverge' = 1 center point → 3 boxes */
  direction: 'converge' | 'diverge';
  color: string;
  opacity: number;
}

/**
 * Draws animated dashed SVG lines between sibling box grids.
 * Measures the actual center-x of each box in the previous/next sibling grid
 * and renders curves that converge to or diverge from the container center.
 */
export function MobileFlowConnector({ direction, color, opacity }: FlowConnectorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<number[] | null>(null);
  const [width, setWidth] = useState(0);
  const height = 40;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const parent = container.parentElement;
      if (!parent) return;

      // Find the sibling grid that contains the boxes
      // For 'converge', look at the previous sibling's grid children
      // For 'diverge', look at the next sibling's grid children
      const sibling = direction === 'converge'
        ? container.previousElementSibling
        : container.nextElementSibling;

      if (!sibling) return;

      // The sibling might be a FadeIn wrapper — find the grid inside it
      const grid = sibling.querySelector('.grid') || sibling;
      const boxes = grid.children;
      if (!boxes.length) return;

      const containerRect = container.getBoundingClientRect();
      setWidth(containerRect.width);

      const centers: number[] = [];
      for (let i = 0; i < boxes.length; i++) {
        const boxRect = boxes[i].getBoundingClientRect();
        // Center-x relative to the connector container
        centers.push(boxRect.left + boxRect.width / 2 - containerRect.left);
      }
      setPositions(centers);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(container.parentElement!);

    return () => observer.disconnect();
  }, [direction]);

  if (!positions || !width) {
    return <div ref={containerRef} className="my-2" style={{ height }} />;
  }

  const cx = width / 2; // center x of the connector

  const makePath = (boxX: number) => {
    if (direction === 'converge') {
      // From box center top → converge to container center bottom
      if (Math.abs(boxX - cx) < 2) {
        return `M ${boxX} 0 L ${cx} ${height}`;
      }
      return `M ${boxX} 0 C ${boxX} ${height * 0.6}, ${cx} ${height * 0.4}, ${cx} ${height}`;
    } else {
      // From container center top → diverge to box center bottom
      if (Math.abs(boxX - cx) < 2) {
        return `M ${cx} 0 L ${boxX} ${height}`;
      }
      return `M ${cx} 0 C ${cx} ${height * 0.6}, ${boxX} ${height * 0.4}, ${boxX} ${height}`;
    }
  };

  const durations = [2, 1.8, 2.2];

  return (
    <div ref={containerRef} className="my-2">
      <svg width={width} height={height} className="overflow-visible">
        {positions.map((boxX, i) => {
          const path = makePath(boxX);
          return (
            <g key={i}>
              <path d={path} stroke={color} strokeWidth="1.5" fill="none" opacity={opacity} strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.5s" repeatCount="indefinite" />
              </path>
              <circle r="2.5" fill={color}>
                <animateMotion dur={`${durations[i]}s`} repeatCount="indefinite" path={path} />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
