(function () {
  const config = window._whatsappConfig || {};
  const phone = config.phoneNumber || "";
  const btnText = config.callToAction || "Start Chat";
  const button = document.createElement("button");

  button.innerText = btnText;
  button.style.position = "fixed";
  button.style[config.buttonPosition || "right"] = "20px";
  button.style.bottom = "20px";
  button.style.zIndex = "9999";
  button.style.padding = "12px 20px";
  button.style.background = "#25D366";
  button.style.color = "#fff";
  button.style.border = "none";
  button.style.borderRadius = "24px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";

  button.onclick = function () {
    const msg = encodeURIComponent(config.prefillMessage || "");
    const url = `https://wa.me/${phone}?text=${msg}`;
    window.location.href = url;
  };

  document.body.appendChild(button);
})();
