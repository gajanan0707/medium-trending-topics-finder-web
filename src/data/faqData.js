export const FAQ_DATA = [
  {
    question: "What is Medium Trending Topics Finder and how does it help creators?",
    answer: "Medium Trending Topics Finder is a privacy-first browser extension for Chromium browsers. It dynamically inspects Medium tag pages and feeds to calculate claps, responses, engagement velocity, top publications, and top writers in real-time. Content creators, technical writers, and publication editors use it to discover viral story angles, identify high-authority publications to pitch, and find influential authors leading specific topics."
  },
  {
    question: "How does the extension discover and extract Top Publications and Top Writers?",
    answer: "The extension extracts data from two live sources on the page:\n1. Medium's 'Who to follow' Sidebar: Scans verified topic badges (e.g., 'Writer · 59K followers' or 'Publication · 329K followers') to capture official entity names, URLs, and audience follower counts.\n2. Feed Story Aggregation: Inspects every loaded article card in the feed, grouping claps, comments, author profiles (/@username), and publication links.\nIf a writer or publication appears in both the sidebar and the feed, the extension merges them into a hybrid badge ('Top Writer + Feed' or 'Top Pub + Feed')."
  },
  {
    question: "How are the Primary Scores calculated for Stories, Publications, and Writers?",
    answer: "Depending on your active tab and sorting preference:\n• Trending Stories: Claps + (Responses × 5). Responses are weighted 5× heavier than claps to highlight genuine conversation over passive clicks.\n• Top Publications: Followers + (Total Feed Claps × 10). Combines overall platform authority with current feed momentum.\n• Top Writers: Followers + (Total Feed Claps × 10) + (Total Feed Comments × 50). Strongly rewards writers sparking thoughtful discussions."
  },
  {
    question: "Can I sort the lists by different criteria?",
    answer: "Yes! Using the sort dropdown at the top right of the dashboard, you can rank entities by:\n1. Sort: Primary Score (default weighted formula balancing authority and velocity)\n2. Sort: Most Claps (purely by total claps accumulated in the feed)\n3. Sort: Most Comments (purely by response counts in the feed)."
  },
  {
    question: "How do I export Medium analytics to Excel, Notion, or Google Sheets?",
    answer: "Inside the in-page radar dashboard, simply click the 'Export CSV' button on any tab. The extension instantly downloads a tab-aware spreadsheet:\n• Stories: Rank, Title, Claps, Comments, Score, Author, Publication, URL\n• Publications: Rank, Publication, Followers, Stories in Feed, Total Claps, Total Comments, Source, URL\n• Writers: Rank, Writer, Followers, Stories in Feed, Total Claps, Total Comments, Source, URL."
  },
  {
    question: "Is Medium Trending Topics Finder completely free and private?",
    answer: "Yes, 100% free and open-source under the MIT license. The extension runs entirely within your browser's local sandbox memory. It does not communicate with any external analytics server, does not store telemetry, and does not touch user credentials or cookies. It requires only the standard 'storage' permission to save your recent scans locally."
  }
];
