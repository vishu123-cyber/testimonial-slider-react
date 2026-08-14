# ⭐ React Testimonial Slider

A simple and responsive **Testimonial Slider** built using **React.js**.
The application displays customer testimonials with profile information, job titles, review text, navigation controls, and a **Surprise Me** button to display a random testimonial.

## 🚀 Live Features

* 👤 Display testimonial profile
* 💬 Display customer reviews
* ⬅️ Previous testimonial button
* ➡️ Next testimonial button
* 🎲 Surprise Me button
* 🔄 Dynamic testimonial switching
* 📱 Responsive user interface
* 🎨 Clean and modern design
* ⚛️ Built using React functional components
* 📦 Reusable components

---

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Tailwind CSS**
* **React Icons**
* **Create React App**

---

## 📂 Project Structure

```text
testimonial-slider/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── avatar-placeholder.svg
│   │
│   ├── components/
│   │   ├── Card.js
│   │   └── Testimonials.js
│   │
│   ├── App.js
│   ├── data.js
│   ├── index.css
│   └── index.js
│
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Main Components

### `App.js`

The main application component.

It:

* Displays the application title.
* Loads the testimonial data.
* Passes the testimonial data to the `Testimonials` component.

### `Testimonials.js`

Controls the testimonial slider logic.

It uses React's:

```javascript
useState()
```

to keep track of the currently displayed testimonial.

It provides:

* Previous testimonial
* Next testimonial
* Random testimonial

### `Card.js`

Displays an individual testimonial card containing:

* Profile image
* Name
* Job title
* Testimonial text
* Quote icons
* Navigation buttons
* Surprise Me button

### `data.js`

Contains the testimonial data.

Each testimonial includes:

```javascript
{
  id,
  name,
  job,
  image,
  text
}
```

---

## ✨ Features

### 1. Previous & Next Navigation

Users can move between testimonials using the left and right navigation buttons.

The slider also handles the beginning and end of the testimonial list, creating a circular navigation experience.

### 2. Surprise Me

The **Surprise Me** button randomly selects a testimonial.

It uses JavaScript's:

```javascript
Math.random()
```

to generate a random testimonial index.

### 3. Component-Based Architecture

The project is divided into reusable React components:

```text
App
 ↓
Testimonials
 ↓
Card
```

This makes the project easier to understand, maintain and extend.

### 4. Responsive Design

The interface uses CSS to create a clean layout that adapts to different screen sizes.

---

## 🧠 React Concepts Used

This project demonstrates several important React concepts:

* Functional Components
* Props
* State
* `useState`
* Component Reusability
* Event Handling
* Array Data Rendering
* Random Data Selection
* React Strict Mode

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/testimonial-slider.git
```

### 2. Navigate to the Project

```bash
cd testimonial-slider
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be generated inside the:

```text
build/
```

folder.

---

## 📸 Project Preview

Add a screenshot of your project here:

```markdown
![Testimonial Slider Screenshot](./screenshot.png)
```

---

## 🔮 Future Improvements

Some features that can be added in the future:

* Automatic testimonial sliding
* Pause/play slider
* Touch/swipe support for mobile
* User-added testimonials
* Backend/database integration
* Star ratings
* Dark mode
* Animations and transitions
* API-based testimonial data

---

## 🎯 Learning Outcome

This project helped demonstrate how to build a **dynamic React application using reusable components and state management**.

It provides practical experience with:

* React component architecture
* State management using `useState`
* Passing data using props
* Handling button events
* Working with arrays of objects
* Creating interactive UI components

---

## 👨‍💻 Author

**Your Name**

GitHub: `https://github.com/YOUR-USERNAME`

---

## 📄 License

This project is created for **learning and educational purposes**.
