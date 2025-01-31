# React Dashboard Project 🌟

This React Vite application is designed to create dashboards that work with different back-end technologies like Django, Flask, Node.js, and Spring Boot. It uses modern web development tools to offer a flexible and interactive dashboard experience.

---

## 💻 Tech Stack:
![React](https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black) ![Sass](https://img.shields.io/badge/Sass-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-%23007EC6.svg?style=for-the-badge&logo=axios&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

---

## 📦 Installation Instructions

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [Git](https://git-scm.com/)

## 🚀 Steps to Install and Run Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/drisschammi/PolyStack.git
   cd frontend\data-analysis-react-dashboard
   ```

2. **Run the Back-End Services:**
   Make sure all back-end services are running before starting the React app. The `.env` file defines the URLs for each back-end:
   ```env
   VITE_DJANGO_URL=http://localhost:8000/
   VITE_FLASK_URL=http://localhost:5000/
   VITE_NODE_URL=http://localhost:3000/
   VITE_SPRINGBOOT_URL=http://localhost:8080/
   ```
   Start each back-end service at the corresponding port.

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**
   Ensure the `.env` file is correctly configured with the URLs of the running back-end services.

5. **Run the Application:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173/`.

6. **Build for Production:**
   ```bash
   npm run build
   ```
   This creates optimized production files in the `dist/` folder.

---

## 🚀 Steps to Install and Run in Docker

1. **Clone the Repository**
    ```bash
    git clone https://github.com/drisschammi/PolyStack.git
    cd frontend/data-analysis-react-dashboard
    ```

2. **Create a .env File:**
    Make sure you have a .env file in the React project with the required environment variables:
    ```env
    # React Environment
    NODE_ENV=development
    PORT=5173

    # Backend API URLs
    VITE_DJANGO_URL=http://localhost:8000
    VITE_FLASK_URL=http://localhost:5000
    VITE_NODE_URL=http://localhost:3000
    VITE_SPRINGBOOT_URL=http://localhost:8080

    # Database Configuration
    PG_HOST=postgres
    PG_PORT=5432
    PG_USER=blablabla
    PG_DATABASE=DataSetInsuranceClient
    PG_PASSWORD=blablabla

    # Other Configurations
    SECRET_KEY=blablabla
    DEBUG=true

    ```

3. **Build and Start All services:**
    Run the following command to build and start all services (React, Django, Flask, Node.js, Spring Boot, PostgreSQL):
    ```bash
    docker-compose up --build -d
    ```
4. **Verify Services Are Running:**
    Once the containers start, the services will be accessible at:

    - React App → http://localhost:5173
    - Django Backend → http://localhost:8000
    - Flask Backend → http://localhost:5000
    - Node.js Backend → http://localhost:3000
    - Spring Boot Backend → http://localhost:8080
    - PostgreSQL Database → Running on localhost:5433 (exposed for external connections)

5. **Stop and Clean Up Docker Containers:**
To stop all services, use:
    ```bash
    docker-compose down
    ```

---

## 🌟 Features

- **Multi-Dashboard Support**:
  - Separate dashboards for Django, Flask, Node.js, and Spring Boot.
- **Theme Toggle**:
  - Switch between light and dark modes.
- **Reusable Components**:
  - Common chart components for bar, line, and pie charts.
- **Sidebar Navigation**:
  - Easily navigate between dashboards.

---

## 📊 Example Usage

### **1. Django Dashboard**
- **URL:** `/`
- Displays metrics and insights related to Django applications.

### **2. Flask Dashboard**
- **URL:** `/flask`
- Provides visualizations for Flask-related data.

### **3. Node.js Dashboard**
- **URL:** `/node`
- Showcases Node.js metrics, including performance trends.

### **4. Spring Boot Dashboard**
- **URL:** `/springboot`
- Analyzes data from Spring Boot services.

---

## ⚙️ Configuration

### **Environment Variables**
| Variable            | Description                            | Example Value                  |
|---------------------|----------------------------------------|--------------------------------|
| `VITE_DJANGO_URL`   | The base URL for the Django back-end.  | `http://localhost:8000/`      |
| `VITE_FLASK_URL`    | The base URL for the Flask back-end.   | `http://localhost:5000/`      |
| `VITE_NODE_URL`     | The base URL for the Node.js back-end. | `http://localhost:3000/`      |
| `VITE_SPRINGBOOT_URL` | The base URL for the Spring Boot back-end. | `http://localhost:8080/`      |
| `PG_HOST`          | Database host                           | `postgres`                    |
| `PG_PORT`          | Database port                           | `5432`                         |
| `PG_USER`          | Database user                           | `blablabla`                    |
| `PG_DATABASE`      | Database name                           | `DataSetInsuranceClient`       |
| `PG_PASSWORD`      | Database password                       | `blablabla`                    |


---

## 📚 Folder Structure

### **Key Directories:**
- **`src/`**:
  - Contains all source code, including components, context, and screens.
- **`src/components/`**:
  - Reusable UI components like charts and sidebars.
- **`src/screens/`**:
  - Individual screens for each dashboard.
- **`src/api/`**:
  - Utility functions for API interactions (e.g., Axios configuration).

---

## 🎓 Learnings and Use Cases

- Practice building responsive and dynamic dashboards with React.
- Understand the use of context for state management (e.g., theme toggle, sidebar state).
- Leverage modern tools like Vite for fast development.
- Explore reusable design patterns for multi-dashboard projects.

---