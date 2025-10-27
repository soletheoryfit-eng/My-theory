export default function Home() {
  // use simple variables (not an object) to avoid accidental object rendering
  const name = "AeroFlex Runner Black";
  const priceRON = 349;
  const image = "/images/i1756310110030_8045_0_8.jpg";
  const desc = "Authentic-quality runner. Shipped from verified suppliers in the U.S. & China.";

  const ron = (n) =>
    new Intl.NumberFormat("ro-RO", { style: "currency", currency: "RON" }).format(n);

  const waLink = (n, p) =>
    `https://wa.me/40721527147?text=${encodeURIComponent(
      `Salut! Vreau sa comand: ${n} (${p} RON).`
    )}`;

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ fontSize: 32, margin: 0, fontWeight: 800 }}>Elevate Every Step.</h1>
      <p style={{ color: "#555", marginTop: 8 }}>
        Authentic-quality sneakers shipped from verified suppliers in the U.S. & China.
        Prices in RON. Payment is completed only after your order is confirmed by us.
      </p>

      <div style={{ border: "1px solid #eee", borderRadius: 16, overflow: "hidden", background: "#fff", marginTop: 16 }}>
        <img src={image} alt={name} style={{ width: "100%", height: "auto", display: "block" }} />
        <div style={{ padding: 12 }}>
          <div style={{ fontWeight: 700 }}>{name}</div>
          <div style={{ fontSize: 14, color: "#666" }}>{desc}</div>
          <div style={{ marginTop: 6, fontWeight: 800 }}>{ron(priceRON)}</div>
          <a
            href={waLink(name, priceRON)}
            style={{
              display: "inline-block",
              marginTop: 8,
              padding: "8px 12px",
              borderRadius: 12,
              background: "#000",
              color: "#fff",
              fontSize: 14,
              textDecoration: "none"
            }}
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
