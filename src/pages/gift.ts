import { navigateTo } from "../main";

export function render (root: HTMLElement) {
    root.innerHTML = `
       <div style="text-align:center; padding:36px; font-family:'Poppins',sans-serif">

  <h1 style="color:#ff3d7a; margin-bottom:14px; font-weight:700">
    Here's a surprise for you ❤
  </h1>

  <div 
    id="giftBtn" 
    style="
      font-size:110px;
      cursor:pointer;
      display:inline-block;
      margin-top:10px;
      transition:transform .3s ease;
    ">
    🎁
  </div>

  <div 
    id="surpriseMsg" 
    style="
      margin-top:18px;
      font-size:18px;
      font-weight:600;
      color:#ff5fa3;
      opacity:0;
      transition:opacity .4s ease;
    ">
    You’re the sweetest surprise in my life 💖✨
  </div>

  <div style="margin-top:20px">
    <button 
      id="toDate" 
      style="
        padding:10px 16px;
        border-radius:14px;
        border:none;
        background:#ff6fa1;
        color:#fff;
        cursor:pointer;
        font-weight:700;
        transition:.3s ease;
      "
      onmouseover="this.style.transform='scale(1.05)'"
      onmouseout="this.style.transform='scale(1)'"
    >
      Go to Date 💕
    </button>
  </div>

</div>
    `;

    document.getElementById("giftBtn")?.addEventListener("click", () => navigateTo("date"));
    document.getElementById("toDate")?.addEventListener("click", () => navigateTo("date"));

    addFloatingHearts(root, 350);
}

function addFloatingHearts(root: HTMLElement, interval = 400) {
    const layer = document.createElement("div");
    layer.style.position = "fixed";
    layer.style.inset = "0";
    layer.style.pointerEvents = "none";
    layer.style.zIndex = "0";
    root.appendChild(layer);

    setInterval(() => {
        const h = document.createElement("div");
        h.textContent = "💖";
        h.style.position = "absolute";
        h.style.left = Math.random() ** 100 + "vw";
        h.style.fontSize = 16 + Math.random() * 12 + "px";
        layer.appendChild(h);
        setTimeout( () => h.remove(), 9000);
    }, interval);
}