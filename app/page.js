export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#f5f7f6",
      fontFamily: "Arial, sans-serif",
      direction: "rtl"
    }}>

      <section style={{
        background: "#0b5d3b",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{fontSize: "42px", marginBottom: "20px"}}>
          الشركة الألمانية المتقدمة
        </h1>

        <h2 style={{fontSize: "28px", marginBottom: "20px"}}>
          لمكافحة الحشرات والقوارض
        </h2>

        <p style={{
          fontSize: "18px",
          lineHeight: "1.8",
          maxWidth: "700px",
          margin: "0 auto 30px"
        }}>
          خدمات احترافية لمكافحة الحشرات والقوارض للمنازل والشركات
          بأحدث طرق المكافحة والمتابعة.
        </p>

        <a
          href="https://wa.me/201000000000"
          style={{
            background: "#25D366",
            color: "white",
            padding: "15px 25px",
            borderRadius: "10px",
            fontWeight: "bold",
            display: "inline-block"
          }}
        >
          تواصل معنا على واتساب
        </a>
      </section>

      <section style={{
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2 style={{fontSize: "32px", color: "#0b5d3b"}}>
          خدماتنا
        </h2>

        <div style={{
          display: "grid",
          gap: "20px",
          maxWidth: "900px",
          margin: "40px auto"
        }}>

          <div style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px"
          }}>
            مكافحة الصراصير
          </div>

          <div style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px"
          }}>
            مكافحة بق الفراش
          </div>

          <div style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px"
          }}>
            مكافحة النمل
          </div>

          <div style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px"
          }}>
            مكافحة الفئران
          </div>

        </div>
      </section>

    </main>
  );
}
