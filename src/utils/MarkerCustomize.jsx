import React from "react";

const MarkerCustomize = () => {
  const getIcon = (colorSelection) => {
    let color;
    switch (colorSelection) {
      case "SATISFACTORY":
        color = "green";
        break;
      case "SERIOUS DEFICIENCIES":
        color = "red";
        break;
      case "MINOR DEFICIENCIES":
        color = "yellow";
        break;
      default:
        color = "gray";
        break;
    }

    const svgIcon = `
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                  <path fill="${color}" d="M18 2A11.79 11.79 0 0 0 6.22 13.73c0 4.67 2.62 8.58 4.54 11.43l.35.52a100 100 0 0 0 6.14 8l.76.89l.76-.89a100 100 0 0 0 6.14-8l.35-.53c1.91-2.85 4.53-6.75 4.53-11.42A11.79 11.79 0 0 0 18 2m0 17a6.56 6.56 0 1 1 6.56-6.56A6.56 6.56 0 0 1 18 19" class="clr-i-solid clr-i-solid-path-1"/>
                  <circle cx="18" cy="12.44" r="3.73" fill="${color}" class="clr-i-solid clr-i-solid-path-2"/>
                  <path fill="none" d="M0 0h36v36H0z"/>
                </svg>
              `;

    return new L.Icon({
      iconUrl: `data:image/svg+xml;base64,${btoa(svgIcon)}`, // Convert the dynamic SVG to base64
      iconSize: [32, 32], // Set the size of the icon
      iconAnchor: [16, 32], // Set anchor position (adjust if necessary)
      popupAnchor: [0, -32], // Adjust the popup anchor position
    });
  };
  const svgIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="#2100f8" d="M18 2A11.79 11.79 0 0 0 6.22 13.73c0 4.67 2.62 8.58 4.54 11.43l.35.52a100 100 0 0 0 6.14 8l.76.89l.76-.89a100 100 0 0 0 6.14-8l.35-.53c1.91-2.85 4.53-6.75 4.53-11.42A11.79 11.79 0 0 0 18 2m0 17a6.56 6.56 0 1 1 6.56-6.56A6.56 6.56 0 0 1 18 19" class="clr-i-solid clr-i-solid-path-1"/><circle cx="18" cy="12.44" r="3.73" fill="#2100f8" class="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>`;
  const customIcon = new L.Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(svgIcon)}`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  return { getIcon, customIcon };
};

export default MarkerCustomize;
