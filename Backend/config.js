import { createConnection } from "mysql2";

const conn = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

conn.connect((err) => {
    console.log(err);

})

export default conn;