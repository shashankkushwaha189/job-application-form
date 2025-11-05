# 💼 HireSphere – Smart Job Application Form System

A modern, responsive multi-step job application portal built for growing tech companies.  
Designed and developed as part of **JASIQ Labs Training**, this project demonstrates full-stack web fundamentals: HTML, CSS, JavaScript, LocalStorage, and UI/UX optimization.

---

## 🌐 Live Demo
> [Coming Soon on Render](https://hiresphere.render.com)

---

## 🚀 Project Overview

### 🎯 **Business Context**
- **Client:** A growing IT services firm expanding its HR capabilities.  
- **Goal:** Build a web-based career application system to replace manual hiring workflows.  
- **Why It Matters:**  
  - Streamlines the recruitment process.  
  - Enhances employer branding with a professional career portal.  
  - Collects structured candidate data efficiently.

### 🧩 **Key Outcomes**
- Responsive, mobile-first UI.  
- Auto-save progress with browser LocalStorage.  
- Multi-step form with validation and review.  
- File upload with size/type validation.  
- Dark mode toggle for accessibility.  
- Analytics counters for HR metrics.  

---

## 📁 **File Structure**

hiresphere/
│── components/
│ ├── header.html
│ └── footer.html
│
│── pages/
│ ├── index.html # Main multi-step job form
│ └── thankyou.html # Submission confirmation
│
│── css/
│ ├── base.css
│ ├── layout.css
│ ├── components.css
│ ├── form.css
│ └── thankyou.css
│
│── js/
│ ├── loader.js # Loads header/footer components
│ ├── utils.js # Utility helpers
│ └── form.js # Multi-step form logic
│
│── images/
│ └── logo.png
│
│── README.md



---

## ⚙️ **Core Features**

### 🧭 **Multi-Step Application Form**
- Step 1: Personal Info  
- Step 2: Experience  
- Step 3: Resume Upload  
- Step 4: Review & Submit  

### ✅ **Form Validation**
- Required field checks  
- Email and phone format verification  
- Resume file type and size validation  

### 💾 **Smart Data Persistence**
- Form progress auto-saved via `localStorage`  
- Resume later functionality  

### 🌈 **Enhanced UI/UX**
- Smooth step transitions  
- Dynamic progress bar  
- Dark/light mode toggle  
- Responsive design (mobile-first)  

### 🧠 **Trainee Additions**
- Conditional field visibility (e.g., experience > 5 yrs → show Leadership Roles input)  
- Analytics: Count how many forms started vs submitted  
- Animated thank-you confirmation with redirect countdown  

---

## 🖼️ **Preview**

| Form Page | Thank You Page |
|------------|----------------|
| ![Form Preview](./images/demo-form.png) | ![Thank You Page](./images/demo-thankyou.png) |

---

## 🧰 **Tech Stack**

| Category | Tools Used |
|-----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6) |
| **Styling** | Custom CSS with variables, flexbox, animations |
| **UX Enhancements** | LocalStorage API, conditional rendering |
| **Deployment** | Render (Free Tier) |

---

## 🛠️ **Setup Instructions**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/hiresphere.git
   cd hiresphere
