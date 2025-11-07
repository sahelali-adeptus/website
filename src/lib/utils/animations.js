export function fadeInOnScroll(node, { delay = 0, duration = 600 } = {}) {
  return {
    delay,
    duration,
    css: (t, u) => `
      opacity: ${t};
      transform: translateY(${u * 30}px);
    `
  };
}

export function slideInFromLeft(node, { delay = 0, duration = 600 } = {}) {
  return {
    delay,
    duration,
    css: (t, u) => `
      opacity: ${t};
      transform: translateX(${u * -50}px);
    `
  };
}

export function slideInFromRight(node, { delay = 0, duration = 600 } = {}) {
  return {
    delay,
    duration,
    css: (t, u) => `
      opacity: ${t};
      transform: translateX(${u * 50}px);
    `
  };
}

export function scaleIn(node, { delay = 0, duration = 300 } = {}) {
  return {
    delay,
    duration,
    css: (t, u) => `
      opacity: ${t};
      transform: scale(${0.8 + t * 0.2});
    `
  };
}