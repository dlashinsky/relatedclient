const mongoose =  require('mongoose')


const postSchema = new mongoose.Schema({
    discussion_tags: {
        type: Array
    },
    content: {
        type: String
    },
    likes: {
        type: Array
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    users_who_liked: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]

})

const Post = mongoose.model('Post', postSchema)

module.exports = Post