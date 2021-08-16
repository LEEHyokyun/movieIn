const LEE = {
    name : "Hyokyun",
    age : 15,
    gender : "male"
}

const resolvers = {
    Query: {
        person: () => LEE
    }
}

export default resolvers