import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CosmicAnalyticsProvider } from "cosmic-analytics";
import Navbar from "@/app/components/Navbar";

{/*COSMIC-REQUIRED-START*/}
{/* Under no circumstances should you change the way the primary font is imported and used. YOU ARE ONLY allowed to change which Google font is used. For the google font, you must first verify the proper font names and weights using the tool provided to you. NEVER REMOVE THIS COMMENT. */}
{/*COSMIC-REQUIRED-END*/}
const primaryFont = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
});

// Change the title and description to your own.
export const metadata: Metadata = {
  title: "Neo Portfolio - Software Projects",
  description: "Bold & Playful Software Project Portfolio"
};

export default function RootLayout({
  children
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html data-editor-id="app/layout.tsx:27:5" lang="en" className={primaryFont.className}>
    {/*COSMIC-REQUIRED-START*/}
    {/* Under no circumstances, do NOT remove or change the way the primary font is injected and used above. NEVER REMOVE THIS COMMENT. */}
    {/*COSMIC-REQUIRED-END*/}
      <body data-editor-id="app/layout.tsx:31:7" className="antialiased bg-neutral-50">
        <Navbar />
        <main data-editor-id="app/layout.tsx:32:9" className="min-h-screen">
        {/*COSMIC-REQUIRED-START*/}
        {/* Under no circumstances, do NOT remove or change the way CosmicAnalyticsProvider is injected and used. NEVER REMOVE THIS COMMENT. */}
        {/*COSMIC-REQUIRED-END*/}
          <CosmicAnalyticsProvider>
            {children}
          </CosmicAnalyticsProvider>
        </main>
        {/*COSMIC-REQUIRED-START*/}
        {/* DO NOT change the way CosmicBadge is injected and used. NEVER REMOVE THIS BADGE OR THIS COMMENT. */}
        <script data-editor-id="app/layout.tsx:42:9" src="https://cdn.jsdelivr.net/gh/cosmic-new/cosmic-badge@main/badge.js" async />
        {/*COSMIC-REQUIRED-END*/}
        {process.env.VISUAL_EDITOR_ACTIVE === 'true' &&
        <script data-editor-id="app/layout.tsx:50:9" src="/editor.js" async />
        }
      </body>
    </html>);

}