import { useState } from "react";
import OpenRouter from "../services/OpenRouter";

export default function Chat() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit() {
        setLoading(true);
        setAnswer("");
        setError("");

        try {
            const result = await OpenRouter(question);
            setAnswer(result);
        } catch {
            setError("Error! Try again.")
        }

        setLoading(false)
    };

    return (
        <>
            <h1>Chat with me</h1>

            <input
                type="text"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Write a question"
            />

            <button
                type="submit"
                className="btn btn-outline-dark"
                onClick={handleSubmit}>Send</button>

            {loading && <p>I'm thinking...</p>}

            {error && <p>{error}</p>}

            {answer && (
                <section>
                    <h2>Answer</h2>
                    <p>{answer}</p>
                </section>
            )}

        </>
    )
}