"use client";
import React from 'react'

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen w-screen gap-4">
            <div className="w-40 h-40 rounded-full border-4 border-muted flex items-center justify-center bg-gray-300 animate-bounce">
                <span className="text-muted-foreground text-3xl font-medium">aesmos</span>
            </div>
        </div>
    )
}

export default Loading;