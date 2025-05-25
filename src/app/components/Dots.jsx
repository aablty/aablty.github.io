export default function Dots({ size }) {
  const spacing = 24;
  const radius = 4;
  const svgSize = (size - 1) * spacing + radius * 2;

  const circles = [];
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      circles.push(
        <circle
          key={`${row}-${col}`}
          cx={radius + col * spacing}
          cy={radius + row * spacing}
          r={radius}
        />
      );
    }
  }

  return (
    <svg
      width="100%"
      height="100%"
      className="dots"
      viewBox={`0 0 ${svgSize} ${svgSize}`}
    >
      {circles}
    </svg>
  );
}
