import "./scss/reset.scss";
import "./style.scss";
import "./js/axe-TestingHandler";
import qrCodeImage from "./assets/image-qr-code.png";

document.querySelector("#app").innerHTML = `
<article>
  <picture>
    <img src="${qrCodeImage}" alt="" srcset="" />
  </picture>
  <h1>Improve your front-end skills by building projects</h1>
  <p>
    Scan the QR code to visit Frontend Mentor and take your coding skills
    to the next level
  </p>
</article>
`;
