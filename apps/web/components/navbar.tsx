


export default function Navbar(){

    return <div className="bg-blue-300 h-16 flex items-center justify-between">

{/* first */}
        <div className="pl-2 flex">
            <div className="text-2xl font-bold pr-4">
                Recruite Me
            </div>
            <div className="bg-green-100 rounded-lg w-40 h-10 flex items-center justify-center cursor-pointer ">
                search here
            </div>
        </div>
{/* second */}
        <div className="flex gap-6 text-xl pl-2 ">
            <div className="cursor-pointer">internships</div>
            <div className="cursor-pointer">jobs</div>
            <div className="cursor-pointer">mentorship</div>
            <div className="cursor-pointer">competetion</div>
        </div>

{/* third */}
        <div className="flex gap-2 text-lg pr-2">
            <div className="bg-green-200 px-3 py-2 rounded-lg">signup</div>
            <div className="bg-green-200 px-3 py-2 rounded-lg">login</div>
        </div>
    </div>
}