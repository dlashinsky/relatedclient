const mongoose =  require('mongoose')


const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    relation: {
        type: String
    },
    topics_of_interest: {
        type: Array
    },
    disability_tags: {
        type: Array
    },
    liked_posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    liked_comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User