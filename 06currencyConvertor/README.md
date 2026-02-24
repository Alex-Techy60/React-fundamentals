# 💱 Currency Converter App

A simple and clean **Currency Converter** built using **React** that converts between different currencies in real time using a public currency exchange API.

---

## 🚀 Features

- Convert currency from one type to another
- Real-time exchange rates
- Swap currencies instantly
- Reusable input component
- Custom React hook for API handling
- Clean UI with modern styling

---

## 🛠️ Tech Stack

- **React**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Fetch API**


---

## 🧩 Key Concepts Used

### 🔹 Custom Hook (`useCurrencyInfo`)
- Fetches currency conversion data
- Re-fetches data whenever base currency changes
- Keeps API logic clean and reusable

### 🔹 Reusable Component (`InputBox`)
- Handles amount input
- Handles currency selection
- Fully controlled via props
- Can be reused for both "From" and "To" sections

---

## 🌐 API Used (Full Credit)

This project uses the **Currency API** created and maintained by:

**Fawaz Ahmed**  
GitHub Repository:  
👉 https://github.com/fawazahmed0/currency-api

API Endpoint Used:

https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json


Huge thanks to the creator for providing a free and reliable API ❤️

---

## ▶️ How It Works

1. Select the **base currency**
2. Enter the **amount**
3. Select the **target currency**
4. Click **Convert**
5. Instantly see the converted amount
6. Use **Swap** to reverse currencies

---

## 🧪 Example

Convert:

GBP → INR


With live exchange rates fetched dynamically.

---

## 📦 Installation & Setup

```bash
git clone https://github.com/<your-username>/currency-convertor-app.git
cd currency-convertor-app
npm install
npm run dev

🎯 Future Improvements

    Add loading & error states

    Add search in currency dropdown

    Improve mobile responsiveness

    Deploy using Vercel / Netlify

👨‍💻 Author

Alex McDominey
Built as a React mini project to strengthen frontend fundamentals 🚀

⭐ If you liked this project, feel free to star the repo!