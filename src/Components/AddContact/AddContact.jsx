import React from 'react'
import styles from './AddContact.module.css'
import { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'

export const AddContact = () => {
    const { addNewContact } = useContext(ContactContext)
    const handleSubmitNewContactForm = (event) => {
        event.preventDefault();
        const formulario = event.target
        const name_value = formulario.name.value
        addNewContact(name_value)
    }
    return (
        <form onSubmit={handleSubmitNewContactForm} className={styles.form}>
            <div className={styles.formContent}>
                <label htmlFor="name">Nombre:</label>
                <input type="text" placeholder="-Ingresar nombre- "  name="name" id='name'/>
                <button type="submit" className={styles.button}>Agregar</button>
            </div>
            
        </form>
    ) 
}
