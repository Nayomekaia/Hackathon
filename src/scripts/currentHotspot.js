document.querySelector('form').addEventListener('change', (e) => {
  const selectedId = e.target.id;
  const allHotspots = document.querySelectorAll('.hotspot');
  
  if (selectedId === 'default') {
    // Toon alles
    allHotspots.forEach((el) => {
      el.style.opacity = '1';
      el.style.pointerEvents = 'auto';
    });
  } else {
    // Haal index (component-1 → 0, component-2 → 1, etc.)
    const index = parseInt(selectedId.replace('component-', '')) - 1;
    
    allHotspots.forEach((el, i) => {
      if (i === index) {
        el.style.opacity = '1';
        el.style.pointerEvents = 'auto';
      } else {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
      }
    });
  }
});