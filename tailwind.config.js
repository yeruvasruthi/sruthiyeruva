/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          'ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto', 
          'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 
          'Segoe UI Emoji', 'Segoe UI Symbol'
        ],
        body: [
          'ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto', 
          'Helvetica Neue', 'Arial', 'Noto Sans'
        ]
      },
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#eaeefe',
          200: '#d7dbfb',
          300: '#b7bff7',
          400: '#8f98ef',
          500: '#6e78e6',
          600: '#565fcc',
          700: '#444ca3',
          800: '#383f82',
          900: '#313766'
        },
        blush: '#FAF3F0',     // blush beige
        lavender: '#F7F4FB',  // lavender mist
        mint: '#F0FAF6',      // mint whisper
        peach: '#FFF8F0',     // pastel peach
        rose: '#FDF7FA',      // rose cloud
        ink: '#0B0F19'        // deep ink (for strong headings)
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
        glow: "0 10px 30px rgba(110,120,230,0.25)",   // brand glow
        glass: "0 12px 40px rgba(0,0,0,0.08)"         // glassmorphism
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px'
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.5rem'
      }
    }
  },
  plugins: []
}
