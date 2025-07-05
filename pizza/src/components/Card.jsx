function Card() {
    return (
        <div className="flex bg-slate-950 h-screen text-slate-100 flex-row min-h-screen justify-center items-center">
            <div className="px-6 py-6 h-70 w-100 bg-slate-900 rounded-lg shadow-md shadow-indigo-400/30">
                <a href="" className="bg-linear-to-r from-pink-600 to-violet-700 bg-clip-text text-transparent font-bold text-3xl no-underline hover:underline">Hello React Blogpost</a>
                <p className="text-slate-400 text-lg italic mt-4">Author: Nadlir</p>
                <p className="text-slate-50 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellat accusamus iusto est sunt neque.</p>
                <button className="rounded-lg drop-shadow-md bg-gray-800 hover:bg-gray-700 mt-4 py-2 px-4 text-lg font-bold cursor-pointer">Read More</button>
            </div>
        </div>
    )
}

export default Card
