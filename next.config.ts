import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 menuliskan AGENTS.md dan CLAUDE.md ke akar proyek setiap kali
  // dijalankan. Proyek ini tidak memakainya, dan berkas yang muncul kembali
  // sendiri setiap `npm run dev` cuma bikin bingung — jadi dimatikan.
  agentRules: false,
};

export default nextConfig;
