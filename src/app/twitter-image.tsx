import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Alora | AI-Powered Supply Chain Operations';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '30px',
          }}
        >
          {/* Triangle Logo Symbol */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 20 L80 70 L20 70 Z"
              fill="#5eead4"
              stroke="#5eead4"
              strokeWidth="2"
            />
          </svg>
          <div
            style={{
              fontSize: 80,
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            Alora
          </div>
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            maxWidth: '800px',
            textAlign: 'center',
            opacity: 0.9,
          }}
        >
          AI-Powered Supply Chain Operations
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
