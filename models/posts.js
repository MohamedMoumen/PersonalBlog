const mongoose = require('mongoose');

// MONGOOSE/MODEL CONFIG
const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

module.exports =  mongoose.model("Blog", blogSchema);
