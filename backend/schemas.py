from pydantic import BaseModel

class IncidentCreate(BaseModel):
    title: str
    description: str
    severity: str
    status: str