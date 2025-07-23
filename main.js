    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const spriteImg = new Image();
    spriteImg.src = 'FlashLookin.svg'

    const sprite = {
      x: canvas.width / 2,
      y: canvas.height - 130,
      width: 40,
      height: 20,
      angle: 90 // starting direction
    };

    const mouse = { x: sprite.x, y: sprite.y };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate movement deltas
      const dx = (mouse.x - sprite.x) / 6;
      const dy = (mouse.y - sprite.y) / 6;

      sprite.x += dx;
      sprite.y += dy;

      // Calculate direction (limited to horizontal influence like Scratch block)
      const angleChange = (mouse.x - sprite.x) / 4;
      sprite.angle = angleChange;

      // Gravity drop
      sprite.y += 15;

      // Draw the sprite
      ctx.save();
      ctx.translate(sprite.x, sprite.y);
      ctx.rotate(sprite.angle * Math.PI / 180);
      ctx.fillStyle = '#00FFAA';
      ctx.drawImage(spriteImg, -sprite.width / 2, -sprite.height / 2, sprite.width, sprite.height);
      ctx.restore();

      requestAnimationFrame(animate);
    }

    animate();