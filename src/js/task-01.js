const h2Element = document.querySelector("item");
const liElementsUnderH2 = h2Element.nextElementSibling.querySelectorAll("li");
document.getElementById("item").textContent = liElementsUnderH2.length;
