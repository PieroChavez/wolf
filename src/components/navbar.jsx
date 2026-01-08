export default function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
                <span className="text-xl font-bold text-indigo-600">
                    Wolf Edu
                </span>

                <div className="space-x-4">
                    <a href="#" className="hover:text-indigo-600">Inicio</a>
                    <a href="#" className="hover:text-indigo-600">Login</a>
                </div>
            </div>
        </nav>
    )
}
