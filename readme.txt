# Lesson 1 – React Intro

## Create first project with Vite

- **Setup**
  ```bash
  npm create vite@latest
Choose React + TypeScript

Install dependencies: npm install

Start dev server: npm run dev

Cleanup

Remove boilerplate in main.tsx and App.tsx

Remove unused CSS files

💻 Exercise: Run the project and confirm you see a blank page.

Project structure
main.tsx → entry point (connects React to the DOM)

App.tsx → root component (global components, routing)

components/ → reusable UI blocks

pages/ → application pages

Live coding
Create components/Button.tsx

Button should log:

tsx
Copy code
console.log("Button clicked!")
Import and use the button in App.tsx

Show how Strict Mode makes the log appear twice.