export const people = [
    {
        id : 1,
        name : "LEE",
        age: 15,
        gender : "male"
    }, 
    {
        id : 2,
        name : "KIM",
        age: 21,
        gender : "female"
    },
    {
        id : 3,
        name : "LIM",
        age: 27,
        gender : "female"
    }

]

export const getById = id => {
    //filter returns array
    const filteredPeople = people.filter((people) => id === people.id);
    //filtered data = return array's index 0
    console.log(filteredPeople)
    return filteredPeople[0]
}
