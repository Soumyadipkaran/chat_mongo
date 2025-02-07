const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("Connection Successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allchats = [
    {
        from: "ABC",
        to: "XYZ",
        msg: "Hello, I'm ABC!",
        created_at: new Date()
    },
    {
        from: "XYZ",
        to: "ABC",
        msg: "Hi ABC, how are you?",
        created_at: new Date()
    },
    {
        from: "John",
        to: "Doe",
        msg: "Hey Doe, long time no see!",
        created_at: new Date()
    },
    {
        from: "Doe",
        to: "John",
        msg: "Yeah, been busy with work. How about you?",
        created_at: new Date()
    },
    {
        from: "Alice",
        to: "Bob",
        msg: "Good morning! Hope you have a great day!",
        created_at: new Date()
    },
    {
        from: "Bob",
        to: "Alice",
        msg: "Thanks, Alice! You too!",
        created_at: new Date()
    },
    {
        from: "Charlie",
        to: "David",
        msg: "Are we meeting at the cafe today?",
        created_at: new Date()
    },
    {
        from: "David",
        to: "Charlie",
        msg: "Yes, I'll be there in 10 minutes!",
        created_at: new Date()
    },
    {
        from: "Eve",
        to: "Mallory",
        msg: "Did you finish the project?",
        created_at: new Date()
    },
    {
        from: "Mallory",
        to: "Eve",
        msg: "Almost done, just need to polish a few things.",
        created_at: new Date()
    },
    {
        from: "Oscar",
        to: "Trudy",
        msg: "Let's catch up this weekend!",
        created_at: new Date()
    }
];


Chat.insertMany(allchats);
