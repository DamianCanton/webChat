# WebChat

> **Estilo Retro | Arquitectura Limpia | Sin Backend**

WebChat es una aplicación de mensajería moderna construida con **React** y **Vite**, diseñada con una estética **Retro** audaz (bordes gruesos, sombras duras, alto contraste). Simula una experiencia de chat completa utilizando **Context API** para el manejo del estado global, sin necesidad de un backend real.

> 🎓 **Primer proyecto desarrollado como Trabajo Final Integrador para la Diplomatura Full Stack de la UTN BA (Centro de e-Learning).**

---

## Funcionalidades

- **Diseño Retro**: Una interfaz visualmente impactante con bordes negros marcados y sombras sólidas.
- **Respuestas Automáticas**: Simulación de chat con un bot que responde automáticamente.
- **Búsqueda de Contactos**: Filtra tus conversaciones rápidamente desde la barra de búsqueda.
- **Responsive**: Adaptable a dispositivos móviles y de escritorio.
- **Persistencia Simulada**: Gestión de estado local para contactos y mensajes.

---

## Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clonar el repositorio**:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd webChat
    ```

2.  **Instalar dependencias**:

    ```bash
    npm install
    ```

3.  **Correr el servidor de desarrollo**:
    ```bash
    npm run dev
    ```

---

## Estructura del Proyecto

Una vista simplificada de la organización del código:

```
src/
├── Components/       # Componentes reutilizables de la UI
│   ├── AddContact/
│   ├── ChatDetail/
│   ├── ChatItem/
│   ├── ChatList/
│   ├── CreateNewMessages/
│   ├── MessagesList/
│   └── SearchBar/
├── Context/          # Manejo del estado global
│   └── ContactContext.jsx
├── Screens/          # Vistas principales de la aplicación
│   └── ChatPage/
├── App.jsx           # Componente raíz y configuración de rutas
└── main.jsx          # Punto de entrada
```

---

## Tecnologías

- **React** (v19)
- **Vite**
- **CSS Modules**
- **React Router**

---
