# DataLoader Project 👋🏼

## Project Description
The **DataLoader Project** helps in importing, processing, and organizing data from Excel files into a PostgreSQL database. This project serves as the foundational step for a larger **full-stack web application** designed for data analysis and visualization.

This project is part of a modular system that involves:
- **Frontend Development**: Using React and Vite for data visualization.
- **Backend Services**: Built with Django, Flask, Node.js, and Spring Boot to handle different functionalities and connect to the database.
- **Data Management**: Data imported through this DataLoader tool is queried and processed by backend services for analysis.

---

## 💻 Tech Stack:
![Python](https://img.shields.io/badge/Python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Pandas](https://img.shields.io/badge/Pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)

---

## 📦 Installation Instructions

### Prerequisites
Ensure you have the following installed:
- [Python 3.8+](https://www.python.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

---

### There are multiple ways to run this project:
#### **Solution 1: Running Locally Without Docker**
1. **Install Required Dependencies:**
   - Install [Python 3.8+](https://www.python.org/)
   - Install [PostgreSQL](https://www.postgresql.org/)
2. **Set Up PostgreSQL Database:**
   - Manually create a database named `DataSetInsuranceClient`.
   - Update your `.env` file with the correct database credentials.
3. **Install Python Dependencies:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install pandas psycopg2 python-dotenv openpyxl
   ```
4. **Run the Script Manually:**
   ```bash
   python data_importer.py
   ```

#### **Solution 2: Running with Docker**
1. **Install Docker**.
2. **Use Docker Compose to Start the Services:**
   ```bash
   docker-compose up -d
   ```
   This will start PostgreSQL and the data importer automatically.

---

## 🌟 Features
- **Automated Data Loading**: Reads data from Excel and imports it into PostgreSQL.
- **Database Table Management**: Automatically creates necessary tables for customer and policy data.
- **Conflict Handling**: Prevents duplicate entries during data insertion.
- **Modular Architecture**: Clean separation of components for maintainability.

---

## Dataset
The dataset (`DataSet-InsuranceClient.xlsx`) includes:
- **Customer Data**: `customer_id`, `gender`, `income_group`, `region`, `marital_status`.
- **Policy Data**: `policy_id`, `customer_id`, `date_of_purchase`, `fuel`, `vehicle_segment`, `premium`, `bodily_injury_liability`, `personal_injury_protection`, `property_damage_liability`, `collision`, `comprehensive`.

---

## 🚀 Future Enhancements
- Add support for additional data formats (e.g., CSV, JSON).
- Implement advanced error logging.

---

## 📒 Documentation
- **Main Script**: `data_importer.py` (handles data loading and database interaction).
- **Dataset File**: `DataSet-InsuranceClient.xlsx`.
- **Docker Compose**: `docker-compose.yml` (sets up PostgreSQL).

---