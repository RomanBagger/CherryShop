export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          🧪 Тест CSS
        </h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <h2 className="text-2xl text-white mb-4">Если вы видите эту страницу с красивым дизайном, то CSS работает!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl text-white text-center">
              <p>Градиент 1</p>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-xl text-white text-center">
              <p>Градиент 2</p>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-xl text-white text-center">
              <p>Градиент 3</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
              Кнопка с анимацией
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
