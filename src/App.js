import React, {useState, createRef} from "react";
import TrainingForm from "./TrainingForm";
import TrainingTable from "./TrainingTable";
import "./main.css";

function App() {
  const mileageRef = createRef();

  const [form, setForm] = useState({
    date: '',
    mileage: 0
  });
  
  const [trainings, setTrainings] = useState([]);

  const [editItem, setEditItem] = useState(null);  
  
  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setForm(prevForm => ({
      ...prevForm, [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDate = form.date;
    var dateRegexp = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
    if (!newDate.match(dateRegexp)) {
      return;
    };

    let newMileage = form.mileage;
    if (newMileage == null) {
      return;
    };
    newMileage = parseFloat(newMileage.toString().replace(",", "."));
    if (isNaN(newMileage)) {return};
    setForm(prevForm => ({
      ...prevForm, mileage: newMileage
    }));


    const i = trainings.findIndex(x => x.date === newDate);
    const newTraining = {
      date: newDate,
      mileage: newMileage
      };

    // Add training
    if (i<0) {
      setTrainings([...trainings, newTraining].sort((a, b) => Date.parse(a.date) - Date.parse(b.date)));
      setForm({
        date: '',
        mileage: 0
      });
      return;
    };

    
    let newTrainings = [...trainings];

    if (editItem == null) { // Add milage
      newTrainings[i].mileage += newTraining.mileage;
    } else { // Edit training
      newTrainings[i].mileage = newTraining.mileage;
      setEditItem(null);
      mileageRef.current.blur();
    };

  setTrainings(newTrainings);
  };

  const handleDelete = (e, i) => {
    let newTrainings = [...trainings];
    newTrainings.splice(i, 1);
    setTrainings(newTrainings);
  };

  const handleEdit = (e, i) => {
    setEditItem(i);
    setForm(() => trainings[i]);
    mileageRef.current.focus();
  };

  return (
    <div>
      <TrainingForm form={form} onFormChange={handleFormChange} onSubmit={handleSubmit} mileageRef={mileageRef} isEdit={editItem} />
      <TrainingTable trainings={trainings} onDelete={handleDelete} onEdit={handleEdit} editItem={editItem} />
    </div>
  );
};

export default App;
