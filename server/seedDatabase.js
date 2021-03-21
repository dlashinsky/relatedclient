const faker = require('faker')
require('./models')

const User = require('./models/User')
const Post = require('./models/Post')
const Comment = require('./models/Comment')


const topics = ["Wheelchair Accessability","Community Events",
"Local Meetups", "Awareness"]  // list of sample topics
const conditions = ["Cystic Fibrosis","Paralysis","Cerebral Palsy","Autism",
"Chronic Bone Disease", "Cancer","Phenylketonuria","Other",
"Surgical Complications"] // sample conditions
const zips = [60657,60613,60614] // list of sample zips
const relations = ["self","mother","father","caregiver","brother"]



//return single fake zip
function createFakeZip(){
    const randomZip = zips[Math.floor(Math.random()*zips.length)]
    return randomZip
}
//return single fake relation

function createFakeRelation(){
    const randomRelation = relations[Math.floor(Math.random()*relations.length)]
    return randomRelation
}

//return 1 up to n fake topics

function createFakeTopics(){
    const userTopics = []
    const numberOfSubscribedTopics = Math.ceil(Math.random()*topics.length)
    for(let i = 0; i<numberOfSubscribedTopics; i++){
        const randIndex = Math.floor(Math.random()*topics.length)
        if(! userTopics.includes(topics[randIndex])){
            userTopics.push(topics[randIndex])
        }
    }
    return userTopics
}

// returns generally 1 but sometimes 2 conditions

function createFakeConditions(){
    const userConditions = []
    let numberOfUserConditions = Math.ceil(Math.random()*conditions.length)
    if(numberOfUserConditions>2) {

       // make it somewhat unlikely to have 2 conditions
        if(Math.random()>0.15){
            numberOfUserConditions = 1
        } else{
            numberOfUserConditions = 2
        }

    }
    for(let i = 0; i<numberOfUserConditions; i++){
        const randIndex = Math.floor(Math.random()*conditions.length)
        if(! userConditions.includes(conditions[randIndex])){
            userConditions.push(conditions[randIndex])
        }
    }
    return userConditions
}


async function createSomeUsers(n_records){
    if(!n_records){
        n_records = 50 //default to create 50 dummy records
    }
    for(let i=0;i<n_records;i++){
        const record = await User.create({
            email: faker.internet.email(),
            username: faker.name.firstName(),
            password: faker.internet.password(),
            relation: createFakeRelation(),
            topics_of_interest: createFakeTopics(),
            disability_tags: createFakeConditions(),
            zip: createFakeZip(),
            county: "Placeholder County ",

        })
        console.log(record)
    }
}

async function findARandomUser(){
    // const count = await User.count()
    // console.log(count)
    randomUser = await User.aggregate([{$match:{}},{$sample:{size:1}}])
    console.log(randomUser)

}

async function createSomePosts(n_records){
    if(!n_records){
        n_records = 20 //default to create 20 dummy posts
    }
    //find random user

    for(let i = 0; i< n_records; i++){
        const findUser = await User.findOne({})
        console.log(findUser.id)
    }


    // const Post = await Post.create({
    //     discussion_tags: createFakeTopics(),
    //     content: faker.lorem.sentence(),
    //     user_id

    // })
}

//createSomePosts()
findARandomUser()
// for(i=0;i<50;i++){
//     //console.log(createFakeZip())
//     console.log(createFakeConditions())
// }
