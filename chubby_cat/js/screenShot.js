document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("screenShots-container");
    
    const imageCount = 10; 
    const imagePath = "images/screenShot-";
    const imageExt = ".png";

    for (let i = 0; i < imageCount; i++) {
        const item = document.createElement("div");
        item.className = "screenShot-item";
        item.innerHTML = `
            <div class="screenShot-card">
                <div class="screenShot-image">
                    <img src="${imagePath}${String(i).padStart(2, "0")}${imageExt}" alt="screenShot">
                </div>
            </div>
        `;
        container.appendChild(item);
    }
});