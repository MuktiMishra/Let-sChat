import React from 'react'
import { User } from '../context/AppContext';
import { X, MessageCircle, Plus, Search, UserCircle } from 'lucide-react';
import { useState } from 'react';

interface ChatSidebarProps{
    sidebarOpen: boolean;
    setSidebarOpen : (open: boolean)=> void;
    showAllUsers: boolean;
    setShowAllUsers: (show: boolean | ((prev: boolean)=>boolean))=>void;
    users: User[] | null;
    loggedInUser: User | null;
    chats: any[] | null;
    selectedUser : string | null;
    setSelectedUser:(userId: string | null)=>void;
    handleLogout: ()=> void;
}
const ChatSidebar = ({sidebarOpen, setShowAllUsers , setSidebarOpen, showAllUsers, users, loggedInUser, chats, selectedUser, setSelectedUser, handleLogout}: ChatSidebarProps) => {
    const [searchQuery, setSearchQuery] = useState("");
    return(
        <aside className={`fixed z-20 sm:static top-0 left-0 h-screen w-80 bg-gray-900
        border-r border-gray-700 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        sm:translate-x-0 transition-transform duration-300 flex-col`}
        >
            <div className='p-6 border-b border-gray-700'>
                <div className='sm:hidden flex justify-end'>
                <button 
                onClick={()=> setSidebarOpen(false)}
                className='p-2 hover:bg-gray-700 rounded-lg transition-colors'>
                    <X className="w-5 h-5 text-gray-300" />
                </button>

            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='p-2 bg-blue-600 justify-between'>
                        <MessageCircle className='w-5 h-5 text-white' />
                    </div>
                    <h2 className='text-xl font-bold text-white'>{showAllUsers? "New Chat": "Messages"}</h2>
                </div>
                <button className={`p-2.5 rounded-lg transition-colors ${ showAllUsers ? "bg-red-600 hover:bg-red-700 text-white" : "bg-green-600 hover:bg-green-700"}`}
                onClick={()=> setShowAllUsers((prev)=>!prev)}>
                    {
                    showAllUsers ? (<X className='w-4 h-4' />) : (<Plus  className='w-4 h-4'/>)
                    }

                </button>
            </div>
            </div>

            {/* content */}
            <div className='flex-1 overflow-hidden px-4 py-2'>
                {
                    showAllUsers? (<div className='space-y-4 h-full'>
                        <div className='relative '>
                            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 ' />
                            <input type='text' 
                            placeholder='Search Users...'
                            className='w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400' 
                            value={searchQuery}
                            onCanPlay={(e)=> setSearchQuery(e.target.value)}/>
                        </div>

                        {/* users list */}
                        <div className='space-y-2 overflow-y-auto h-full pb-4'>
                            {
                                users?.filter((u)=>u._id!==loggedInUser?._id && u.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())).map((u)=>(
                                    <button key={u._id} 
                                    className='w-full text-left p-4 rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-colors'
                                    >
                                      <div className='flex items-center gap-3'>
                                        <div className='relative'>
                                            <UserCircle className='w-6 h-6 text-gray-300'/>
                                        </div>

                                        {/* online symbol dikhana hai idar */}  
                                        <div className='flex-1 min-w-0'>
                                        <span className='font-medium text-white'>
                                            {u.name}
                                        </span>
                                        <div className='text-xs text-gray-400 mt-0.5'>
                                            {/* idar hame online offline text dikana hai  */}
                                        </div>
                                      </div>
                                      </div>  
                                      
                                    </button>
                                ))
                            }
                        </div>
                    </div> ): (
                        chats && chats.length>0 ? (<div className=''></div>) : (<div></div>)
                    )
                }
            </div>
        </aside>
    )
  
}

export default ChatSidebar
