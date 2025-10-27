// app/page.jsx
export default function Home() {
  // 👇 change these anytime
  const product = {
    name: "AeroFlex Runner Black",
    priceRON: 349,
    image: "/images/aeroflex-black.jpg", // change if your filename is different
    desc: "Authentic-quality runner. Shipped from verified suppliers in the U.S. & China."
  };

  const ron = (n) =>
    new Intl.NumberFormat("ro-RO", { style: "currency", currency: "RON" }).format(n);

  const waLink = (name, price) =>
    `https://wa.me/40721527147?text=${encodeURIComponent(
      `Salut! Vreau sa comand: ${name} (${price} RON).`
    )}`;

  return (
    <div style={{maxWidth:1120,margin:"0 auto",padding:"24px 16px"}}>
      {/* HERO */}
      <section style={{display:"grid",gridTemplateColumns:"1fr",gap:16,alignItems:"center"}}>
        <div>
          <h1 style={{fontSize:36,margin:0,fontWeight:800}}>Elevate Every Step.</h1>
          <p style={{color:"#555",marginTop:8}}>
            Authentic-quality sneakers shipped from verified suppliers in the U.S. & China.
            Prices in RON. Payment is completed only after your order is confirmed by us.
          </p>
        </div>
        <div style={{borderRadius:24,overflow:"hidden",boxShadow:"0 12px 30px #0001"}}>
          <img src={product.image} alt="SoleTheory" style={{width:"100%",height:"auto",display:"block"}}/>
        </div>
      </section>

      {/* PRODUCT CARD */}
      <section style={{marginTop:24}}>
        <h2 style={{fontSize:22,fontWeight:800,marginBottom:12}}>Featured</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16}}>
          <div style={{border:"1px solid #eee",borderRadius:20,overflow:"hidden",background:"#fff"}}>
            <div style={{position:"relative",aspectRatio:"4/3",overflow:"hidden"}}>
              <img src={product.image} alt={product.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            </div>
            <div style={{padding:12}}>
              <div style={{fontWeight:700}}>{product.name}</div>
              <div style={{fontSize:14,color:"#666"}}>{product.desc}</div>
              <div style={{marginTop:6,fontWeight:800}}>{ron(product.priceRON)}</div>
              <a href={waLink(product.name, product.priceRON)}
                 style={{display:"inline-block",marginTop:8,padding:"8px 12px",borderRadius:12,background:"#000",color:"#fff",fontSize:14}}>
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
