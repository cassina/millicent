import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const openai: OpenAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export interface MyCompletionCreateParams {
    messages: {
        role: string;
        content: string;
    }[],
    model: 'gpt-3.5-turbo' | 'gpt-4';
}
export async function POST(req: Request) {
    // Extract the `prompt` from the body of the request
    const { prompt } = await req.json();

    // Ask OpenAI for a streaming completion given the prompt
    const response = await openai.chat.completions.create({
        // model: 'text-davinci-003',
        // stream: true,
        // prompt,
        // stop: '1',
        stream: true,
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant."
            },
            {
                role: 'user',
                content: prompt
            }
        ],
        model: "gpt-3.5-turbo",
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);
}