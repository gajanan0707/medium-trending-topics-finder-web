export const FAQ_DATA = [
  {
    question: "What is Medium Trending Topics Finder and how does it help creators?",
    answer: "Medium Trending Topics Finder is a privacy-first browser extension for Chromium browsers. It dynamically inspects Medium tag pages and feeds to calculate claps, responses, and engagement velocity in real-time. Content creators, technical writers, and growth marketers use it to uncover underserved niches, validate article titles before writing, and spot viral stories before they saturate the platform."
  },
  {
    question: "How is the Engagement Score calculated?",
    answer: "The formula is: Engagement Score = Claps + (Comments × 5). Passive claps are simple to click, whereas comments represent thoughtful conversation, controversy, questions, and high reader retention. Giving comments a 5× multiplier ensures genuine resonance is surfaced over superficial clickbait."
  },
  {
    question: "What do the Trend Signals (High Debate, Viral Claps, Rising) mean?",
    answer: "• 💬 High Debate: 30+ comments. Signifies strong community controversy, conversation, or unsolved user challenges.\n• 🔥 Viral Claps: 1,000+ claps. Proven high-distribution article with broad appeal.\n• ⚡ Rising: Engagement score ≥ 200. Fast-growing article with breakout potential.\n• ✨ Active: Healthy baseline engagement."
  },
  {
    question: "Is Medium Trending Topics Finder completely free and private?",
    answer: "Yes, 100% free and open-source under the MIT license. The extension executes entirely within your browser's local sandbox. It does not communicate with any external analytics server, does not store telemetry, and does not touch user credentials or cookies. Everything remains on your device."
  },
  {
    question: "Why does the extension require permission for medium.com?",
    answer: "The extension must inject an in-page dashboard (`content.js`) into Medium pages (`https://medium.com/tag/*` and `https://medium.com/`) to read publicly displayed claps and comment counts on article preview cards. In compliance with Google Chrome Web Store policies, it requests access only to Medium domains."
  },
  {
    question: "How do I export Medium analytics to Excel or Google Sheets?",
    answer: "Inside the in-page radar dashboard or on any tag page, simply click the 'Export CSV' button. The extension instantly compiles all currently scanned stories (including Rank, Title, Claps, Comments, Engagement Score, Trend Signal, and Story URLs) and downloads a clean CSV file ready for spreadsheet analysis."
  }
];
