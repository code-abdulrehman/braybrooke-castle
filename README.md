Heritage Trail Viewer - Installation and Customization Guide

<img src="./qr.png" />
This is a mobile-friendly web application that overlays historic images on a live camera feed.

📱 Requirements:
- Modern smartphone with a web browser
- Camera permissions enabled
- Landscape orientation

🔧 How to Customize:

1. Replacing the Overlay Image:
   - Replace 'overlay.webp' with your new image
   - Keep the same filename or update the src in index.html
   - Recommended image size: 1920x1080px or similar aspect ratio

2. Updating the Caption:
   - Open index.html
   - Find the <div id="captionBox"> section
   - Update the <h2> title and <p> paragraph text

3. Testing:
   - Test on multiple devices
   - Ensure image scales properly
   - Check readability of caption text

4. Deployment:
   - Upload all files to your web server
   - Maintain the folder structure:

   | File | Purpose |
   |------|---------|
   | `index.html` | Main HTML structure and content |
   | `overlay.webp` | Historic image overlay |
   | `script.js` | Application functionality |
   | `style.css` | Styling and layout |


📝 Notes:
- The app enforces landscape orientation
- Sliders are touch-friendly
- Left slider controls overlay opacity
- Right slider reveals caption
- Download button captures the current view

For technical support or questions, please contact the developer.
