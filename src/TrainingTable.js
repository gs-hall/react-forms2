import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

export default function TrainingTable({trainings, onDelete, onEdit, editDate}) {
  const trainingElements = [...trainings].map((training, i) =>
  <tr key={i} className={training.date === editDate ? 'is-being-edited' : null}>
    <td>{training.date}</td>
    <td>{training.mileage}</td>
    <td>
      {editDate ? null :
        <>
          <FontAwesomeIcon icon={faPenToSquare} onClick={(e, date) => onEdit(e, training.date)} />&nbsp;
          <FontAwesomeIcon icon={faTrash} onClick={(e, date) => onDelete(e, training.date)} />
        </>
      }
    </td>
  </tr>
  );
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Дата (ДД.ММ.ГГ)</th>
            <th>Пройдено (км)</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {trainingElements}
        </tbody>
      </table> 
    </div>
  )
};