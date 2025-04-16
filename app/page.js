'use client';

export default function Home() {
  return (
    <div>
      <header className="header">
        <h1 className="text">ヘッダーです</h1>
        <button className="button1" onClick={() => alert('クリックされました！')}>左ボタン</button>
      </header>
    </div>
  );
}