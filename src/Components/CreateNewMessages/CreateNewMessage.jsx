import React from 'react'

const CreateNewMessage = ({createNewMessage}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const formulario = event.target
        const message_value = formulario.message.value
        createNewMessage(message_value)
        formulario.reset()
    }

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="message">Mensaje</label>
        <textarea name="message" id="message" placeholder='Ingrese el mensaje'></textarea>
        <button type="submit">Enviar</button>
    </form>
    )
}

export default CreateNewMessage