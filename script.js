
document.addEventListener("DOMContentLoaded", () => {
  // حركة ظهور أزرار الحسابات
  const buttons = document.querySelectorAll(".social-button");

  buttons.forEach((button, index) => {
    button.animate(
      [
        { opacity: 0, transform: "translateY(12px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      {
        duration: 650,
        delay: 500 + index * 180,
        fill: "both",
        easing: "ease-out"
      }
    );
  });

  // لو الصورة الشخصية مش موجودة، اعرض خلفية بديلة
  const avatar = document.querySelector(".avatar");

  avatar.addEventListener("error", () => {
    avatar.style.display = "none";
    avatar.parentElement.style.background =
      "linear-gradient(135deg, #176bff, #71e7ff)";
    avatar.parentElement.style.position = "relative";

    if (!avatar.parentElement.querySelector(".avatar-fallback")) {
      const fallback = document.createElement("span");
      fallback.className = "avatar-fallback";
      fallback.textContent = "OV";

      Object.assign(fallback.style, {
        position: "absolute",
        inset: "0",
        display: "grid",
        placeItems: "center",
        color: "#fff",
        fontSize: "38px",
        fontWeight: "900",
        direction: "ltr"
      });

      avatar.parentElement.appendChild(fallback);
    }
  });
});