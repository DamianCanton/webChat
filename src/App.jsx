import { useState } from 'react'
import './App.css'
import ChatPage from './Screens/ChatPage/ChatPage'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/:contact_id" element={<ChatPage />} />
      </Routes>
    </div>
      
    
  )
}

export default App
