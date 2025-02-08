import "./SuperheroForm.css";
import React, { useState } from "react";
import { ISuperheroModel, Superpower } from "../../models/Superhero.model";
import { convertSuperpowerToString } from "../../utils/utils";

interface SuperheroFormProps {
  onSubmit: (superhero: ISuperheroModel) => void;
  error?: string;
}


export function SuperheroForm({ onSubmit, error }: SuperheroFormProps) {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState<Superpower>(Superpower.DEBUG_WHISPERER);
  const [humilityScore, setHumilityScore] = useState<number>(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, superpower, humilityScore });
    setName("");
    setSuperpower(Superpower.DEBUG_WHISPERER);
    setHumilityScore(5);
  };


  return (
    <form className="superhero-form" onSubmit={handleSubmit}>

      <h2>Add New Superhero</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={20}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="superpower">Superpower:</label>
        <select
          id="superpower"
          value={superpower}
          onChange={(e) => setSuperpower(Number(e.target.value) as Superpower)}
        >
          {Object.values(Superpower)
            .filter(value => !isNaN(Number(value)))
            .map((power) => (
              <option key={power} value={power}>
                {convertSuperpowerToString(Number(power))}
              </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="humilityScore">Humility Score (1-10):</label>
        <input
          id="humilityScore"
          type="number"
          min="1"
          max="10"
          value={humilityScore}
          onChange={(e) => setHumilityScore(Number(e.target.value))}
          required
        />
      </div>

      <button type="submit">Add Superhero</button>
    </form>
  );
} 