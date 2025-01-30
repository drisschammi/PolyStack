from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_cors import CORS

# ORM for database interaction
db = SQLAlchemy()
# Handles database migrations
migrate = Migrate()
# Simplifies data serialization
ma = Marshmallow()
# Enables cross-origin resource sharing
cors = CORS()