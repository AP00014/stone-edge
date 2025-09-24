import { createContext, useState, useEffect, ReactNode } from 'react';
import { checkThemeAccessibility } from '../utils/themeAccessibility';
import { applyThemeWithTransition } from '../utils/themeTransition';
import { optimizedAnimation, adaptiveAnimation } from '../utils/animationOptimizer';

type Theme = 'light' | 'dark' | 'eye-care';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme && ['light', 'dark', 'eye-care'].includes(savedTheme)) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Check for system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, []);

  // Update theme when theme state changes
  useEffect(() => {
    // Apply the current theme to the document with optimized animations
    const applyTheme = adaptiveAnimation(() => {
      applyThemeWithTransition(theme);
      localStorage.setItem('theme', theme);
    });
    
    // Use optimized animation for theme changes
    optimizedAnimation(applyTheme)();
    
    // Check accessibility for the current theme
    const { passesAA, failures } = checkThemeAccessibility(theme);
    
    if (!passesAA) {
      console.warn('Accessibility issues detected in current theme:', failures);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};