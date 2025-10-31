import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata (Website Info)
export const metadata = {
  title: "ASH MEDIA SOLUTIONS",
  description: "Creative Digital Agency — Design, Web & Marketing Solutions",
};

// ✅ Layout Component (applies to all pages)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#000000] text-[#E4E6EB]`}>
        {/* All Page Content */}
        {children}

        {/* ✅ Floating WhatsApp Button (Simple Professional Style) */}
        <a
          href="https://wa.me/923477858316" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50"
        >
          <div
            className="flex items-center justify-center bg-[#25D366] w-14 h-14 rounded-full
                       shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out"
          >
            {/* WhatsApp SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="26"
              height="26"
              className="transition-transform group-hover:rotate-6"
            >
              <path d="M12.04 2C6.48 2 2 6.33 2 11.78c0 2.1.71 4.05 1.9 5.64L2 22l4.75-1.53a10.35 10.35 0 0 0 5.3 1.46c5.56 0 10.04-4.33 10.04-9.78S17.6 2 12.04 2zM12 19.3a8.35 8.35 0 0 1-4.27-1.17l-.3-.18-2.83.91.93-2.7-.2-.3a7.56 7.56 0 0 1-1.16-3.9c0-4.19 3.55-7.6 7.92-7.6 4.36 0 7.92 3.41 7.92 7.6 0 4.19-3.55 7.6-7.92 7.6zm4.62-5.33c-.26-.13-1.52-.74-1.76-.82-.24-.09-.42-.13-.6.13-.18.26-.7.82-.85.99-.15.17-.31.19-.57.06-.26-.13-1.1-.4-2.1-1.3-.77-.67-1.29-1.48-1.45-1.73-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.46-.06-.13-.6-1.44-.82-1.96-.22-.52-.44-.45-.6-.46h-.52c-.17 0-.46.07-.7.33s-.92.9-.92 2.2.95 2.56 1.08 2.74c.13.17 1.87 2.93 4.54 4.06.63.27 1.12.43 1.51.55.63.2 1.21.17 1.67.1.51-.08 1.52-.62 1.73-1.23.21-.61.21-1.13.15-1.23-.06-.1-.24-.16-.5-.29z" />
            </svg>
          </div>
        </a>
      </body>
    </html>
  );
}
