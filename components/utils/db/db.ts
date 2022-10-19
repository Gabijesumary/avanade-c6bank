import TypeDb from "../../../types/TypeDb";


const db: Array<TypeDb> = [ 
{
    id: 1,
    type: "pix",
    amount: 100,
    date: '2022-10-19',
    description: 'Pizza com a galera',
    operation: 'credit'
}, 
{
    id: 2,
    type: "debit",
    amount: 50,
    date: '2022-10-19',
    description: 'Gasolina',
    operation: 'debit'
},
{
    id: 3,
    type: "ted",
    amount: 100000,
    date: '2022-10-19',
    description: 'Salário',
    operation: 'credit'
}];

export default db;