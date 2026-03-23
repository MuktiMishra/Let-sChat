"use client";
import React, { useEffect, useState } from 'react'
import { useAppData } from '../context/AppContext';
import { useRouter } from 'next/navigation';
import Loading from '../components/LoadingComponent';
import ChatSidebar from '../components/ChatSidebar';

export interface Message{
  _id: string;
  chatId: string;
  sender: string;
  text?: string;
  image?:{
    url: string;
    publicId:string;
  };
  messageType: "text" | "image";
  seen: boolean;
  seenAt?: string;
  createdAt: string;
}


const ChatApp = () => {
  const {loading, isAuth, logoutUser, chats , user: loggedInUser , users, fetchChats, setChats} = useAppData();

  const [selectedUser , setSelectedUser] = useState<string | null>(null);
  const [message , setMessage]= useState("");
  const [sidebarOpen , setSideOpen]= useState(false);
  const [messages , setMessages]= useState<Message[] | null>(null);
  const [user, setUser] = useState<User | null>(null); // yeh yh user slescted hai uska nam upar aaega (jiski chats display hongi)
  const [showAllUser, setShowAllUser] = useState(false);
  const [isTyping , setIsTyping] = useState(false);
  const [typingTimeout , setTypingTimeout] = useState<NodeJS.Timeout | null> (null);
  const router = useRouter();
  useEffect(()=>{
    if(!isAuth && !loading){
      router.push("/login");
    }
  },[isAuth , router, loading]);

  if(loading) return <Loading />
  return (
    <div>
      <div className='min-h-screen flexx bg-gray-900 text-white relative overflow-hidden'>
        <ChatSidebar />
      </div>
    </div>
  )
}

export default ChatApp;
