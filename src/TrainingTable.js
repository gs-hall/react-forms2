import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

export default function TrainingTable({trainings, onDelete, onEdit, editItem}) {
  const trainingElements = [...trainings].map((training, index) =>
  <tr key={index} className={index === editItem ? 'is-being-edited' : null}>
    <td>{training.date}</td>
    <td>{training.mileage}</td>
    <td>
      {editItem != null ? null:
        <>
          <FontAwesomeIcon icon={faPenToSquare} onClick={(e, i) => onEdit(e, index)} />&nbsp;
          <FontAwesomeIcon icon={faTrash} onClick={(e, i) => onDelete(e, index)} />
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