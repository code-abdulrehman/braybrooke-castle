const container = document.getElementById('container');
const rotatePrompt = document.getElementById('rotate-prompt');

function checkOrientation() {
  if (window.innerWidth > window.innerHeight) {
    rotatePrompt.style.display = 'none';
    container.style.display = 'block';
  } else {
    rotatePrompt.style.display = 'flex';
    container.style.display = 'none';
  }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', () => {
  checkOrientation();
  startCamera();
});

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" }
      },
      audio: false
    });
    const video = document.getElementById('videoElement');
    video.srcObject = stream;
  } catch (err) {
    alert("Camera access denied or unavailable.");
  }
}

document.getElementById('opacitySlider').addEventListener('input', function () {
  const overlay = document.getElementById('overlayImage');
  overlay.style.opacity = this.value / 100;
});

document.getElementById('captionSlider').addEventListener('input', function () {
  const caption = document.getElementById('captionBox');
  if (this.value > 0) {
    caption.style.display = 'block';
    caption.style.opacity = this.value / 100;
  } else {
    caption.style.display = 'none';
  }
});

document.getElementById('downloadBtn').addEventListener('click', async function() {
  const container = document.getElementById('container');
  const video = document.getElementById('videoElement');
  const overlay = document.getElementById('overlayImage');

  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
  const ctx = canvas.getContext('2d');

  // Draw the video frame
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Create a temporary image to draw the overlay
  const tempImg = new Image();
  tempImg.src = overlay.src;
  
  // Wait for the image to load
  await new Promise(resolve => {
    tempImg.onload = resolve;
  });

  // Draw the overlay with current opacity
  ctx.globalAlpha = parseFloat(overlay.style.opacity) || 0.5;
  ctx.drawImage(tempImg, 0, 0, canvas.width, canvas.height);

  // Create download link
  const link = document.createElement('a');
  link.download = 'braybrooke-castle-view.jpg';
  link.href = canvas.toDataURL('image/jpeg', 0.9);
  link.click();
});
