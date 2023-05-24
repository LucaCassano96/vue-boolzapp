
const { createApp } = Vue;

createApp({

    data(){
        return{
            activelement: 0,
            newMessage : "",
            contacts: [
                        {
                            name: 'Michele',
                            avatar: 'https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg',
                            visible: true,
                            messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Hai portato a spasso il cane?',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Ricordati di stendere i panni',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 16:15:22',
                                    message: 'Tutto fatto!',
                                    status: 'received'
                                }
                            ],
                        },
                        {
                            name: 'Fabio',
                            avatar: 'https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg',
                            visible: true,
                            messages: [
                                {
                                    date: '20/03/2020 16:30:00',
                                    message: 'Ciao come stai?',
                                    status: 'sent'
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: 'Bene grazie! Stasera ci vediamo?',
                                    status: 'received'
                                },
                                {
                                    date: '20/03/2020 16:35:00',
                                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                    status: 'sent'
                                }
                            ],
                        },
                        {
                            name: 'Samuele',
                            avatar: 'https://media.gettyimages.com/id/1227618801/vector/human-face-avatar-icon-profile-for-social-network-man-vector-illustration.jpg?s=170667a&w=gi&k=20&c=qmrI_y9erJU26E0pkvYRbJi2IB8JGj8MGvtyNol240o=',
                            visible: true,
                            messages: [
                                {
                                    date: '28/03/2020 10:10:40',
                                    message: 'La Marianna va in campagna',
                                    status: 'received'
                                },
                                {
                                    date: '28/03/2020 10:20:10',
                                    message: 'Sicuro di non aver sbagliato chat?',
                                    status: 'sent'
                                },
                                {
                                    date: '28/03/2020 16:15:22',
                                    message: 'Ah scusa!',
                                    status: 'received'
                                }
                            ],
                        },
                        {
                            name: 'Alessandro B.',
                            avatar: 'https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg',
                            visible: true,
                            messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Si, ma preferirei andare al cinema',
                                    status: 'received'
                                }
                            ],
                        },
                        {
                            name: 'Alessandro L.',
                            avatar: 'https://st2.depositphotos.com/1734074/11386/v/950/depositphotos_113862774-stock-illustration-vector-businessman-profile-icon-man.jpg',
                            visible: true,
                            messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Ricordati di chiamare la nonna',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Va bene, stasera la sento',
                                    status: 'received'
                                }
                            ],
                        },
                        {
                            name: 'Claudia',
                            avatar: 'https://media.istockphoto.com/id/1178325078/vector/asian-woman-profile-avatar-vector-icon.jpg?s=612x612&w=0&k=20&c=AIi17LVgA30qkb7CSfFj1vvDFxyWFM53wvfN-TP9yYE=',
                            visible: true,
                            messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Ciao Claudia, hai novità?',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Non ancora',
                                    status: 'received'
                                },
                                {
                                    date: '10/01/2020 15:51:00',
                                    message: 'Nessuna nuova, buona nuova',
                                    status: 'sent'
                                }
                            ],
                        },
                        {
                            name: 'Federico',
                            avatar: 'https://as1.ftcdn.net/v2/jpg/02/42/45/90/1000_F_242459076_53ffNaKxcGS1ioScWiSt50e9ltwvynqt.jpg',
                            visible: true,
                            messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                    status: 'received'
                                }
                            ],
                        },
                        {
                            name: 'Davide',
                            avatar: 'https://thumbs.dreamstime.com/b/elegant-man-business-suit-badge-man-business-avatar-profile-picture-vector-illustration-isolated-elegant-man-business-107918671.jpg',
                            visible: true,
                            messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                    status: 'received'
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'No, l ho già mangiata ieri, ordiniamo sushi!',
                                    status: 'sent'
                                },
                                {
                                    date: '10/01/2020 15:51:00',
                                    message: 'OK!!',
                                    status: 'received'
                                }
                            ],
                        }
            ]
            
    

        }
    },
    methods: {

         changeChat(idx){
            this.activelement = idx;
        },

        sendMessage(){
            if (this.newMessage == "") return
            let answer = {
                message: this.newMessage,
                status: 'sent'
            }
           
            this.contacts[this.activelement].messages.push(answer);
            this.newMessage = "";

            const botAnswer = {
                message: "ciao",
                status: "recived"
            }
            this.contacts[this.activelement].messages.push(botAnswer);
            
        }
    }

    
    
    
}).mount("#app")
