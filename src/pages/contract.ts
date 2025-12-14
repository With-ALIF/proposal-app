export function render(root: HTMLElement): void {
  root.innerHTML = `
    <div class="love-box">
      <div class="promise">💗 You’ll arrive on time, because my waiting is only for you ⏳</div>
      <div class="promise">🎁 I’ll bring something small for you, filled with a lot of feelings 💖</div>
      <div class="promise">📵 Today, the phone stays away—because all my attention belongs to you ✨</div>
      <div class="promise">🤳 By the end of the day, we’ll have a selfie to smile at again and again 💕</div>
      <div class="promise">😊 Keep smiling, because your smile makes my day beautiful ❤️</div>
    </div>

    <style>
      body{
        margin:0;
        background:#ffffff;
        font-family:'Poppins',sans-serif;
      }
      .love-box{
        max-width:640px;
        margin:80px auto;
        padding:32px;
        border-radius:18px;
        background:#ffffff;
        box-shadow:0 20px 40px rgba(255,105,180,0.15);
        position:relative;
        overflow:hidden;
      }
      .promise{
        font-size:18px;
        font-weight:600;
        color:#ff2f92;
        margin-bottom:14px;
        padding:12px 16px;
        border-radius:12px;
        transition:all .3s ease;
        cursor:pointer;
      }
      .promise:hover{
        background:rgba(255,47,146,0.08);
        box-shadow:0 0 16px rgba(255,47,146,0.25);
        transform:translateY(-2px);
      }
      .heart{
        position:absolute;
        bottom:-20px;
        font-size:18px;
        opacity:.6;
        pointer-events:none;
        animation:floatUp linear forwards;
      }
      @keyframes floatUp{
        from{
          transform:translateY(0) scale(1);
          opacity:.6;
        }
        to{
          transform:translateY(-600px) scale(1.4);
          opacity:0;
        }
      }
    </style>
  `;

  const box = root.querySelector<HTMLDivElement>(".love-box");

  if (!box) return;

  setInterval((): void => {
    const heart: HTMLDivElement = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💗";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${3 + Math.random() * 2}s`;
    box.appendChild(heart);

    setTimeout((): void => {
      heart.remove();
    }, 5000);
  }, 800);
}