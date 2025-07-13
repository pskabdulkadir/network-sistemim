import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Spiritual Theme Colors
        "spiritual-turquoise": {
          DEFAULT: "hsl(var(--spiritual-turquoise))",
          light: "hsl(var(--spiritual-turquoise-light))",
          dark: "hsl(var(--spiritual-turquoise-dark))",
          50: "hsl(185, 90%, 95%)",
          100: "hsl(185, 85%, 90%)",
          200: "hsl(185, 80%, 80%)",
          300: "hsl(185, 75%, 70%)",
          400: "hsl(185, 70%, 55%)",
          500: "hsl(185, 85%, 35%)",
          600: "hsl(185, 85%, 30%)",
          700: "hsl(185, 85%, 25%)",
          800: "hsl(185, 85%, 20%)",
          900: "hsl(185, 85%, 15%)",
        },
        "spiritual-purple": {
          DEFAULT: "hsl(var(--spiritual-purple))",
          light: "hsl(var(--spiritual-purple-light))",
          dark: "hsl(var(--spiritual-purple-dark))",
          50: "hsl(270, 60%, 95%)",
          100: "hsl(270, 55%, 90%)",
          200: "hsl(270, 50%, 80%)",
          300: "hsl(270, 45%, 70%)",
          400: "hsl(270, 65%, 60%)",
          500: "hsl(270, 65%, 55%)",
          600: "hsl(270, 65%, 45%)",
          700: "hsl(270, 65%, 35%)",
          800: "hsl(270, 65%, 25%)",
          900: "hsl(270, 65%, 15%)",
        },
        "spiritual-gold": {
          DEFAULT: "hsl(var(--spiritual-gold))",
          light: "hsl(var(--spiritual-gold-light))",
          dark: "hsl(var(--spiritual-gold-dark))",
          50: "hsl(45, 90%, 95%)",
          100: "hsl(45, 85%, 90%)",
          200: "hsl(45, 80%, 80%)",
          300: "hsl(45, 75%, 70%)",
          400: "hsl(45, 85%, 65%)",
          500: "hsl(45, 85%, 55%)",
          600: "hsl(45, 85%, 45%)",
          700: "hsl(45, 85%, 35%)",
          800: "hsl(45, 85%, 25%)",
          900: "hsl(45, 85%, 15%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "spiritual-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(70, 200, 180, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(70, 200, 180, 0.6)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-6px)",
          },
        },
        "pulse-spiritual": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.8",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spiritual-glow": "spiritual-glow 3s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-spiritual": "pulse-spiritual 2s ease-in-out infinite",
      },
      backgroundImage: {
        "peaceful-gradient": "var(--peaceful-gradient)",
        "spiritual-gradient": "var(--spiritual-gradient)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
