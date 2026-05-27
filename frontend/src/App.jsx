import { useEffect, useState } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

function App() {
  const [incidents, setIncidents] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Alta");

  const API = "http://127.0.0.1:8000";

  // Obtener incidentes
  const fetchIncidents = async () => {
    try {
      const response = await axios.get(`${API}/incidents`);
      setIncidents(response.data);
    } catch (error) {
      console.error("ERROR GET:", error);
    }
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  // Crear incidente
  const createIncident = async () => {
    try {
      await axios.post(`${API}/incidents`, {
        title,
        description,
        severity,
        status: "Abierto",
      });

      setTitle("");
      setDescription("");
      setSeverity("Alta");

      fetchIncidents();
    } catch (error) {
      console.error("ERROR POST:", error);
    }
  };

  // Eliminar incidente
  const deleteIncident = async (id) => {
    try {
      await axios.delete(`${API}/incidents/${id}`);
      fetchIncidents();
    } catch (error) {
      console.error("ERROR DELETE:", error);
    }
  };

  // Colores severidad
  const getSeverityColor = (severity) => {
    if (severity === "Alta") return "#dc2626";
    if (severity === "Media") return "#f59e0b";
    return "#16a34a";
  };

  // Dashboard
  const altas = incidents.filter(
    (i) => i.severity === "Alta"
  ).length;

  const medias = incidents.filter(
    (i) => i.severity === "Media"
  ).length;

  const bajas = incidents.filter(
    (i) => i.severity === "Baja"
  ).length;

  // Datos gráfico
  const data = [
    {
      name: "Alta",
      value: altas,
      color: "#dc2626",
    },
    {
      name: "Media",
      value: medias,
      color: "#f59e0b",
    },
    {
      name: "Baja",
      value: bajas,
      color: "#16a34a",
    },
  ];

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        backgroundColor: "#f4f7fb",
        minHeight: "100vh",
      }}
    >
      {/* TITULO */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            color: "#1e3a8a",
            fontSize: "40px",
          }}
        >
          🛡️ SecureWatch Dashboard
        </h1>
      </div>

      {/* FORMULARIO */}
      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          maxWidth: "500px",
        }}
      >
        <h2 style={{ color: "#1e293b" }}>
          Crear Incidente
        </h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            display: "block",
            marginBottom: "15px",
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            display: "block",
            marginBottom: "15px",
            width: "100%",
            height: "100px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          style={{
            marginBottom: "15px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        >
          <option>Alta</option>
          <option>Media</option>
          <option>Baja</option>
        </select>

        <button
          onClick={createIncident}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Crear Incidente
        </button>
      </div>

      {/* DASHBOARD */}
      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#1e293b" }}>
          Dashboard de Severidad
        </h2>

        <BarChart
          width={600}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
              />
            ))}
          </Bar>
        </BarChart>
      </div>

      {/* INCIDENTES */}
      <h2
        style={{
          color: "#1e293b",
          marginBottom: "20px",
        }}
      >
        Lista de Incidentes
      </h2>

      {incidents.map((incident) => (
        <div
          key={incident.id}
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{incident.title}</h3>

          <p>{incident.description}</p>

          <p
            style={{
              color: getSeverityColor(
                incident.severity
              ),
              fontWeight: "bold",
            }}
          >
            Severidad: {incident.severity}
          </p>

          <p>
            Estado: {incident.status}
          </p>

          {incident.created_at && (
            <p>
              Fecha:{" "}
              {new Date(
                incident.created_at
              ).toLocaleString()}
            </p>
          )}

          <button
            onClick={() =>
              deleteIncident(incident.id)
            }
            style={{
              backgroundColor: "#dc2626",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;