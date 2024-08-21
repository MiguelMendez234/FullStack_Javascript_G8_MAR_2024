import { useState } from 'react'

function App() {
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')

  const configPrompt = "Eres un vendedor de carros, quiero que me recomiendes el mejor carro de acuerdo a las caracteristicas que te voy a enviar y que la respuesta sea en JSON: "
  const baseUrl = import.meta.env.VITE_BACKEND_URL
  console.log(baseUrl)
  const sendQuestion = async (e) => {
    e.preventDefault()
    const response = await fetch(`${baseUrl}/generate-text`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ prompt: `${configPrompt} ${question}` })
    })
    setResponse(await response.json())
  }

  return (
    <>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Hola, soy una inteligencia artificial y quiero ayudarte a elegir un carro. Por favor, descríbeme tus necesidades.
        </h1>
        <form onSubmit={sendQuestion} className="bg-white p-6 rounded-lg shadow-md">
          <label htmlFor="question" className="block text-lg font-medium mb-2">
            Pregunta:
          </label>
          <textarea
            onChange={(e) => setQuestion(e.target.value)}
            id="question"
            name="question"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            placeholder="Escribe tu pregunta aquí..."
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </form>
        <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Pregunta:</h2>
          <p className="mb-4">{response.prompt}</p>
          <h2 className="text-xl font-semibold">Respuesta:</h2>
          <p>{response.response}</p>
        </div>
      </div>
    </>
  )

}

export default App
