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
   git clone https://github.com/niccojacinto/task-tracker.git
   cd task-tracker
   ```
