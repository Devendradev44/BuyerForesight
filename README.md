# 🚀 User Directory Dashboard

A modern, responsive **User Directory Dashboard** built with React and TypeScript.
This project demonstrates clean architecture, optimized performance, and a polished user experience.

---

## 🔗 Live Demo

👉 https://buyer-foresight-wheat.vercel.app/

## 📂 GitHub Repository

👉 https://github.com/Devendradev44/BuyerForesight

---

## 📌 Features

* 📊 Display users in a structured dashboard (Name, Email, Phone, Company)
* 🔍 Search users by name or email (with **debouncing**)
* ↕️ Sort users by Name and Company (ascending/descending)
* 🧠 Highlight matched search results
* 📄 User detail page with full information
* 🔄 Client-side filtering and sorting
* ⏳ Loading skeleton for better UX
* ❌ Empty state handling

---

## 🛠️ Tech Stack

* ⚛️ React (Vite)
* 🟦 TypeScript
* 🎨 Tailwind CSS
* 🔀 React Router
* 🌐 Axios

---

## 🧠 Key Implementation Highlights

* **Custom Hook (****`useUsers`****)**
  Handles API logic separately for better reusability and cleaner code.

* **Debounced Search**
  Optimizes performance by reducing unnecessary filtering operations.

* **Separation of Concerns**
  Structured into API, hooks, components, pages, and utilities.

* **Reusable Components**
  Modular and scalable UI design.

---

## 📂 Folder Structure

```
src/
├── api/
├── components/
├── hooks/
├── pages/
├── types/
├── utils/
```

---

## 🚀 Setup Instructions

```bash
# Clone repository
git clone https://github.com/Devendradev44/BuyerForesight

# Navigate into project
cd BuyerForesight

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 📈 Future Improvements

* Pagination for large datasets
* Dark mode support
* API caching (React Query)
* Unit and integration testing

---

## 👨‍💻 Author

**Devendra Pujari**

---

## 💡 Notes

This project was built as part of a frontend assessment, with additional enhancements beyond basic requirements to demonstrate production-level practices.
