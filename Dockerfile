FROM python:3.11-bullseye
RUN pip install fastapi uvicorn sqlalchemy mysql-connector-python sqlalchemy_utils