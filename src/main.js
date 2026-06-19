import "./scss/reset.scss";
import "./style.scss";
import "./js/axe-TestingHandler";
import qrCodeImage from "./assets/image-qr-code.png";

document.querySelector("#app").innerHTML = `
<article class="qr_comp__card">
  <picture class="qr_comp__holder">
    <img class="qr_comp__image" src="${qrCodeImage}" alt="QR code" srcset="" />
  </picture>
  <h1 class="qr_comp__heading" >Improve your front-end skills by building projects</h1>
  <p class="qr_comp__paragraph" >
    Scan the QR code to visit Frontend Mentor and take your coding skills
    to the next level
  </p>
</article>
`;
