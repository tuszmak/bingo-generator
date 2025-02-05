/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
		backgroundImage: {
			'radial-gradient': 'radial-gradient(#3C60FF, #1936B6)'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

