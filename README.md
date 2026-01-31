# 💼 Professional Card Maker
A modern, interactive Business Card Generator built using React that allows users to create, preview, theme, and export professional digital business cards in real time.


## 🚀 Overview
**Professional Card Maker** is a polished frontend application that enables users to **create, preview, customize, and export professional business cards in real time**.
The project is designed to reflect **real-world frontend engineering workflows**, focusing on clean component architecture, UI/UX polish, state management, and export functionality.


## ✨ Core Features

* 🔴 **Live Preview** – Card updates instantly as the user types
* 🌙 **Light / Dark Mode** – Seamless theme switching
* 🎨 **Modern Card Design** – Professional layout with visual accents
* 📇 **Contact Details Support**

  * Name
  * Designation
  * Phone
  * Email
  * LinkedIn / Website
* 🌐 **Icon-Based Contact Display** – Clean and readable icons
* 📄 **Export Functionality**

  * PDF
  * PNG
  * JPEG
* 📱 **Responsive UI** – Works across screen sizes


## 📸 Screenshots
### Business Card Preview

![Business Card Preview](https://github.com/poojareddyyy/Business-Card-Generator/blob/432c8f9219b09755c0c4830aa8bafd3d68839362/Business-Card/Screenshot%202026-01-31%20163901.png)


## 🧩 Tech Stack

| Technology                       | Usage                                 |
| -------------------------------- | ------------------------------------- |
| **React**                        | Component-based UI & state management |
| **JavaScript (ES6+)**            | Application logic                     |
| **SCSS**                         | Modular, maintainable styling         |
| **CSS Flexbox**                  | Layout & alignment                    |
| **react-component-export-image** | Exporting UI as files                 |


## 🏗️ Project Structure
```bash
Business-Card/
│
├── screenshots/                  
│   ├── card-preview.png
│   
│
├── src/
│   ├── components/               # All React components
│   │   ├── App.js
│   │   ├── Header.js
│   │   ├── Form.js
│   │   ├── FormElement.js
│   │   ├── Preview.js
│   │   └── BusinessCard.js
│   │
│   ├── styles/                   # All SCSS files
│   │   ├── index.scss            # global styles
│   │   └── BusinessCard.scss     # card-specific styles
│   │
│   ├── index.js
│
├── public/
│   └── index.html
│
├── .gitignore
├── package.json
├── README.md
└── package-lock.json
```

## ⚙️ Application Flow

1. User enters details in the form
2. React state updates through controlled inputs
3. Preview pane reflects changes instantly
4. User switches between light and dark themes
5. Business card can be exported as PDF / PNG / JPEG


## ▶️ Getting Started

### Prerequisites

* Node.js (v18 or above)
* npm

### Setup Instructions

```bash
git clone https://github.com/your-username/professional-card-maker.git
cd business-card
npm install
npm start
```

The app runs at:
 **[http://localhost:3000](http://localhost:3000)**


## 📌 Planned Enhancements

* 🎨 Multiple card templates
* 🖼 Logo upload support
* 🌐 Deployment on Netlify / Vercel
* 💾 Save and reuse card designs


## 👩‍💻 Author

**Pooja Reddy**  
 Full Stack Developer  
🔗 LinkedIn: [linkedin.com/in/pooja-reddy-a96126360](https://www.linkedin.com/in/pooja-reddy-a96126360)







