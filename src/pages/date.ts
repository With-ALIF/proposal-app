import { navigateTo } from "../main";

export function render(root: HTMLElement) {
  root.innerHTML = `
    <div 
      style="
        max-width:720px;
        width:100%;
        text-align:center;
        padding:32px;
        background:#ffffff;
        border-radius:20px;
        box-shadow:0 20px 40px rgba(255,105,180,0.18);
        font-family:'Poppins',sans-serif;
        position:relative;
        z-index:1;
      "
    >

      <h1 style="color:#ff3d7a;font-weight:700;">
        Let's go for a date! ❤️
      </h1>

      <div style="font-size:64px;margin:10px 0">😘</div>

      <p style="color:#c72c75;font-size:18px;font-weight:600;">
        Pick our special day 💐💞
      </p>

      <input 
        id="dateInput" 
        type="date" 
        style="
          padding:10px 14px;
          border-radius:12px;
          border:2px solid #ff7db1;
          font-size:16px;
          margin-top:10px;
          outline:none;
        "
      />

      <div>
        <button 
          id="specialBtn" 
          style="
            margin-top:20px;
            padding:12px 26px;
            border-radius:30px;
            border:none;
            background:linear-gradient(135deg,#ff74a3,#ff89c7);
            color:#fff;
            font-weight:700;
            cursor:pointer;
            transition:.3s ease;
          "
        >
          Let's Make This Special 💕
        </button>
      </div>

      <div 
        id="msg" 
        style="
          margin-top:16px;
          font-size:18px;
          font-weight:600;
          color:#ff5fa3;
          min-height:32px;
        ">
      </div>

      <button 
        id="planBtn" 
        style="
          display:none;
          margin-top:14px;
          padding:10px 18px;
          border-radius:20px;
          border:none;
          background:#ff5fa3;
          color:#fff;
          font-weight:700;
          cursor:pointer;
        ">
        Let's go for a plan! 🌻
      </button>

    </div>
  `;

  const specialBtn = document.getElementById("specialBtn") as HTMLButtonElement | null;
  const msg = document.getElementById("msg") as HTMLDivElement | null;
  const planBtn = document.getElementById("planBtn") as HTMLButtonElement | null;
  const dateInput = document.getElementById("dateInput") as HTMLInputElement | null;

  specialBtn?.addEventListener("click", () => {
    const date = dateInput?.value;

    if (!date) {
      if (msg) msg.textContent = "Choose a date first, Madam Jii 💗✨";
      if (planBtn) planBtn.style.display = "none";
      return;
    }

    if (msg) msg.textContent = "I'm already excited... Our special day will be magical ✨💗";
    if (planBtn) planBtn.style.display = "inline-block";
  });

  planBtn?.addEventListener("click", () => {
    navigateTo("contract");
  });

  addHearts(root);
}

function addHearts(root: HTMLElement) {
  const layer = document.createElement("div");
  layer.style.position = "fixed";
  layer.style.inset = "0";
  layer.style.pointerEvents = "none";
  layer.style.zIndex = "-1"; // important
  root.appendChild(layer);

  setInterval(() => {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = 14 + Math.random() * 12 + "px";
    heart.style.animation = "fall 9s linear";
    layer.appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
  }, 300);

  // animation
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fall {
      to {
        transform: translateY(110vh);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}