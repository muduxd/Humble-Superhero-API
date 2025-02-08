import "./App.css";
import axiosInstance from "./api/axios";
import React, { useState, useEffect } from "react"
import { Superheroes } from "./components/Superheroes/Superheroes";
import { SuperheroForm } from "./components/SuperheroForm/SuperheroForm";
import { ISuperheroModel } from "./models/Superhero.model";

export const App = () => {
  const [superheroes, setSuperheroes] = useState<ISuperheroModel[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  const fetchSuperheroes = async () => {
    try {
      const response = await axiosInstance.get("/superheroes")
      setSuperheroes(response.data as ISuperheroModel[]);
    } catch (error) {
      console.error("Error fetching superheroes:", error);
    }
  };

  const handleAddSuperhero = async (newSuperhero: ISuperheroModel) => {
    try {
      await axiosInstance.post("/superheroes", newSuperhero);
      fetchSuperheroes();
      setError("");
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "An unexpected error occurred");
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Humble Superhero API</h1>
      </header>
      <main className="app-main">
        <SuperheroForm onSubmit={handleAddSuperhero} error={error} />
        <Superheroes superheroes={superheroes} />
      </main>
    </div>
  );
}