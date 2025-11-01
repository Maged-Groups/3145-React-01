export function Nody() {
    return (
        <main className="bg-blue-100">
            <div className="flex flex-col md:flex-row justify-between items-center bg-blue-100 p-4 gap-4 mb-5">
                <div className=" text-black-950 p-4 flex flex-col gap-4">
                    <h2 className="font-sans font-semibold text-7xl mb-5 max-w-200">Building succsseful products</h2>
                    <input className="p-4 rounded-2xl bg-white text-black-50 max-w-100 focus:outline-none focus:ring-2 focus:ring-blue-500  shadow-sm" type="text" placeholder="enter your number " />
                    <button className="bg-blue-600 text-amber-50 p-4 w-99 rounded-2xl mx-1 hover:bg-blue-700">Call me</button>
                    <p className="w-100 p-1">We care about the protection of your data.Read our <a className="font-bold" href="#">Privacy Policy</a></p>
                </div>
                <div>
                    <img className="h-95 w-120 rounded-2xl" src="business.png" alt="loading" />
                </div>
            </div>
                <div>
                    <h1 className="font-bold text-amber-0 text-4xl text-center p-3">Our services</h1>
                </div>







           
           {/* <div className="lg:flex">
             <p className="text-lg p-8 m-1 text-gray-700 rounded text-white bg-blue-900">
                We help startups and businesses build high-quality digital products that users love.
            </p>
             <p className="text-lg p-4 m-1 text-gray-700 rounded text-white bg-blue-900">
                We help startups and businesses build high-quality digital products that users love.
            </p>
             <p className="text-lg p-4 m-1 text-gray-700 rounded text-white bg-blue-900">
                We help startups and businesses build high-quality digital products that users love.
            </p>
             <p className="text-lg p-4 m-1 text-gray-700 rounded text-white bg-blue-900">
                We help startups and businesses build high-quality digital products that users love.
            </p>
             <p className="text-lg p-4 m-1 text-gray-700 rounded text-white bg-blue-900">
                We help startups and businesses build high-quality digital products that users love.
            </p>

           </div> */}
        </main>
    )
}
