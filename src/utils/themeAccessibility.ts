import { meetsWCAGAA, meetsWCAGAAA, reduceBlueLight } from './accessibility';

// Theme color combinations to check for accessibility
interface ThemeColorCheck {
  background: string;
  text: string;
  name: string;
  isLargeText?: boolean;
}

// Check all critical color combinations for a theme
export const checkThemeAccessibility = (theme: 'light' | 'dark' | 'eye-care'): {
  passesAA: boolean;
  passesAAA: boolean;
  failures: string[];
} => {
  // Get theme-specific colors
  const colors = getThemeColors(theme);
  
  // Define critical color combinations to check
  const combinations: ThemeColorCheck[] = [
    { background: colors.bgPrimary, text: colors.textPrimary, name: 'Primary text on primary background' },
    { background: colors.bgPrimary, text: colors.textSecondary, name: 'Secondary text on primary background' },
    { background: colors.bgSecondary, text: colors.textPrimary, name: 'Primary text on secondary background' },
    { background: colors.bgAccent, text: colors.textPrimary, name: 'Primary text on accent background' },
    { background: colors.buttonBg, text: colors.buttonText, name: 'Button text on button background', isLargeText: true },
  ];
  
  // Check each combination
  const failures: string[] = [];
  let passesAA = true;
  let passesAAA = true;
  
  combinations.forEach(combo => {
    const aa = meetsWCAGAA(combo.background, combo.text, combo.isLargeText);
    const aaa = meetsWCAGAAA(combo.background, combo.text, combo.isLargeText);
    
    if (!aa) {
      passesAA = false;
      failures.push(`${combo.name} fails WCAG AA contrast requirements`);
    } else if (!aaa) {
      passesAAA = false;
      failures.push(`${combo.name} fails WCAG AAA contrast requirements`);
    }
  });
  
  return { passesAA, passesAAA, failures };
};

// Get colors for a specific theme
const getThemeColors = (theme: 'light' | 'dark' | 'eye-care') => {
  switch (theme) {
    case 'light':
      return {
        bgPrimary: '#FFFFFF',
        bgSecondary: '#F8F8F8',
        bgAccent: '#EEEEEE',
        textPrimary: '#333333',
        textSecondary: '#666666',
        buttonBg: '#FF6B00',
        buttonText: '#FFFFFF',
      };
    case 'dark':
      return {
        bgPrimary: '#121212',
        bgSecondary: '#1E1E1E',
        bgAccent: '#2A2A2A',
        textPrimary: '#E0E0E0',
        textSecondary: '#A0A0A0',
        buttonBg: '#FF6B00',
        buttonText: '#FFFFFF',
      };
    case 'eye-care':
      return {
        bgPrimary: '#F8F5E6',
        bgSecondary: '#EAE6D7',
        bgAccent: '#F0ECD9',
        textPrimary: '#333333',
        textSecondary: '#555555',
        buttonBg: '#D95A00',
        buttonText: '#FFFFFF',
      };
  }
};

// Apply blue light reduction to a theme's colors
export const applyBlueReduction = (colors: Record<string, string>, percentage: number = 30): Record<string, string> => {
  const result: Record<string, string> = {};
  
  for (const [key, value] of Object.entries(colors)) {
    result[key] = reduceBlueLight(value, percentage);
  }
  
  return result;
};