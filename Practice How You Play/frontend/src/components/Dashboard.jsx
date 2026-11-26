import { useState } from "react";
import TaskCard from "./TaskCard";
import EventCard from "./EventCard";

function Dashboard() {

  // Store our tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Data Structures Assignment",
      category: "School",
      dueDate: "November 27",
      completed: false
    },
    {
      id: 2,
      title: "Study for Biology Exam",
      category: "School",
      dueDate: "November 28",
      completed: false
    }
  ]);

  // Store the new task information
  const [newTask, setNewTask] = useState("");
  const [newCategory, setNewCategory] = useState("School");
  const [newDueDate, setNewDueDate] = useState("");

  // Add a new task
  function addTask(event) {
    event.preventDefault();

    if (newTask.trim() === "") {
      return;
    }

    const task = {
      id: Date.now(),
      title: newTask,
      category: newCategory,
      dueDate: newDueDate || "No due date",
      completed: false
    };

    setTasks([...tasks, task]);

    setNewTask("");
    setNewCategory("School");
    setNewDueDate("");
  }

  // Mark a task complete or incomplete
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Delete a task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="dashboard">

      <section className="dashboard-section">
        <h2>My Tasks</h2>

        <form onSubmit={addTask} className="task-form">
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />

          <select
            value={newCategory}
            onChange={(event) => setNewCategory(event.target.value)}
          >
            <option value="School">School</option>
            <option value="Athletics">Athletics</option>
            <option value="Personal">Personal</option>
          </select>

          <input
            type="date"
            value={newDueDate}
            onChange={(event) => setNewDueDate(event.target.value)}
          />

          <button type="submit">Add Task</button>
        </form>

        <p>{tasks.filter((task) => task.completed).length} of {tasks.length} tasks completed</p>

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </section>

      <section className="dashboard-section">
        <h2>Upcoming Athletic Events</h2>

        <EventCard
          title="Track Practice"
          date="November 26"
          time="3:30 PM"
          type="Practice"
        />

        <EventCard
          title="Indoor Track Meet"
          date="November 29"
          time="9:00 AM"
          type="Competition"
        />
      </section>

    </div>
  );
}

export default Dashboard;
