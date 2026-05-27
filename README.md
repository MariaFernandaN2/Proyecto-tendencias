# 🛡️ SecureWatch

SecureWatch es una plataforma web desarrollada para la gestión y monitoreo de incidentes de seguridad informática.

El sistema permite registrar, visualizar y administrar incidentes TI mediante un dashboard interactivo conectado a una base de datos PostgreSQL.

![Dashboard Principal](images/dashboard-main.png)

# Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React | Desarrollo del frontend |
| FastAPI | Desarrollo del backend |
| PostgreSQL | Base de datos |
| Python | Lógica del backend |
| Recharts | Dashboard y gráficas |
| GitHub | Control de versiones |

# Funcionalidades

-Registro de incidentes de seguridad TI.

-Visualización de incidentes registrados.

-Clasificación de incidentes por severidad.

-Dashboard interactivo con gráficas.

-Eliminación de incidentes.

-Almacenamiento en base de datos PostgreSQL.

-Comunicación mediante API REST.

-Arquitectura separada en frontend y backend.

# Arquitectura del sistema

El sistema está dividido en tres componentes principales:

Frontend desarrollado en React.
Backend desarrollado con FastAPI.
Base de datos PostgreSQL.

La comunicación entre componentes se realiza mediante una API REST.

![Arquitectura](images/architecture.png)

# Estructura del proyecto

bash
SecureWatch/
│
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── database.py
│   └── venv/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── images/
│   ├── dashboard-main.png
│   └── architecture.png
│
├── .gitignore
└── README.md

#  Instalación y ejecución

## 1 Clonar el repositorio

bash
git clone https://github.com/MariaFernandaN2/Proyecto-tendencias.git

## 2 Backend

Ingresar a la carpeta backend:

-bash
-cd backend

Activar entorno virtual:

-bash
-venv\Scripts\activate

Ejecutar servidor FastAPI:

-bash
-uvicorn main:app --reload

## 3 Frontend

Ingresar a la carpeta frontend:

-bash
-cd frontend

Instalar dependencias:

-bash
-npm install

Ejecutar aplicación React:

-bash
-npm run dev

## 4 Acceder al sistema

Frontend:
bash
http://localhost:5173

Backend:
bash
http://127.0.0.1:8000

#  Estado del proyecto

-Proyecto funcional.

-CRUD completo de incidentes.

-Dashboard interactivo.

-Integración con PostgreSQL.

-API REST con FastAPI.

-Frontend conectado con backend.

#  Mejoras futuras

-Implementar autenticación de usuarios.
-Agregar despliegue en la nube.
-Incorporar notificaciones automáticas.
-Implementar filtros avanzados.
-Agregar exportación de reportes.

#  Conclusiones

El desarrollo de SecureWatch permitió aplicar conocimientos relacionados con frontend, backend, bases de datos y arquitecturas modernas utilizando tecnologías actuales.

Además, el proyecto permitió comprender la integración entre React, FastAPI y PostgreSQL mediante una arquitectura basada en servicios.

#  Autores

Maria Fernanda Gomez Narvaez.
Daniel Alejandro Marulanda Alvarez.
