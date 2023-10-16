from sqlalchemy import Column, Integer
from database import Base


class Records(Base):
    __tablename__ = "records"

    id = Column(Integer, primary_key=True, index=True)
    m_100 = Column(Integer)
    m_200 = Column(Integer)
    m_400 = Column(Integer)
    m_800 = Column(Integer)
    m_1000 = Column(Integer)
    m_1500 = Column(Integer)
    km_4 = Column(Integer)
    km_5 = Column(Integer)
    km_6 = Column(Integer)
    km_8 = Column(Integer)
    km_10 = Column(Integer)
    km_12 = Column(Integer)
    km_15 = Column(Integer)
    km_18 = Column(Integer)
    km_21 = Column(Integer)
    km_30 = Column(Integer)
    km_42 = Column(Integer)
    km_100 = Column(Integer)