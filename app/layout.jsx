export const metadata = { title: "SoleTheory" };

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body style={{fontFamily:"system-ui,-apple-system,Segoe UI,Roboto"}}>
        {children}
      </body>
    </html>
  );
}
