import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;

app.use(cors());

const messages = [
    {
        id: 1,
        subject: "Hi Again",
        content: "Just wanted to check on you",
        isRead: true
    },
    {
        id: 2,
        subject: "Hi Friend",
        content: "Just wanted to let you know I’m good",
        isRead: false
    },
    {
        id: 3,
        subject: "Meeting Reminder",
        content: "Don't forget about our meeting tomorrow",
        isRead: false
    },
    {
        id: 4,
        subject: "Vacation Notice",
        content: "I'll be on vacation next week. Contact me if you need anything urgent.",
        isRead: true
    },
    {
        id: 5,
        subject: "Project Update",
        content: "Just wanted to inform you about the progress of our project. Everything is going smoothly.",
        isRead: false
    }
];

app.get('/messages', (req, res) => {
    res.json({ messages });
});

app.get('/messages/:id', (req, res) => {
    const messageId = parseInt(req.params.id);
    const message = messages.find(msg => msg.id === messageId);
    if (message) {
        res.json({ message });
    } else {
        res.status(404).json({ error: 'Message not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
