export default async function OpenRouter(question) {
    const response = await fetch(
        'https://openrouter.ai/api/v1/chat/completions',

        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`
            },
            body: JSON.stringify(
                {
                    model: 'nvidia/nemotron-3-ultra-550b-a55b:free',
                    messages: [
                        {
                            role: 'user',
                            content: question
                        }

                    ]
                })
        }
    );

    if (!response.ok) {
        throw new Error('There\'s an API error in your request')
    };

    const data = await response.json();

    return data.choices[0].message.content
}