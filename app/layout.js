import "./globals.css";

export const metadata = {
  title: "الشركة الألمانية المتقدمة لمكافحة الحشرات",
  description: "خدمات احترافية لمكافحة الحشرات والقوارض"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
