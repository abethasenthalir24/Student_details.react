import { useState } from "react";
import "./Regform.css";

export default function Regform() {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [regno, setRegno] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      name,
      course,
      regno,
      duration
    };

    console.log(student);

    // Clear form after submit
    setName("");
    setCourse("");
    setRegno("");
    setDuration("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Student Registration</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <input
        type="text"
        placeholder="Register Number"
        value={regno}
        onChange={(e) => setRegno(e.target.value)}
      />

      <input
        type="text"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

     <button type="submit">Submit</button>


    </form>
  );
}
