import React from 'react';
import BlogCard from './components/BlogCard';
import './App.css';

function App() {
  const cardData = {
    image: "/9pracWEB/assets/images/BlogImage.png",
    category: "HTML & CSS",
    date: "Публікація 1 Вересня 2025",
    title: "Практична №3",
    description: "Мета практичної роботи полягає в тому, щоб налаштувати середовище розробки VS Code, а також реалізувати картку блогу для вдосконалення фундаментальних навичок з HTML та CSS.",
    author: {
      avatar: "/9pracWEB/assets/images/avatar_male.png",
      name: "Огій Артем"
    }
  };

  return (
    <main className="app-container">
      <BlogCard {...cardData} />
    </main>
  );
}

export default App;
