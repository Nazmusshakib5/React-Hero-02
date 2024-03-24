import { useState } from "react";


const Bookmarks = ({bookmarks,timee}) => {
    

    return (
        <div className="md:w-1/3 flex flex-col">
            <div className="bg-[#6047EC]/10 rounded-lg mb-6">
            <h1 className="text-2xl text-center p-5 text-purple-700 font-bold">Spend time on read:{timee}</h1>
            </div>
            <div className="p-7 bg-slate-500/10 rounded-lg">
                <div><p className="font-bold text-xl">Bookmarked Blogs:{bookmarks.length}</p></div>
                {
                    bookmarks.map(item => <div className="text-lg font-bold bg-white mt-4 px-5 py-5
                    rounded-lg" key={item.id}>{item.title}</div>)
                }

            </div>
        </div>
    );
};

export default Bookmarks;