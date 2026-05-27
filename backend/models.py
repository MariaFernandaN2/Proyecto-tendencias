from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Incident(Base):
    __tablename__ = "incidents"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String)

    description = Column(String)

    severity = Column(String)

    status = Column(String, default="Abierto")

    created_at = Column(DateTime, default=datetime.utcnow)