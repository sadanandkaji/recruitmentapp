
import "./globals.css";
import Navbar from "../components/navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" h-screen pt-6 ">
        <div className=" fixed top-0 left-0 w-full">

<Navbar></Navbar>
        </div>
        <div  >

        {children}
        </div>
      </body>
    </html>
  );
}
