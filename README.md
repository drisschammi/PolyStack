# Multi-Platform Data Analysis Project 👋🏼

## Project Description
Welcome to the **PolyStack**, a full-stack web app for data analysis and visualization. The frontend (React + Vite) displays dynamic charts, while the backend (Django, Flask, Node.js, Spring Boot) processes data from a PostgreSQL database, loaded from an Excel file via Python. Modular architecture ensures scalability and maintainability.

---

## 🎥 Video Demonstration

Check out the video below for a quick demo of **PolyStack** in action, showcasing how the front-end interacts with the back-end to deliver data analysis and visualization:

<iframe src="https://drive.google.com/file/d/1x1S95nYHi75QThox90FkTtj3oqDlXAGy/view?usp=sharing" width="640" height="480"></iframe>

---

## 💻 Tech Stack

### Back-End Technologies:
![Python](https://img.shields.io/badge/Python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white) ![Django](https://img.shields.io/badge/Django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)  
![Flask](https://img.shields.io/badge/Flask-%23000000.svg?style=for-the-badge&logo=flask&logoColor=white) ![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-%23D71E00.svg?style=for-the-badge&logo=python&logoColor=white)  
![Node.js](https://img.shields.io/badge/Node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-%23000000.svg?style=for-the-badge&logo=express&logoColor=white)  
![Java](https://img.shields.io/badge/Java-%23007396.svg?style=for-the-badge&logo=java&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)  

### Front-End Technology:
![React](https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)  

### Common Tools:
![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Swagger](https://img.shields.io/badge/Swagger-%2385EA2D.svg?style=for-the-badge&logo=swagger&logoColor=black) ![SQLite](https://img.shields.io/badge/SQLite-%23003B57.svg?style=for-the-badge&logo=sqlite&logoColor=white)

---

## Installation and Setup

### Prerequisites
Ensure the following tools are installed:
- [Python](https://www.python.org/) (v3.10 or later)
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html) (v17 or later)
- [Node.js](https://nodejs.org/) (v16 or later)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

### Step-by-Step Installation

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
- **Advanced Data Analysis**: Analyze datasets for trends and insights, such as premiums, policies, and distributions.
- **Multi-Platform APIs**: Back-end services developed with Django, Flask, Node.js, and Spring Boot.
- **Interactive Dashboards**: React-based dashboards for visualizing data from all back-end services.
- **Dockerized Deployment**: All services and dashboards are containerized for seamless deployment.
- **Swagger Documentation**: Explore APIs interactively via Swagger UI.

---

## 📊 Example API Usage

### Django API:
- **Premium by Region**
  - Endpoint: `/api/v1/premium-by-region/`
  - Method: GET
  - Example Response:
    ```json
    [
      {"region": "North", "average_premium": 1200.50},
      {"region": "South", "average_premium": 1100.30}
    ]
    ```

### Flask API:
- **Region Distribution**
  - Endpoint: `/api/v1/region-distribution`
  - Method: GET
  - Example Response:
    ```json
    [
      {"region": "East", "percentage": "20"},
      {"region": "West", "percentage": "30"}
    ]
    ```

### Node.js API:
- **Coverage by Vehicle Segment**
  - Endpoint: `/api/v1/coverage/vehicle-segment`
  - Method: GET
  - Example Response:
    ```json
    {
      "segment": "A",
      "bodilyInjuryLiability": 5,
      "personalInjuryProtection": 3,
      "propertyDamageLiability": 4
    }
    ```

### Spring Boot API:
- **Daily Policy Trends**
  - Endpoint: `/api/v1/daily-policy-trends`
  - Method: GET
  - Example Response:
    ```json
    [
      {"date": "2025-01-20", "count": 99},
      {"date": "2025-01-21", "count": 120}
    ]
    ```

---

## 🌟 Learnings and Use Cases
- **APIs:** Hands-on experience with Django, Flask, Node.js, and Spring Boot for building RESTful APIs.
- **React Dashboards:** Practice creating interactive dashboards that work with multiple back-end technologies.
- **Data Analysis:** Extract meaningful insights from datasets.
- **Docker:** Learn containerization for simplified deployment.
- **Swagger:** Explore and test APIs interactively.

---