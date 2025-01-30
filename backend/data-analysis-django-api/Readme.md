# Insurance Policy Analysis API 👋🏼

## Project Description
The **Insurance Policy Analysis API** is a Django-based solution designed for analyzing and visualizing insurance policy data. It allows users to derive valuable insights from customer and policy datasets, focusing on premium distribution across various demographics such as region, income group, marital status, vehicle segment, and fuel type.

Extract valuable insights from insurance-related data and expose them through APIs. Built with Django REST Framework, it provides advanced insights via APIs, supports PostgreSQL for data storage, and is Dockerized for seamless deployment.

---

## 💻 Tech Stack:
![Python](https://img.shields.io/badge/Python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white) ![Django](https://img.shields.io/badge/Django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Swagger](https://img.shields.io/badge/Swagger-%2385EA2D.svg?style=for-the-badge&logo=swagger&logoColor=black) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white)

---

## 📚 Installation Instructions

## ✅ **Solution 1: Running the Project Locally Without Docker**
This method ensures that the DataLoader project runs first to populate the PostgreSQL database before running the Django application.

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

### **Step 2: Run the Django Application**
Once the database is set up and data is loaded, the Django application can be started.

1. **Clone the Django Repository:**
   ```bash
   git clone https://github.com/PolyStack.git
   cd backend/data-analysis-django-api
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
   DEBUG=True
   ALLOWED_HOSTS=localhost,127.0.0.1
   CORS_ALLOWED_ORIGINS=http://localhost:5173
   DATABASE_NAME=DataSetInsuranceClient
   DATABASE_USER=blablabla
   DATABASE_PASSWORD=blablabla
   DATABASE_HOST=localhost
   DATABASE_PORT=5433
   ```

4. **Run the Django App**
   ```bash
   python manage.py runserver
   ```

---

## ✅ **Solution 2: Running Everything with Docker Compose**
This solution eliminates the need for manual database setup by using Docker.

1. **Clone the Django Repository:**
   ```bash
   git clone https://github.com/PolyStack.git
   cd backend/data-analysis-django-api
   ```

2. **Run Docker Compose**
   ```bash
   docker-compose up -d
   ```
    - This command will start PostgreSQL, the DataLoader project, and the Django application.
    - **Ensure you are logged into Docker Hub** so that it can pull the required images.

3. **Verify Running Containers:**
   ```bash
   docker ps
   ```

---

## 🌟 Features
- **Analyze premium distribution** across different customer groups.
- **Interactive Swagger API documentation** at `/swagger-ui/`.
- **Dockerized deployment** for scalability and simplicity.

---

## 📊 Example API Usage


### **1. Premium by Region**
- **Endpoint:** `/api/v1/premium-by-region/`
- **Method:** GET
- **Description:** Retrieves the average insurance premium paid across different geographical regions.
- **Reponse:**
   ```json
   [
      {
         "customer__region": "East",
         "average_premium": 1500
      },
      {
         "customer__region": "North",
         "average_premium": 1000
      },
      {
         "customer__region": "South",
         "average_premium": 900
      },
      {
         "customer__region": "West",
         "average_premium": 1250
      }
   ]
   ```

### **2. Premium by Income Group**
- **Endpoint:** `/api/v1/premium-by-income/`
- **Method:** GET
- **Description:** Retrieves the average insurance premium paid by customers grouped by their incomes.
- **Reponse:**
   ```json
   [
      {
         "customer__income_group": "$25-$70K",
         "average_premium": 1502.320781032078
      },
      {
         "customer__income_group": ">$70K",
         "average_premium": 1467.3061224489795
      },
      {
         "customer__income_group": "0- $25K",
         "average_premium": 1515.7304147465438
      }
   ]
   ```

### **3. Premium by Marital Status**
- **Endpoint:** `/api/v1/premium-by-marital-status/`
- **Method:** GET
- **Description:** Retrieves the average insurance premium paid based on the marital status of the customer.
- **Reponse:**
   ```json
   [
      {
         "customer_marital_status": false,
         "average_premium": 1517.307783018868
      },
      {
         "customer_marital_status": true,
         "average_premium": 1477.875
      }
   ]
   ```

### **4. Premium by Vehicle Segment**
- **Endpoint:** `/api/v1/premium-by-vehicle-segment/`
- **Method:** GET
- **Description:** Retrieves the average insurance premium paid for each vehicle segment.
- **Reponse:**
   ```json
      [
      {
         "vehicle_segment": "A",
         "average_premium": 1498.7400662251655
      },
      {
         "vehicle_segment": "B",
         "average_premium": 1518.8373786407767
      },
      {
         "vehicle_segment": "C",
         "average_premium": 1499.3967391304348
      }
      ]
   ```

### **5. Premium by Fuel Type**
- **Endpoint:** `/api/v1/premium-by-fuel-type/`
- **Method:** GET
- **Description:** Retrieves the average insurance premium paid based on the fuel type of the vehicle.
- **Reponse:**
   ```json
   [
      {
         "fuel": "CNG",
         "average_premium": 1499
      },
      {
         "fuel": "Diesel",
         "average_premium": 1561
      },
      {
         "fuel": "Petrol",
         "average_premium": 1494
      }
   ]
   ```
---

## 📚 Documentation

### Swagger UI
Access the interactive API documentation at:
[http://localhost:8000/swagger-ui/](http://localhost:8000/swagger-ui/)

---

## 🎓 Learn to Build Django APIs with Data Analysis
- Gain hands-on experience in building RESTful APIs.
- Learn how to containerize Django applications using Docker.
- Work with real-world data analysis and visualization techniques.

---