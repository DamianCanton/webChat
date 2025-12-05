import React, { useContext, useState } from "react";
import { ContactContext } from "../../Context/ContactContext";
import styles from "./CreateNewMessage.module.css";

const CreateNewMessage = () => {
  const { createNewMessage } = useContext(ContactContext);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    createNewMessage(message);
    setMessage("");
  };

  return (
    <div className={styles.createMessageContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CreateNewMessage;
