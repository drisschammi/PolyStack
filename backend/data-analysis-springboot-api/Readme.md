# Insurance Policy Analysis API 👋🏼

## Project Description
The **Insurance Policy Analysis API** is a Spring Boot-based solution designed for analyzing and visualizing insurance policy data. It allows users to derive valuable insights from customer and policy datasets, focusing on trends like daily and monthly insurance policy purchases.

Extract valuable insights from insurance-related data and expose them through APIs. Built with Spring Boot, it provides advanced insights via APIs, and is Dockerized for seamless deployment.

---

## 💻 Tech Stack:
![Java](https://img.shields.io/badge/Java-%23007396.svg?style=for-the-badge&logo=java&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Swagger](https://img.shields.io/badge/Swagger-%2385EA2D.svg?style=for-the-badge&logo=swagger&logoColor=black)

---

## 📚 Installation Instructions
## ✅ **Solution 1: Running the Project Locally Without Docker**
This method ensures that the DataLoader project runs first to populate the PostgreSQL database before running the Spring Boot application.

### **Step 1: Run the DataLoader Project**
1. **Clone the DataLoader repository:**
   ```bash
   git clone https://github.com/data-analytics-dashboard.git
   cd backend/postgresdataimport
   ```

2. **Set Up PostgreSQL Database Manually**
    - Install PostgreSQL on your system.
    - Create a new database:
      ```sql
      CREATE DATABASE DataSetInsuranceClient;
      ```
    - Update the `.env` file in the `backend/postgresdataimport` directory with the correct database credentials.

3. **Install Python Dependencies**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install pandas psycopg2 python-dotenv openpyxl
   ```

4. **Run the Python Script Manually to Load Data**
   ```bash
   python data_importer.py
   ```

---

### **Step 2: Run the Spring Boot Application**
Once the database is set up and data is loaded, the Spring Boot application can be started.

1. **Clone the Spring Boot Repository:**
   ```bash
   git clone https://github.com/data-analytics-dashboard.git
   cd backend/data-analysis-springboot-api
   ```

2. **Set Up Environment Variables**
   If running the JAR file manually, you must set environment variables:

   **PowerShell:**
   ```powershell
   $env:SPRING_DATASOURCE_URL="jdbc:postgresql://localhost:5433/DataSetInsuranceClient"
   $env:SPRING_DATASOURCE_USERNAME="blablabla"
   $env:SPRING_DATASOURCE_PASSWORD="blablabla"
   $env:SPRING_JPA_HIBERNATE_DDL_AUTO="none"
   ```

   **Git Bash:**
   ```bash
   export SPRING_DATASOURCE_URL="jdbc:postgresql://localhost:5433/DataSetInsuranceClient"
   export SPRING_DATASOURCE_USERNAME="blablabla"
   export SPRING_DATASOURCE_PASSWORD="blablabla"
   export SPRING_JPA_HIBERNATE_DDL_AUTO="none"
   ```

   **Command Prompt:**
   ```cmd
   set SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5433/DataSetInsuranceClient
   set SPRING_DATASOURCE_USERNAME=blablabla
   set SPRING_DATASOURCE_PASSWORD=blablabla
   set SPRING_JPA_HIBERNATE_DDL_AUTO=none
   ```

3. **Build the Application:**
   ```bash
   ./gradlew clean build
   ```

4. **Run the Application:**
   ```bash
   java -jar build/libs/data-analysis-api-0.0.1-SNAPSHOT.jar
   ```

---

## ✅ **Solution 2: Running Everything with Docker Compose**
This solution eliminates the need for manual database setup by using Docker.

1. **Clone the Spring Boot Repository:**
   ```bash
   git clone https://github.com/data-analytics-dashboard.git
   cd backend/data-analysis-springboot-api
   ```

2. **Run Docker Compose**
   ```bash
   docker-compose up -d
   ```
    - This command will start PostgreSQL, the DataLoader project, and the Spring Boot application.
    - **Ensure you are logged into Docker Hub** so that it can pull the required images.

3. **Verify Running Containers:**
   ```bash
   docker ps
   ```

---

## 🌟 Features
- **Analyze daily and monthly trends** in insurance policy purchases.
- **Import data from Excel files**.
- **Interactive Swagger API documentation** at `/swagger-ui.html`.
- **Dockerized deployment** for scalability and simplicity.

---

## 📊 Example API Usage

### **1. Daily Policy Trends**
- **Endpoint:** `/api/v1/daily-policy-trends`
- **Method:** GET
- **Response:**
  ```json
  [
    {
      "date": "2025-01-20",
      "count": 99
    },
    {
      "date": "2025-01-21",
      "count": 120
    }
  ]
  ```

### **2. Monthly Policy Trends**
- **Endpoint:** `/api/v1/monthly-policy-trends`
- **Method:** GET
- **Response:**
  ```json
  [
    {
      "month": "January",
      "count": 500
    },
    {
      "month": "February",
      "count": 450
    }
  ]
  ```

---

## 📚 Documentation

### Swagger UI
Access the interactive API documentation at:
[http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

---

## 🎓 Get hands-on experience building APIs with Spring Boot:
- Learn the fundamentals of RESTful APIs.
- Understand containerization using Docker.
- Practice real-world data analysis and visualization.
