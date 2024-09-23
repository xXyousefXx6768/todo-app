import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage.css';
import TopSection from '../components/TopSection';
import WelcomeUser from '../components/WelcomeUser';
import AddTask from '../components/AddTask';
import TodoCard from '../components/TodoCard';

function Homepage() {
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const addTask = (task) => {
    setTasks([...tasks, task]); // Add the new task to the tasks array
  };

  return (
    <main className="d-flex flex-column" style={{backgroundColor:'black'}}>
      <TopSection />
      <WelcomeUser />
      {/* Pass the addTask function and tasks array as props */}
      <AddTask addTask={addTask} />
      <TodoCard tasks={tasks} />
    </main>
  );
}

export default Homepage;
