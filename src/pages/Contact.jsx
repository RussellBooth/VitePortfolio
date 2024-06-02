import { useState } from 'react';
import '../styles/pages.css';

export default function Contact () {
    const [email, giveEmail] = useState('');
    const [message, giveMessage] = useState('');
    const [name, giveName] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();
        giveEmail('');
        giveMessage('');
        giveName('');
    };
    return (
        <div>
            <h1>Feel free to contact me</h1>
            <form onSubmit={handleSubmitForm}>
                <label>
                    Name: 
                    <input type="text" name="name" value={name}
                    onChange={(e) => giveName(e.target.value)}
                    placeholder='John Doe'required/>
                </label>
                <label>
                    Email: 
                    <input type="email" name="email" value={email}
                    onChange={(e) => giveEmail(e.target.value)}
                    placeholder='examplemail@email.com' required/>
                </label>
                <label>
                    Message:
                    <textarea type="text" name="message" value={message}
                    onChange={(e) => giveMessage(e.target.value)}
                    placeholder="Enter message here..." required />
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}