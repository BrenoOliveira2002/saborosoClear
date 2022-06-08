const req = require("express/lib/request")
const res = require("express/lib/response")
var conn = require("./db")
const { render } = require("./reservations")
module.exports = {

    login(email, password) {

        render(){

            render(req, res, error) {

                res.render("admin/login", {

                    body: req.body, 
                    error
                })
            }
        }
    

        return new Promise ((resolve, reject) => {


            conn.query(`

            SELECT * FROM tb_users WHERE email = ? 
            
            `, [
                email
            ], (err, results) => {

                if (err) {

                    reject(err);
                }else {

                    if (!results.length > 0) {

                        reject("Usuario ou senha incorretos")
                    }else {

                    let row = results [0]

                    if (row.password !== password ) {

                        reject("Usuario ou senha incorretos")        
                    } else {

                        resolve(row)
                    }
                }
            }
        })
        })

