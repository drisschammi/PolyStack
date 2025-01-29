import os
import pandas as pd
import psycopg2
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def read_excel(file_path):
    """Read data from an Excel file and return it as a pandas DataFrame."""
    return pd.read_excel(file_path)

def connect_to_postgres():
    """Establish a connection to the PostgreSQL database using environment variables."""
    try:
        conn = psycopg2.connect(
            host=os.getenv("DB_HOST"),
            port=os.getenv("DB_PORT"),
            dbname=os.getenv("DB_NAME"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD")
        )
        return conn
    except psycopg2.Error as e:
        print(f"Error connecting to PostgreSQL: {e}")
        raise

def create_tables(conn):
    """Create necessary tables in the PostgreSQL database."""
    with conn.cursor() as cur:
        # Create the customer table
        cur.execute("""
            CREATE TABLE IF NOT EXISTS customer (
                customer_id VARCHAR(50) PRIMARY KEY,
                gender VARCHAR(10),
                income_group VARCHAR(50),
                region VARCHAR(50),
                marital_status BOOLEAN
            );
        """)

        # Create the policy table
        cur.execute("""
            CREATE TABLE IF NOT EXISTS policy (
                policy_id VARCHAR(50) PRIMARY KEY,
                customer_id VARCHAR(50) REFERENCES customer(customer_id) ON DELETE CASCADE,
                date_of_purchase DATE,
                fuel VARCHAR(20),
                vehicle_segment VARCHAR(20),
                premium NUMERIC,
                bodily_injury_liability BOOLEAN,
                personal_injury_protection BOOLEAN,
                property_damage_liability BOOLEAN,
                collision BOOLEAN,
                comprehensive BOOLEAN
            );
        """)
        conn.commit()

def insert_data(conn, df):
    """Insert data from a pandas DataFrame into the PostgreSQL database."""
    with conn.cursor() as cur:
        for _, row in df.iterrows():
            try:
                cur.execute("""
                    INSERT INTO customer (customer_id, gender, income_group, region, marital_status)
                    VALUES (%s, %s, %s, %s, %s)
                    ON CONFLICT (customer_id) DO NOTHING;
                """, (
                    row['customer_id'],
                    row['customer_gender'],
                    row['customer_income_group'],
                    row['customer_region'],
                    bool(row['customer_marital_status']),
                ))
            except psycopg2.Error as e:
                print(f"Error inserting customer: {e}")

            try:
                cur.execute("""
                    INSERT INTO policy (
                        policy_id, customer_id, date_of_purchase, fuel, vehicle_segment, premium,
                        bodily_injury_liability, personal_injury_protection, property_damage_liability,
                        collision, comprehensive
                    )
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    ON CONFLICT (policy_id) DO NOTHING;
                """, (
                    row['policy_id'],
                    row['customer_id'],
                    row['date_of_purchase'],
                    row['fuel'],
                    row['vehicle_segment'],
                    row['premium'],
                    bool(row['bodily_injury_liability']),
                    bool(row['personal_injury_protection']),
                    bool(row['property_damage_liability']),
                    bool(row['collision']),
                    bool(row['comprehensive']),
                ))
            except psycopg2.Error as e:
                print(f"Error inserting policy: {e}")

        conn.commit()

def main():
    file_path = "DataSet-InsuranceClient.xlsx"
    df = read_excel(file_path)

    conn = connect_to_postgres()
    create_tables(conn)
    insert_data(conn, df)
    conn.close()

if __name__ == "__main__":
    main()