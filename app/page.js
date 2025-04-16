'use client';

export default function Home() {
  return (
    <div>
      <header className="header">
        <h1 className="text">ヘッダーです</h1>
        <button className="button1" onClick={() => alert('クリックされました！')}>左ボタン</button>
        <button className="button2" onClick={() => alert('クリックされました！')}>中央ボタン</button>
        <button className="button3" onClick={() => alert('クリックされました！')}>右ボタン</button>
      </header>
    </div>
  );
}