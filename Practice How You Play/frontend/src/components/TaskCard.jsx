function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="task-card">

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <div className="task-details">
        <h3>{task.title}</h3>
        <p>Category: {task.category}</p>
        <p>Due: {task.dueDate}</p>
      </div>

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>

    </div>
  );
}

export default TaskCard;
