import { navigateTo } from "../main";
import pic1 from "../images/pic1.jpg";

export function render(root: HTMLElement): void {
  root.innerHTML = `
    <div style="text-align:center;padding:30px;font-family:'Poppins',sans-serif">
      
      <h1 style="color:#ff3f94;font-weight:800">
        Yayyy — thank you! 🎉
      </h1>

      <div style="
        width:260px;
        height:260px;
        margin:14px auto;
        border-radius:14px;
        overflow:hidden;
        box-shadow:0 12px 30px rgba(0,0,0,0.15)
      ">
        <img 
          src="${pic1}" 
          alt="cute" 
          style="width:100%;height:100%;object-fit:cover"
        />
      </div>

      <div style="margin-top:14px">
        <button 
          id="toGift" 
          style="
            padding:10px 18px;
            border-radius:14px;
            border:none;
            background:#ff5ea8;
            color:#ffffff;
            cursor:pointer;
            font-weight:800;
          ">
          Open Surprise 🎁
        </button>
      </div>

    </div>
  `;

  const toGiftBtn = root.querySelector<HTMLButtonElement>("#toGift");

  toGiftBtn?.addEventListener("click", () => {
    navigateTo("gift");
  });
}
