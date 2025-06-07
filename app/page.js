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
      <body>
      <h3>안냥</h3>
      <h3>내 이름은 리쿠야</h3>
      <h3>여름에 한국으로 유학 가</h3>
      <h3>열심히 할게</h3>
      <img src="/images/fox.jpg" alt="狐" width="300" />
      </body>
    </div>
  );
}