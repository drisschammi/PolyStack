import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")  # PostgreSQL connection URL
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv("SECRET_KEY", "default_secret_key")

class DevelopmentConfig(Config):
    DEBUG = os.getenv("FLASK_DEBUG", "false").lower() == "true"