// src/BookList.jsx
import React from 'react';

const BookList = () => {
  // ダミーデータの作成（例として3件の書籍情報）
  const dummyBooks = [
    { id: 1, title: "React入門", author: "山田太郎", description: "Reactの基本を学ぶための入門書です。" },
    { id: 2, title: "JavaScriptマスター", author: "佐藤花子", description: "JavaScriptの全体像を理解するための書籍です。" },
    { id: 3, title: "モダンWeb開発", author: "鈴木一郎", description: "最新のWeb技術や開発手法を解説しています。" }
  ];

  return (
    <div>
      <h1>書籍一覧</h1>
      <ul>
        {dummyBooks.map((book) => (
          <li key={book.id} style={{ marginBottom: '20px' }}>
            <h2>{book.title}</h2>
            <p><strong>著者:</strong> {book.author}</p>
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
