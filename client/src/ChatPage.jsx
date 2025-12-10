import React, { useState } from 'react';
import Chat from './Chat';

export default function ChatPage() {
    const [userRole, setUserRole] = useState(null); // 'Doctor' | 'Patient'

    const handleRoleSelect = (role) => {
        setUserRole(role);
    };

    return (
        <div className="min-h-screen bg-green-50 font-sans">
            {/* Header */}
            <header className="flex justify-between items-center py-6 px-10 bg-white shadow sticky top-0 z-40">
                <h1 className="text-2xl font-bold text-green-900">Telemed Connect - Chat</h1>
                <a href="/" className="text-green-700 hover:text-green-900 font-medium transition">
                    Return to Home
                </a>
            </header>

            <main className="flex items-center justify-center p-10 min-h-[calc(100vh-88px)]">
                {!userRole ? (
                    <div className="bg-white p-12 rounded-2xl shadow-xl max-w-lg w-full text-center animate-fade-in border border-green-100">
                        <h2 className="text-3xl font-bold mb-2 text-green-900">Welcome to Live Chat</h2>
                        <p className="text-gray-600 mb-10">Please select your role to proceed.</p>

                        <div className="flex flex-col gap-5">
                            <button
                                onClick={() => handleRoleSelect("Doctor")}
                                className="bg-green-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-green-700 transition shadow-md hover:shadow-lg flex items-center justify-center gap-3"
                            >
                                <span>👨‍⚕️</span> Continue as Doctor
                            </button>
                            <button
                                onClick={() => handleRoleSelect("Patient")}
                                className="bg-blue-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg flex items-center justify-center gap-3"
                            >
                                <span>👤</span> Continue as Patient
                            </button>
                        </div>

                        <div className="mt-8 text-sm text-gray-500">
                            <p>Secure & Confidential Consultations</p>
                        </div>
                    </div>
                ) : (
                    <div className="w-full max-w-4xl h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in border border-gray-200 relative">
                        <button
                            onClick={() => setUserRole(null)}
                            className="absolute top-4 left-4 z-50 text-xs bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-gray-700 transition"
                        >
                            ← Back to Roles
                        </button>
                        <Chat username={userRole} room="general" onClose={() => window.location.href = '/'} />
                    </div>
                )}
            </main>
        </div>
    );
}
