// Versatile scroll-reveal Svelte action
export function reveal(node, {
  delay    = 0,
  duration = 900,
  y        = 32,
  x        = 0,
  scale    = 0.97,
  once     = true,
  threshold = 0.1,
} = {}) {
  node.style.opacity   = '0';
  node.style.transform = `translateY(${y}px) translateX(${x}px) scale(${scale})`;
  node.style.transition = [
    `opacity ${duration}ms cubic-bezier(.22,1,.36,1) ${delay}ms`,
    `transform ${duration}ms cubic-bezier(.22,1,.36,1) ${delay}ms`,
  ].join(', ');
  node.style.willChange = 'opacity, transform';

  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) {
      node.style.opacity   = '1';
      node.style.transform = 'translateY(0) translateX(0) scale(1)';
      if (once) io.disconnect();
    }
  }, { threshold });

  io.observe(node);
  return { destroy: () => io.disconnect() };
}
