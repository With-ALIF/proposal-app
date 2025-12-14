import { navigateTo } from "../main";
import pic1 from "../images/pic1.jpg";

export function render(root: HTMLElement): void {
  root.innerHTML = `
    <div id="card" style="
      max-width:900px;
      width:100%;
      border-radius:20px;
      padding:36px;
      background:rgba(255,255,255,0.92);
      box-shadow:0 24px 60px rgba(0,0,0,0.08);
      text-align:center;
      font-family:'Baloo 2',sans-serif;
      font-weight:700;
    ">
      <h1 style="color:#ff579a;margin-bottom:18px;font-weight:800">
        Will you be my Madam Jii? 💖
      </h1>

      <div style="
        width:260px;
        height:260px;
        margin:0 auto 18px;
        border-radius:18px;
        overflow:hidden;
        box-shadow:0 12px 30px rgba(0,0,0,0.15)
      ">
        <img 
          src="${pic1}" 
          alt="cat" 
          style="width:100%;height:100%;object-fit:cover"
        />
      </div>

      <div id="btnArea" style="
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:14px;
        flex-wrap:wrap;
        min-height:96px;
      ">
        <button id="yesBtn" style="
          padding:12px 26px;
          border-radius:999px;
          border:none;
          background:linear-gradient(135deg,#ff679f,#ff9a76);
          color:#fff;
          cursor:pointer;
          font-weight:800;
        ">
          Yes 💘
        </button>

        <button id="noBtn" style="
          padding:12px 26px;
          border-radius:999px;
          border:none;
          background:linear-gradient(135deg,#9b9bff,#ff8ef8);
          color:#fff;
          cursor:pointer;
          font-weight:800;
        ">
          No 😜
        </button>
      </div>

      <div id="message" style="
        margin-top:14px;
        color:#ff3f83;
        min-height:22px;
        font-weight:700;
      "></div>

      <div style="margin-top:18px">
        <button id="toGift" style="
          padding:10px 18px;
          border-radius:12px;
          border:none;
          background:#ff6fa1;
          color:#fff;
          cursor:pointer;
          font-weight:800;
        ">
          Open Surprise 🎁
        </button>
      </div>
    </div>
  `;

  const yesBtn = root.querySelector<HTMLButtonElement>("#yesBtn");
  const noBtn = root.querySelector<HTMLButtonElement>("#noBtn");
  const message = root.querySelector<HTMLDivElement>("#message");
  const toGift = root.querySelector<HTMLButtonElement>("#toGift");
  const card = root.querySelector<HTMLDivElement>("#card");

  yesBtn?.addEventListener("click", () => {
    navigateTo("yes");
  });

  noBtn?.addEventListener("mouseenter", () => {
    if (!card || !noBtn) return;
    if (window.innerWidth < 600) return;

    noBtn.style.position = "absolute";

    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const padding = 24;
    const maxLeft = Math.max(0, cardRect.width - btnRect.width - padding);
    const maxTop = Math.max(0, cardRect.height - btnRect.height - 80);

    const randomLeft = padding + Math.random() * maxLeft;
    const randomTop = padding + Math.random() * maxTop;

    noBtn.style.left = `${randomLeft}px`;
    noBtn.style.top = `${randomTop}px`;
  });

  noBtn?.addEventListener("click", () => {
    if (message) {
      message.textContent = "No no no... bhaag ke bhi bach nahi paogi 😏💗";
    }
  });

  toGift?.addEventListener("click", () => {
    navigateTo("gift");
  });
}
