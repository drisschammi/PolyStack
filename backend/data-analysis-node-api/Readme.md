# Insurance Policy Analysis API 👋🏼

## Project Description
The **Insurance Policy Analysis API** is a Node Express based solution designed for analyzing and visualizing insurance policy data. It allows users to derive valuable insights from customer and policy datasets, focusing on retrieving insights like coverage by Fuel Type and Vehicle Segment

Extract valuable insights from insurance-related data and expose them through APIs. Built using Node.js and Express.js, it provides advanced insights via APIs, supports PostgreSQL for data storage, and is Dockerized for seamless deployment.

---

## 💻 Tech Stack:
![Node.js](https://img.shields.io/badge/Node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-%23000000.svg?style=for-the-badge&logo=express&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Swagger](https://img.shields.io/badge/Swagger-%2385EA2D.svg?style=for-the-badge&logo=swagger&logoColor=black) ![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📚 Installation Instructions

## ✅ **Solution 1: Running the Project Locally Without Docker**
This method ensures that the DataLoader project runs first to populate the PostgreSQL database before running the Node application.

### **Step 1: Run the DataLoader Project**
1. **Clone the DataLoader repository:**
   ```bash
   git clone https://github.com/PolyStack.git
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

### **Step 2: Run the Node Application**
Once the database is set up and data is loaded, the Node application can be started.

1. **Clone the Node Repository:**
   ```bash
   git clone https://github.com/PolyStack.git
   cd backend/data-analysis-node-api
   ```

2. **Set Up Virtual Environment and Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create an `.env` file in the root directory with the following:
   ```env
   NODE_ENV=development
   PORT=3000
   PG_HOST=localhost
   PG_USER=blablabla
   PG_DATABASE=DataSetInsuranceClient
   PG_PASSWORD=blablabla
   PG_PORT=5433
   ```

4. **Run the Node App**
   ```bash
   nodemon app.js
   ```

---

## ✅ **Solution 2: Running Everything with Docker Compose**
This solution eliminates the need for manual database setup by using Docker.

1. **Clone the Node Repository:**
   ```bash
   git clone https://github.com/PolyStack.git
   cd backend/data-analysis-node-api
   ```
2. **Create a `.env` File in the Root Directory:**
   Before running Docker Compose, make sure to create a `.env` file in the root of your project with the following contents:

   ```env
   NODE_ENV=development
   PORT=3000
   PG_HOST=postgres
   PG_USER=blablabla
   PG_DATABASE=DataSetInsuranceClient
   PG_PASSWORD=blablabla
   PG_PORT=5432
   ```

3. **Run Docker Compose**
   ```bash
   docker-compose up -d
   ```
    - This command will start PostgreSQL, the DataLoader project, and the Node application.
    - **Ensure you are logged into Docker Hub** so that it can pull the required images.

4. **Verify Running Containers:**
   ```bash
   docker ps
   ```

---


## 🌟 Features
- **Get coverage by vehicle segment or fuel type** for better insights.
- **PostgreSQL Database** for robust data management.  
- **Interactive Swagger Documentation** at `/swagger-ui`.  
- **Dockerized Deployment** for scalability and portability. 

---

## 📊 Example API Usage

### **1. Get Coverage by Vehicle Segment**
- **Endpoint:** `/api/v1/coverage/vehicle-segment`
- **Method:** GET
- **Response:**
  ```json
  {
    "segment": "A",
    "bodilyInjuryLiability": 5,
    "personalInjuryProtection": 3,
    "propertyDamageLiability": 4,
    "collision": 6,
    "comprehensive": 7
  }
  ```

### **2. Get Coverage by Fuel Type**
- **Endpoint:** `/api/v1/coverage/fuel-type`
- **Method:** GET
- **Response:**
  ```json
  {
    "fuel-type": "CNG",
    "bodilyInjuryLiability": 5,
    "personalInjuryProtection": 3,
    "propertyDamageLiability": 4,
    "collision": 6,
    "comprehensive": 7
  }
  ```

---

## 📚 Documentation

### Swagger UI
Access the interactive API documentation at:
[http://localhost:3000/swagger-ui](http://localhost:3000/swagger-ui)

---

## 🎓 Learn to Build Node Express APIs with Data Analysis
- Gain hands-on experience in building RESTful APIs.
- Learn how to containerize Node applications using Docker.
- Work with real-world data analysis and visualization techniques.

---