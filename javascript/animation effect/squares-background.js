(function () {
    const canvas = document.getElementById('squaresCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let requestId;
    const squareSize = 100;
    const speed = 0.5;
    const direction = "diagonal";
    const borderColor = "#ffffff4d";
    const hoverFillColor = "#222";

    let hoveredSquare = null;
    let offset = { x: 0, y: 0 };

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const startX = Math.floor(offset.x / squareSize) * squareSize;
        const startY = Math.floor(offset.y / squareSize) * squareSize;

        for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
            for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
                const drawX = x - (offset.x % squareSize);
                const drawY = y - (offset.y % squareSize);

                if (hoveredSquare && Math.floor((x - startX) / squareSize) === hoveredSquare.x && Math.floor((y - startY) / squareSize) === hoveredSquare.y) {
                    ctx.fillStyle = hoverFillColor;
                    ctx.fillRect(drawX, drawY, squareSize, squareSize);
                }

                ctx.strokeStyle = borderColor;
                ctx.strokeRect(drawX, drawY, squareSize, squareSize);
            }
        }

        const gradient = ctx.createRadialGradient(
            canvas.width / 2,
            canvas.height / 2,
            0,
            canvas.width / 2,
            canvas.height / 2,
            Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
        );
        gradient.addColorStop(0, "rgba(0,0,0,0)");
        gradient.addColorStop(1, "#060010");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
        const spd = Math.max(speed, 0.1);
        switch (direction) {
            case "right":
                offset.x = (offset.x - spd + squareSize) % squareSize;
                break;
            case "left":
                offset.x = (offset.x + spd + squareSize) % squareSize;
                break;
            case "up":
                offset.y = (offset.y + spd + squareSize) % squareSize;
                break;
            case "down":
                offset.y = (offset.y - spd + squareSize) % squareSize;
                break;
            case "diagonal":
                offset.x = (offset.x - spd + squareSize) % squareSize;
                offset.y = (offset.y - spd + squareSize) % squareSize;
                break;
        }

        draw();
        requestId = requestAnimationFrame(animate);
    };

    canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const hoveredX = Math.floor((mouseX + offset.x) / squareSize);
        const hoveredY = Math.floor((mouseY + offset.y) / squareSize);
        hoveredSquare = { x: hoveredX, y: hoveredY };
    });

    canvas.addEventListener("mouseleave", () => {
        hoveredSquare = null;
    });

    animate();
})();