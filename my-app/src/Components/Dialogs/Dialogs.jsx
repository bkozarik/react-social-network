import React from 'react';
import './../../App.css';
import s from './Dialogs.module.css';
import Persons from './Persons/Persons';
import Messages from './Messages/Messages';


let personsData = [
    { name: "Aaron Smith", id: "1" },
    { name: "Ketty Perry Smith", id: "2" },
    { name: "Jordan Belford", id: "3" }
];

let personElements = personsData.map((p) => {
    return (
        <Persons name={p.name} id={p.id} />
    );
});

let messagesData = [
    { message: "Hello, how are you?" },
    { message: "Hello, how are you?" },
    { message: "Hello, how are you?" }
];

let messagesElements = messagesData.map((m) => {
    return (
        <Messages message={m.message} />
    );
});


const Dialogs = () => {
    return (
        <div>
            <h2>Dialogs</h2>
            <div className={s.dialogs}>
                <div className={s.persons}>

                    {personElements}

                </div>
                <div className={s.chat}>
                    <div className={s.chat_wrapper}>

                        {messagesElements}

                    </div>

                    <div className={s.add_message}>
                        <input type="text" placeholder="Your message:" />
                        <button>Send</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;
