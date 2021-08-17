import { getById, getmovie } from './db.js'

const resolvers = {
    Query: {
        getmovie : () => getmovie(),
        getmoviebyid : (_, {id}) => getById(id)
        }
    }

export default resolvers