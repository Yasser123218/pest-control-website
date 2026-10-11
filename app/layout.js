import "./globals.css";

export const metadata = {
  title: "الشركة الألمانية A.G لمكافحة الحشرات والقوارض",
  description: "الشركة الألمانية A.G لمكافحة الحشرات والقوارض في مصر. خدمات مكافحة بق الفراش والصراصير والنمل والفئران والأبراص، مع الفحص والمتابعة وخدمة العملاء."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
