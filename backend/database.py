from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy_utils import database_exists, create_database

DATABASE_URL = "mysql+mysqlconnector://root:senha@db_server/project_db"

engine = create_engine(DATABASE_URL)
if not database_exists(engine.url):
  create_database(engine.url)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
