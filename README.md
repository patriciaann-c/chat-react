# 💬 React AI Chat Application

A lightweight, modern AI chat application built with **React 19** and **Vite**. This application connects directly to the **OpenRouter API** to generate real-time AI responses to user prompts using modern React hooks, asynchronous JavaScript, and a clean component-service architecture.

---

## 🚀 Features

- **🤖 AI-Powered Chat**: Connects to OpenRouter's chat completion API to answer user queries using free-tier models (such as `nvidia/nemotron-3-ultra-550b-a55b:free`).
- **⚡ Instant Feedback & State Handling**:
  - Live status indicator (*"I'm thinking..."*) while waiting for the AI response.
  - User-friendly error messaging if the API fails or is unreachable.
  - Dynamic rendering of AI answers upon completion.
- **🔐 Secure Environment Configuration**: Keeps sensitive API keys safe using Vite environment variables (`import.meta.env`).
- **🧩 Clean Component Architecture**: Clear separation of concerns between user interface components and external API service layers.
- **🎨 Styled with Bootstrap**: Clean and responsive user interface elements.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Frontend UI library & component state management |
| **[Vite](https://vitejs.dev/)** | High-performance build tool and local development server |
| **[Bootstrap 5](https://getbootstrap.com/)** | Responsive UI styling and components |
| **[OpenRouter API](https://openrouter.ai/)** | Unified AI gateway providing access to LLMs |
| **[Oxlint](https://oxc.rs/)** | Ultra-fast JavaScript & React linter |

---

## 📂 Project Structure

```text
chat-react/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and local media
│   ├── components/
│   │   └── Chat.jsx        # Main chat UI component (inputs, buttons, responses)
│   ├── services/
│   │   └── OpenRouter.jsx  # API service function handling OpenRouter fetch calls
│   ├── App.css             # Main styling rules
│   ├── App.jsx             # Top-level root application component
│   ├── index.css           # Global CSS variables and base styles
│   └── main.jsx            # React root entry point
├── .env.example            # Environment variables template
├── index.html              # HTML entry template
├── package.json            # Project dependencies and npm scripts
└── vite.config.js          # Vite configuration
```

---

## 🧠 How It Works

1. **Controlled Form Input**:  
   The user types a prompt into an `<input>` field managed by React's `useState` hook (`question`).
2. **Submission Handling**:  
   Clicking **Send** invokes `handleSubmit()`:
   - Sets `loading` to `true` (rendering the *"I'm thinking..."* message).
   - Clears prior answers or error messages.
3. **API Service Call**:  
   Calls `OpenRouter(question)` in [src/services/OpenRouter.jsx](src/services/OpenRouter.jsx). This function performs an asynchronous `POST` request to `https://openrouter.ai/api/v1/chat/completions` with the authorized Bearer token.
4. **Result Rendering**:  
   - **Success**: The AI's response text is extracted from `data.choices[0].message.content` and stored in the `answer` state, which renders the answer section.
   - **Failure**: The `catch` block catches network or API errors and displays a clear error notice.
   - The `loading` flag returns to `false`.

---

## 📋 Prerequisites

Before running the project, make sure you have:
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- An **[OpenRouter API Key](https://openrouter.ai/keys)** (free to create)

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd chat-react
```

### 2. Install dependencies
Using **npm**:
```bash
npm install
```
*Or using **pnpm**:*
```bash
pnpm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory by copying `.env.example`:

```bash
cp .env.example .env
```

Open `.env` and insert your OpenRouter API key:
```env
VITE_OPENROUTER_API_KEY=your_actual_api_key_here
```

> **Note**: Vite environment variables must start with the `VITE_` prefix to be exposed to the client-side code via `import.meta.env`.

### 4. Run the Development Server
```bash
npm run dev
```

Open your browser and navigate to the local server URL (usually `http://localhost:5173`).

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Starts Vite dev server with Hot Module Replacement (HMR) |
| **Build** | `npm run build` | Compiles production-ready bundle into the `dist/` folder |
| **Preview** | `npm run preview` | Locally previews the production build |
| **Lint** | `npm run lint` | Runs Oxlint to check code quality and catch syntax issues |

---

## 🔮 Future Improvements

- [ ] Support continuous multi-turn conversations (message history thread).
- [ ] Allow sending messages by pressing the <kbd>Enter</kbd> key.
- [ ] Add markdown rendering (e.g. `react-markdown`) for AI responses with formatted code blocks and lists.
- [ ] Add a model selector dropdown to switch between different OpenRouter AI models.
