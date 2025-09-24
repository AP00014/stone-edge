/**
 * Utility functions for managing smooth theme transitions
 */
import { prepareForAnimation, cleanupAfterAnimation, optimizedAnimation, applyHardwareAcceleration } from './animationOptimizer';

/**
 * Adds a class to optimize performance during theme transitions
 */
export const startThemeTransition = optimizedAnimation(() => {
  const root = document.documentElement;
  // Prepare the document for animation with will-change optimization
  prepareForAnimation(root, ['background-color', 'color', 'border-color', 'box-shadow']);
  // Apply hardware acceleration when supported
  applyHardwareAcceleration(root);
  // Add transition class
  root.classList.add('theme-transition-active');
});

/**
 * Removes the optimization class after transition completes
 */
export const endThemeTransition = (): void => {
  const root = document.documentElement;
  // Use requestAnimationFrame to ensure class is removed after transition completes
  requestAnimationFrame(() => {
    // Get transition duration from CSS variable
    const transitionDuration = getComputedStyle(root)
      .getPropertyValue('--theme-transition-duration')
      .trim();
      
    // Convert to milliseconds (assuming ms unit)
    const durationMs = parseFloat(transitionDuration) || 300;
    
    // Remove class after transition completes
    setTimeout(() => {
      root.classList.remove('theme-transition-active');
      // Clean up performance optimizations
      cleanupAfterAnimation(root, 100);
    }, durationMs);
  });
};

// Apply theme with transition
export const applyThemeWithTransition = (theme: string): void => {
  // Start transition optimizations
  startThemeTransition();
  
  // Apply theme
  document.documentElement.setAttribute('data-theme', theme);
  
  // End transition optimizations
  endThemeTransition();
};