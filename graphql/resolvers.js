import { getById, getmovie, addmovie } from './db.js'

const resolvers = {
    Query: {
        getmovie : () => getmovie(),
        getmoviebyid : (_, {id}) => getById(id)
        },

    Mutation: {
        addmovie : (_, {title, score}) => addmovie(title, score)
    }
}

export default resolvers