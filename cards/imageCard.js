// Create an image card with a link
export function createImageCard(data) {
    const wrapper = document.createElement('div');
    wrapper.className = 'card-wrapper';
    wrapper.style.position = 'absolute';
    wrapper.style.top = data.top;
    wrapper.style.left = data.left;

    // Card Title
    const title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = data.label || '';

    // Create image element
    const img = document.createElement('img');
    img.src = data.src;
    img.alt = data.label;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.display = 'block';

    // Assemble card
    const card = document.createElement('div');
    card.className = 'card image-card';
    card.style.padding = '0';
    card.style.overflow = 'hidden';
    card.style.cursor = 'default'; // Make non-clickable

    // Responsive sizing based on viewport
    const isMobile = window.innerWidth <= 600;
    const scaleFactor = isMobile ? 1 : Math.min(window.innerWidth / 1920, 2.5); // Scale up to 2.5x on larger screens

    if (data.vertical) {
        card.style.width = `min(${390 * scaleFactor}px, 60vw)`;
        card.style.height = `min(${600 * scaleFactor}px, 70vh)`;
    } else {
        card.style.width = `min(${600 * scaleFactor}px, 90vw)`;
        card.style.height = `min(${400 * scaleFactor}px, 60vh)`;
    }

    card.appendChild(img);

    wrapper.appendChild(title);
    wrapper.appendChild(card);

    return wrapper;
} 