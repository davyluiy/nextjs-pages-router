import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <div>
          <Link style={{ display: "block" }} href="/swap">
            swap
          </Link>
          <Link style={{ display: "block" }} href="/pool">
            pool
          </Link>
        </div>
        {children}
    </div>
  );
}
