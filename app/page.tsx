export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className="text-6xl mb-8">🌍</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          VFS Appointment Portal
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8">
          Professional visa appointment booking services for all European countries and major global destinations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-200">35+</div>
            <div className="text-blue-100">Countries Covered</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-200">50+</div>
            <div className="text-blue-100">Cities Served</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-200">10,000+</div>
            <div className="text-blue-100">Successful Bookings</div>
          </div>
        </div>
      </div>
    </div>
  )
}
