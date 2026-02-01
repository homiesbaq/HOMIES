function comprarWhatsApp() {
  const talla = document.getElementById("talla").value;
  const color = document.getElementById("color").value;

  if (talla === "" || color === "") {
    alert("Por favor selecciona talla y color");
    return;
  }

  const mensaje = `
Hola 👋 quiero comprar en *HOMIES*

🧢 Producto: Camiseta HOMIES Classic
📏 Talla: ${talla}
🎨 Color: ${color}
💰 Precio: $95.000 COP
  `;

  const numero = "573244529453";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}
