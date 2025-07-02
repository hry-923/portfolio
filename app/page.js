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

      <main className="p-4">
        <h3>안냥</h3>
        <h3>내 이름은 리쿠야</h3>
        <h3>여름에 한국으로 유학 가</h3>
        <h3>열심히 할게</h3>

        <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src="/images/fox.jpg"
            alt="狐"
            className="w-full h-full object-cover"
          />
        </div>
      </main>
    </div>
  );
}