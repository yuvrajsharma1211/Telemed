import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export default function Chat({ username = "User", room = "general", onClose }) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        socket.emit("join_room", room);
    }, [room]);

    useEffect(() => {
        const receiveMessage = (data) => {
            setMessageList((list) => [...list, data]);
        };

        socket.on("receive_message", receiveMessage);

        return () => {
            socket.off("receive_message", receiveMessage);
        };
    }, []);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    return (
        <div className="w-full h-full flex flex-col font-sans">
            {/* Header */}
            <div className="bg-green-600 p-4 text-white flex justify-between items-center">
                <p className="font-bold">Live Chat</p>
                <button onClick={onClose} className="text-sm font-semibold hover:text-gray-200">
                    Exit Chat
                </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-2">
                {messageList.map((msg, index) => {
                    const isMe = msg.author === username;
                    return (
                        <div
                            key={index}
                            className={`flex flex-col ${isMe ? "items-end" : "items-start"
                                }`}
                        >
                            <div
                                className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${isMe
                                    ? "bg-green-600 text-white"
                                    : "bg-gray-200 text-gray-800"
                                    }`}
                            >
                                <p>{msg.message}</p>
                            </div>
                            <div className="text-xs text-gray-400 mt-1 flex gap-1">
                                <span>{msg.time}</span>
                                <span className="font-bold">{msg.author}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Chat Footer */}
            <div className="p-3 bg-white border-t border-gray-200 flex gap-2">
                <input
                    type="text"
                    value={currentMessage}
                    placeholder="Type a message..."
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500"
                    onChange={(event) => {
                        setCurrentMessage(event.target.value);
                    }}
                    onKeyPress={(event) => {
                        event.key === "Enter" && sendMessage();
                    }}
                />
                <button
                    onClick={sendMessage}
                    className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700 transition"
                >
                    &#9658;
                </button>
            </div>
        </div>
    );
}
