
import "./globals.css";

export const metadata = {
  title: "الشركة الألمانية A.G لمكافحة الحشرات والقوارض | مصر",
  description:
    "الشركة الألمانية A.G لمكافحة الحشرات والقوارض في مصر. خدمات مكافحة بق الفراش والصراصير والنمل والفئران والأبراص، مع الفحص والمتابعة.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
