// Simple 3D tilt on mouse move
document.querySelectorAll('.tilt').forEach(el => {
  const strength = 12;
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - rect.left) / rect.width;
    const dy = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - dy) * strength;
    const ry = (dx - 0.5) * strength;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'none';
  });
});
