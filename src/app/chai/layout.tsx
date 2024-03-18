
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h2>inner nav Layout</h2>{children}
    </>
  );
}
 