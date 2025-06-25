# Task Tracker AI ✨ _(Prototype)_

> ⚠️ **Early-stage prototype. This project is not fully polished or production-ready.**  
> 🔐 **Requires your own OpenAI GPT-4 API key to function.**

Task Tracker AI is a minimal Angular-based task tracking app that uses OpenAI’s GPT-4 to intelligently extract metadata from user notes, including titles, summaries, dates, times, and URLs.

---

## 🚀 Features

- 📝 Add free-form notes and let GPT auto-summarize them
- 🧠 Generates a concise title and cleaned-up summary using GPT-4
- 📅 Extracts any date/time references in the note
- 🔗 Parses and lists any URLs present
- 🎨 Built with Angular 17 and styled using Tailwind CSS
- 📦 Self-contained frontend-only app — no backend needed
- 🔐 Secure overlay for entering your OpenAI key (not stored)

---

## ⚙️ Requirements

- Node.js and npm
- Angular CLI (`npm install -g @angular/cli`)
- Your own **OpenAI GPT API key** (recommended: GPT-4)

---

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/Nicco-DevSandbox/task-tracker.git
   cd task-tracker
   ```

2. **Install Dependencies**
  ```
  npm install
  ```

3. **Add your OpenAI API key**

When you launch the app, you'll be prompted to enter your own GPT-4 API key via a secure overlay input.

🚫 The API key is never stored, logged, or saved — it exists only in memory for that session.

4. **Run the development server**
  ```
  ng serve
  ```


📄 How It Works
When you enter a new note, it’s sent to GPT-4 via the OpenAI Chat Completion API with a prompt asking for:

A short, descriptive title

A condensed version of the note

Any dates or times mentioned

Any links or URLs found

The response is parsed into a structured TaskData object and rendered in the UI.
