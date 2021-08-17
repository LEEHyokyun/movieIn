const people = [
    {
        name : "LEE",
        age: 15,
        gender : "male"
    }, 
    {
        name : "KIM",
        age: 21,
        gender : "female"
    },
    {
        name : "LIM",
        age: 27,
        gender : "female"
    }

]

const resolvers = {
    Query: {
        people : () => people
    }
}

export default resolvers