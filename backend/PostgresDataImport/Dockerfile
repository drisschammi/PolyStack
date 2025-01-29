FROM python:3.9-slim

WORKDIR /app

COPY data_importer.py /app/
COPY DataSet-InsuranceClient.xlsx /app/
COPY .env /app/

RUN pip install pandas psycopg2-binary python-dotenv openpyxl

CMD ["python", "data_importer.py"]