import React from "react";

export default function TrainingForm ({form, onFormChange, onSubmit}) {
  return (
    <form onSubmit={onSubmit}>
      <section>
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input
          id="date"
          name="date"
          type="text"
          value={form.date}
          placeholder="ДД.ММ.ГГ"
          onChange={onFormChange}
          autoFocus
          />
      </section>

      <section>
        <label htmlFor="mileage">Пройдено (км)</label>
        <input
          id="mileage"
          name="mileage"
          type="text"          
          value={form.mileage}
          placeholder="Пройдено (км)"
          onChange={onFormChange}
          />
      </section>

      <section>
        <input
          id="button"
          type="submit"
          value="OK"
          />
      </section>
    </form> 
  );
};