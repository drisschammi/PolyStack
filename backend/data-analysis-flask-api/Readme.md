# Insurance Policy Analysis API 👋🏼

## Project Description
The **Insurance Policy Analysis API** is a Flask-based solution designed for analyzing and visualizing insurance policy data. It allows users to derive valuable insights from customer and policy datasets, focusing on retrieving insights like region and gender distributions

Extract valuable insights from insurance-related data and expose them through APIs. Built with Flask, it provides advanced insights via APIs, supports PostgreSQL for data storage, and is Dockerized for seamless deployment.

---

## 💻 Tech Stack:  
![Flask](https://img.shields.io/badge/Flask-%23000000.svg?style=for-the-badge&logo=flask&logoColor=white) ![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-%23D71E00.svg?style=for-the-badge&logo=python&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Python](https://img.shields.io/badge/Python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white)

---

## 📚 Installation Instructions

## ✅ **Solution 1: Running the Project Locally Without Docker**
This method ensures that the DataLoader project runs first to populate the PostgreSQL database before running the Flask application.

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

### **Step 2: Run the Flask Application**
Once the database is set up and data is loaded, the Flask application can be started.

1. **Clone the Flask Repository:**
   ```bash
   git clone https://github.com/PolyStack.git
   cd backend/data-analysis-flask-api
   ```

2. **Set Up Virtual Environment and Install Dependencies**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Set Up Environment Variables**
   Create an `.env` file in the root directory with the following:
   ```env
   SECRET_KEY="your-secret-key"
   FLASK_DEBUG="true"
   DATABASE_URL="postgresql://blablabla:blablabla@localhost:5433/DataSetInsuranceClient"
   ```

4. **Run the Flask App**
   ```bash
   flask run
   ```

---

## ✅ **Solution 2: Running Everything with Docker Compose**
This solution eliminates the need for manual database setup by using Docker.

1. **Clone the Flask Repository:**
   ```bash
   git clone https://github.com/PolyStack.git
   cd backend/data-analysis-flask-api
   ```
2. **Create a `.env` File in the Root Directory:**
   Before running Docker Compose, make sure to create a `.env` file in the root of your project with the following contents:

   ```
   FLASK_DEBUG=true
   SECRET_KEY=blablabla
   DATABASE_URL=postgresql://blablabla:blablabla@postgres:5432/DataSetInsuranceClient
   ```

3. **Run Docker Compose**
   ```bash
   docker-compose up -d
   ```
    - This command will start PostgreSQL, the DataLoader project, and the Flask application.
    - **Ensure you are logged into Docker Hub** so that it can pull the required images.

4. **Verify Running Containers:**
   ```bash
   docker ps
   ```

---

## 🌟 Features
- **Region and Gender Distributions** for actionable insights.  
- **PostgreSQL Database** for robust data management.  
- **Interactive Swagger Documentation** at `/swagger-ui`.  
- **Dockerized Deployment** for scalability and portability.  

---

## 📊 Example API Usage

### **1. Region Distribution**
- **Endpoint:** `/api/v1/region-distribution`  
- **Method:** GET  
- **Response:**  
  ```json
  [  
    { "region": "East", "percentage": "20" },  
    { "region": "West", "percentage": "30" }  
  ]  
  ```

### **2. Gender Distribution**
- **Endpoint:** `/api/v1/gender-distribution`  
- **Method:** GET  
- **Response:**  
  ```json
  [  
    { "gender": "male", "percentage": "60" },  
    { "gender": "female", "percentage": "40" }  
  ]  
  ```

---

## 📚 Documentation

### Swagger UI
Access the interactive API documentation at:
[http://localhost:8000/swagger-ui/](http://localhost:8000/swagger-ui/)

---

## 🎓 Learn to Build Flask APIs with Data Analysis
- Gain hands-on experience in building RESTful APIs.
- Learn how to containerize Flask applications using Docker.
- Work with real-world data analysis and visualization techniques.

---