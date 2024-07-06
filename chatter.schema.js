import mongoose from "mongoose";

const chatterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Some text is required"]
    },
    message:{
        type: String,
    },
    time: Date
});

const Chat = mongoose.model("Chat",chatterSchema);
export default Chat;