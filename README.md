# RankRise - AI-Powered SEO SaaS Platform

RankRise is a cutting-edge SEO analytics platform designed for the era of **Generative Engine Optimization (GEO)**. Unlike traditional tools that focus solely on Google, RankRise leverages advanced AI and web scraping to provide insights into how your brand appears across modern AI answer engines like Perplexity as well as traditional search results.

Built with a modern full-stack architecture, RankRise combines real-time data acquisition, AI-driven analysis, and a seamless user experience to empower marketers with actionable intelligence.

![RankRise Dashboard](https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e46683956)

## 🌟 Key Features

### 🧠 Next-Gen SEO Intelligence
-   **Generative Engine Optimization**: Analyze your presence on AI-powered search platforms to stay ahead of the curve.
-   **AI-Generated Reports**: Instantly generate detailed reports covering competitor analysis, keyword themes, backlink profiles, and sentiment analysis using OpenAI's GPT models.
-   **Actionable Insights**: Transform raw data into strategic recommendations for content and optimization.

### 🤖 Interactive AI Assistant
-   **Chat with Your Data**: Engage with a built-in AI assistant to query your SEO reports conversationally.
-   **Live Web Access**: The AI assistant utilizes web search tools to augment its responses with the freshest information available.

### ⚡ Real-Time & Reactive
-   **Live Data Updates**: Powered by **Convex**, the application delivers real-time updates to the UI without page refreshes.
-   **Enterprise-Grade Scraping**: Integrates **Bright Data** to reliably harvest structured data from complex, bot-protected websites.
-   **Asynchronous Processing**: Efficiently handles long-running scraping and analysis jobs with robust retry mechanisms and webhook integration.

### 🔐 Secure & Scalable
-   **Integrated Auth & Billing**: Seamless user management and subscription handling (Starter vs. Pro tiers) via **Clerk**, with zero-config Stripe integration.
-   **Type-Safe Architecture**: End-to-end type safety and schema validation using **Zod** ensures data integrity.

## 🛠️ Technology Stack

RankRise is built on a robust, modern stack designed for performance and scalability:

-   **Frontend**: [Next.js 15](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/)
-   **Backend & Database**: [Convex](https://www.convex.dev/) (Reactive backend-as-a-service)
-   **Authentication & Payments**: [Clerk](https://clerk.com/)
-   **AI & LLMs**: [OpenAI](https://openai.com/) via [Vercel AI SDK](https://sdk.vercel.ai/docs)
-   **Web Scraping**: [Bright Data](https://brightdata.com/)
-   **Validation**: [Zod](https://zod.dev/)

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites
-   Node.js 18+
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd rankrise-ai-seo-saas
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env.local` file in the root directory and configure the following variables:

    ```env
    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
    CLERK_SECRET_KEY=sk_test_...

    # Convex Backend
    NEXT_PUBLIC_CONVEX_URL=https://...
    
    # OpenAI (for AI analysis)
    OPENAI_API_KEY=sk-...

    # Bright Data (for scraping)
    BRIGHT_DATA_API_KEY=...
    ```

4.  **Run the Development Server**
    ```bash
    npm run dev
    ```
    
    Start the Convex backend in a separate terminal:
    ```bash
    npx convex dev
    ```

5.  **Access the App**
    Open [http://localhost:3000](http://localhost:3000) in your browser.
