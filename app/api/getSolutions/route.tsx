import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Hypothetical function to call LLM API
export async function GET() {
  // Your logic here
  return NextResponse.json({ message: 'Hello' });
}

// Hypothetical function to call LLM API
async function callLLMAPI(prompt: string) {
  try {
    console.log('Calling OpenAI API with prompt:', prompt);
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {role: "system", content: "You are a helpful assistant that provides medical advice."},
        {role: "user", content: `Given these symptoms: ${prompt}, provide 3 potential solutions in the following format:
        Solution 1: [Title]
        [Description]
        
        Solution 2: [Title]
        [Description]
        
        Solution 3: [Title]
        [Description]`}
      ]
    });

    console.log('OpenAI API response:', completion);

    if (!completion.choices || completion.choices.length === 0) {
      console.error('Unexpected API response:', completion);
      throw new Error('No choices returned from the API');
    }

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error calling LLM API:', error);
    throw error;
  }
}

// Define an interface for the response item
interface Solution {
  title: string;
  description: string;
}

export async function POST(request: Request) {
  try {
    const { symptoms } = await request.json();
    console.log('Received symptoms:', symptoms);

    const response = await callLLMAPI(symptoms);
    console.log('LLM API response:', response);

    const solutions = parseResponse(response ?? '');
    console.log('Parsed solutions:', solutions);

    return NextResponse.json({ solutions });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 });
  }
}

function parseResponse(response: string): Solution[] {
  const solutions: Solution[] = [];
  const solutionRegex = /Solution \d+: (.+)\n([\s\S]+?)(?=\n\nSolution \d+:|$)/g;
  let match;

  while ((match = solutionRegex.exec(response)) !== null) {
    const title = match[1].trim();
    const description = match[2].trim();
    solutions.push({ title, description });
  }

  return solutions;
}
