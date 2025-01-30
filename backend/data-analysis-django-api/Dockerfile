# Start with a base Python image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy only the requirements file
COPY requirements.txt /app/

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire source code into the container (because this is for development)
COPY . /app/

# Set environment variables for Python to avoid writing bytecode and buffering output
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Expose port 8000 for the Django development server
EXPOSE 8000

# Run migrations and start the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]