from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)


def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


class New_Record(BaseModel):
    m_100: int
    m_200: int
    m_400: int
    m_800: int
    m_1000: int
    m_1500: int
    km_4: int
    km_5: int
    km_6: int
    km_8: int
    km_10: int
    km_12: int
    km_15: int
    km_18: int
    km_21: int
    km_30: int
    km_42: int
    km_100: int


@app.get("/")
def read_api(db: Session = Depends(get_db)):
    return db.query(models.Records).all()


@app.get("/existing-ids/")
def get_existing_ids(db: Session = Depends(get_db)):
    existing_ids = db.query(models.Records.id).all()
    return [id[0] for id in existing_ids]


@app.get("/{record_id}/")
def get_record_by_id(record_id: int, db: Session = Depends(get_db)):
    
    record_model = db.query(models.Records).filter(models.Records.id == record_id).first()

    if record_model is None:
        raise HTTPException(
            status_code=404,
            detail=f"ID {record_id} : Does not exist"
        )

    return record_model


@app.post("/")
def create_new_user_record(record: New_Record, db: Session = Depends(get_db)):

    record_model = models.Records()
    record_model.m_100 = record.m_100
    record_model.m_200 = record.m_200
    record_model.m_400 = record.m_400
    record_model.m_800 = record.m_800
    record_model.m_1000 = record.m_1000
    record_model.m_1500 = record.m_1500
    record_model.km_4 = record.km_4
    record_model.km_5 = record.km_5
    record_model.km_6 = record.km_6
    record_model.km_8 = record.km_8
    record_model.km_10 = record.km_10
    record_model.km_12 = record.km_12
    record_model.km_15 = record.km_15
    record_model.km_18 = record.km_18
    record_model.km_21 = record.km_21
    record_model.km_30 = record.km_30
    record_model.km_42 = record.km_42
    record_model.km_100 = record.km_100

    db.add(record_model)
    db.commit()

    return record


#  TO DO = SHOULD UPDATE AN EXISTING USER RECORD
@app.put("/{record_id}/")
def update_existing_record(record_id: int, record: New_Record, db: Session = Depends(get_db)):

    record_model = db.query(models.Records).filter(models.Records.id == record_id).first()

    if record_model is None:
        raise HTTPException(
            status_code=404,
            detail=f"ID {record_id} : Does not exist"
        )

    record_model.m_100 = record.m_100
    record_model.m_200 = record.m_200
    record_model.m_400 = record.m_400
    record_model.m_800 = record.m_800
    record_model.m_1000 = record.m_1000
    record_model.m_1500 = record.m_1500
    record_model.km_4 = record.km_4
    record_model.km_5 = record.km_5
    record_model.km_6 = record.km_6
    record_model.km_8 = record.km_8
    record_model.km_10 = record.km_10
    record_model.km_12 = record.km_12
    record_model.km_15 = record.km_15
    record_model.km_18 = record.km_18
    record_model.km_21 = record.km_21
    record_model.km_30 = record.km_30
    record_model.km_42 = record.km_42
    record_model.km_100 = record.km_100

    db.add(record_model)
    db.commit()

    return record


@app.delete("/{record_id}/")
def delete_user_record(record_id: int, db: Session = Depends(get_db)):

    record_model = db.query(models.Records).filter(models.Records.id == record_id).first()

    if record_model is None:
        raise HTTPException(
            status_code=404,
            detail=f"ID {record_id} : Does not exist"
        )

    db.query(models.Records).filter(models.Records.id == record_id).delete()

    db.commit()
