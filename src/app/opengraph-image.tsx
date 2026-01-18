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
          background: 'linear-gradient(135deg, #011A0C 0%, #3A7352 35%, #4D996D 65%, #D1EDDC 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          padding: '80px',
        }}
      >
        {/* Logo Symbol - Three circles forming triangle shape */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          {/* Top circle */}
          <div
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '70px',
              background: 'rgba(209, 237, 220, 0.9)',
              marginBottom: '-40px',
            }}
          />
          <div
            style={{
              display: 'flex',
              gap: '20px',
            }}
          >
            {/* Bottom left circle */}
            <div
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '70px',
                background: 'rgba(209, 237, 220, 0.9)',
              }}
            />
            {/* Bottom right circle */}
            <div
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '70px',
                background: 'rgba(209, 237, 220, 0.9)',
              }}
            />
          </div>
        </div>

        {/* Alora Text */}
        <div
          style={{
            fontSize: '120px',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: '#D1EDDC',
            marginTop: '20px',
          }}
        >
          Alora
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 400,
            maxWidth: '800px',
            textAlign: 'center',
            color: 'rgba(209, 237, 220, 0.9)',
            marginTop: '20px',
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
