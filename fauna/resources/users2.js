import faunadb from 'faunadb';
const q = faunadb.query;

export default q.CreateCollection({ name: 'users2' });
