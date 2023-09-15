'use client';

import { useCompletion } from 'ai/react';

export default function Completion() {
    const {
        completion,
        input,
        stop,
        isLoading,
        handleInputChange,
        handleSubmit,
    } = useCompletion({
        api: '/api/openai/completion',
    });

    return (
        <div className="container">
            <output className="w-full">Completion result: { completion }</output>
            <form onSubmit={handleSubmit} className="flex flex-col fixed bottom-0">
                <label>
                    Say something...
                </label>
                <input
                    className="border border-gray-300 rounded mb-8 shadow-xl p-2"
                    value={input}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={stop}>
                    Stop
                </button>
                <button disabled={isLoading} type="submit">
                    Send
                </button>
            </form>
        </div>
    );
}