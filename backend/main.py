from fastapi import FastAPI
from database import engine, SessionLocal
from models import Base, Incident
from schemas import IncidentCreate
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "SecureWatch funcionando"}

@app.post("/incidents")
def create_incident(incident: IncidentCreate):

    db = SessionLocal()

    new_incident = Incident(
        title=incident.title,
        description=incident.description,
        severity=incident.severity,
        status=incident.status
    )

    db.add(new_incident)

    db.commit()

    db.refresh(new_incident)

    return new_incident

@app.get("/incidents")
def get_incidents():

    db = SessionLocal()

    incidents = db.query(Incident).all()

    return incidents

@app.delete("/incidents/{incident_id}")
def delete_incident(incident_id: int):

    db = SessionLocal()

    incident_db = db.query(Incident).filter(Incident.id == incident_id).first()

    if incident_db is None:
        return {"error": "Incidente no encontrado"}

    db.delete(incident_db)

    db.commit()

    return {"message": "Incidente eliminado"}