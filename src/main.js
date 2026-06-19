import "./scss/reset.scss";
import "./style.scss";
import "./js/axe-TestingHandler";
import qrCodeImage from "./assets/image-qr-code.png";

document.querySelector("#app").innerHTML = `
<article class="qr-code-card">
  <picture class="qr-code-card__holder">
    <img class="qr-code-card__image" src="${qrCodeImage}" alt="QR code" srcset="" />
  </picture>
  <h1 class="qr-code-card__heading" >Improve your front-end skills by building projects</h1>
  <p class="qr-code-card__paragraph" >
    Scan the QR code to visit Frontend Mentor and take your coding skills
    to the next level
  </p>
</article>
`;
