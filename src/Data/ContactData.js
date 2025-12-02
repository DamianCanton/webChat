
const mockChats = [
        {
            name: 'Juan Perez',
            id: '1',
            Last_Conecction: 'Hoy 11:50',
            Status: 'En línea',
            Avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
            is_connected: true,
            LastMessage: [
                {
                    id: "1",
                    message: "Holaa como estas?",
                    author_id: "1",
                    created_at: "Hoy",
                    status: "Enviado"
                }
            ]
        },
        {
            name: 'Maria Garcia',
            id: '2',
            Last_Conecction: 'Hoy 19:30',
            Status: 'Desconectado',
            Avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
            is_connected: false,
            LastMessage: [
                {
                    id: "2",
                    message: "Nos vemos mañana.",
                    author_id: "2",
                    created_at: "Hoy",
                    status: "Recibido"
                }
            ]
        },
        {
            name: 'Carlos Rodriguez',
            id: '3',
            Last_Conecction: 'Ayer 15:20',
            Status: 'En línea',
            Avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
            is_connected: true,
            LastMessage: [
                {
                    id: "3",
                    message: "Perfecto, gracias!",
                    author_id: "3",
                    created_at: "Ayer",
                    status: "Leído"
                }
            ]
        },
        {
            name: 'Ana Lopez',
            id: '4',
            Last_Conecction: 'Hoy 12:45',
            Status: 'En línea',
            Avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
            is_connected: true,
            LastMessage: [
                {
                    id: "4",
                    message: "¿Recibiste el archivo?",
                    author_id: "4",
                    created_at: "Hoy",
                    status: "Enviado"
                }
            ]
        },
        {
            name: 'Laura Martinez',
            id: '5',
            Last_Conecction: 'Hoy 09:15',
            Status: 'Ausente',
            Avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
            is_connected: false,
            LastMessage: [
                {
                    id: "5",
                    message: "Te llamo más tarde.",
                    author_id: "5",
                    created_at: "Hoy",
                    status: "No leído"
                }
            ]
        },
        {
            name: 'Pedro Sanchez',
            id: '6',
            Last_Conecction: 'Ayer 20:00',
            Status: 'Desconectado',
            Avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
            is_connected: false,
            LastMessage: [
                {
                    id: "6",
                    message: "Confirmado para el viernes.",
                    author_id: "6",
                    created_at: "Ayer",
                    status: "Leído"
                }
            ]
        }
    ]

    export default mockChats
