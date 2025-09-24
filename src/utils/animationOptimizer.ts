/**
 * Animation Optimizer Utility
 * 
 * This utility provides functions to optimize animations for better performance
 * by leveraging browser capabilities and reducing unnecessary repaints/reflows.
 */

/**
 * Optimizes elements for animation by setting appropriate properties
 * @param elements - DOM elements to optimize
 * @param properties - CSS properties that will be animated
 */
export const prepareForAnimation = (elements: Element | Element[] | NodeListOf<Element>, properties: string[] = ['transform', 'opacity']) => {
  const elementsArray = elements instanceof Element ? [elements] : Array.from(elements);
  
  elementsArray.forEach(element => {
    // Set will-change for properties that will be animated
    element.setAttribute('style', `will-change: ${properties.join(', ')}`);
  });
  
  // Force a reflow before animation starts
  // This helps ensure the will-change property is applied before animation begins
  window.getComputedStyle(elementsArray[0]).getPropertyValue('opacity');
};

/**
 * Cleans up after animation completes to free browser resources
 * @param elements - DOM elements to clean up
 * @param delay - Time in ms to wait before cleanup (should match or exceed animation duration)
 */
export const cleanupAfterAnimation = (elements: Element | Element[] | NodeListOf<Element>, delay: number = 300) => {
  const elementsArray = elements instanceof Element ? [elements] : Array.from(elements);
  
  setTimeout(() => {
    elementsArray.forEach(element => {
      // Remove will-change property to free up resources
      element.setAttribute('style', element.getAttribute('style')?.replace(/will-change[^;]+;?/, '') || '');
    });
  }, delay);
};

/**
 * Throttles animations when device is in battery saving mode or has reduced motion preferences
 * @param callback - Function that performs the animation
 * @returns A function that either runs the animation or a simplified version based on user preferences
 */
export const adaptiveAnimation = (callback: Function) => {
  return (...args: any[]) => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check for battery saving mode if available
    const isBatterySaving = 'getBattery' in navigator && 
      (navigator as any).getBattery?.().then((battery: any) => battery.charging === false && battery.level < 0.2);
    
    // If user prefers reduced motion or is in battery saving mode, simplify animation
    if (prefersReducedMotion || isBatterySaving) {
      // Run a simplified version or skip animation entirely
      return;
    }
    
    // Otherwise, run the full animation
    return callback(...args);
  };
};

/**
 * Optimizes animations by using requestAnimationFrame for smoother performance
 * @param animationFunction - Function containing animation logic
 * @returns A function that runs the animation optimized with requestAnimationFrame
 */
export const optimizedAnimation = (animationFunction: Function) => {
  return (...args: any[]) => {
    return window.requestAnimationFrame(() => {
      animationFunction(...args);
    });
  };
};

/**
 * Detects if the browser supports hardware acceleration for animations
 * @returns Boolean indicating if hardware acceleration is available
 */
export const supportsHardwareAcceleration = (): boolean => {
  // Check for transform3d support as a proxy for hardware acceleration
  const el = document.createElement('div');
  el.style.cssText = 'transform: translate3d(0, 0, 0)';
  return !!el.style.length;
};

/**
 * Applies hardware acceleration hints to elements when supported
 * @param elements - DOM elements to apply hardware acceleration to
 */
export const applyHardwareAcceleration = (elements: Element | Element[] | NodeListOf<Element>) => {
  if (!supportsHardwareAcceleration()) return;
  
  const elementsArray = elements instanceof Element ? [elements] : Array.from(elements);
  
  elementsArray.forEach(element => {
    const currentTransform = window.getComputedStyle(element).getPropertyValue('transform');
    const hasTransform = currentTransform && currentTransform !== 'none';
    
    // Apply transform that triggers hardware acceleration without changing appearance
    if (hasTransform) {
      (element as HTMLElement).style.transform += ' translateZ(0)';
    } else {
      (element as HTMLElement).style.transform = 'translateZ(0)';
    }
  });
};