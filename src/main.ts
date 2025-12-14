export type pageKey = "proposal" | "gift" | "date" | "contract" | "yes";

const root = document.querySelector(".root") as HTMLElement | null;
 if(!root) throw new Error("Root element (.root) not found in DOM");

async function loadPage(key: pageKey) {
   
    try {
        switch(key) {
            case "proposal": {
                const mod = await import("./pages/proposal");
                mod.render(root);
                break;
            }
            case "gift": {
                const mod = await import("./pages/gift");
                mod.render(root);
                break;
            }
            case "date": {
                const mod = await import("./pages/date");
                mod.render(root);
                break;
            }
            case "contract": {
                const mod = await import("./pages/contract");
                mod.render(root);
                break;
            }
            case "yes": {
                const mod = await import("./pages/yes");
                mod.render(root);
                break;
            }
            default:
                root.innerHTML = `<div style="padding:28px;color:#900">Page not found</div>`;
         }
         root.scrollTop = 0;
        } catch (err) {
            root.innerHTML = `<div style="padding:28px;color:#900">Failed to load page: ${(err as Error).message}</div>`;
        }
}

export function navigateTo(page: pageKey) {
    loadPage(page)
}

loadPage("proposal")
