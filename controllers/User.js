const uuid = require("uuid")
const bcrypt = require("bcrypt")

const UserModel = require("../models/User")

const createUser = async (req, res) => {
	const {name , userName, lastName,password} =req.body
	// console.log({name , userName, lastName,password})

	const salt = bcrypt.genSaltSync(10)
	const hash = await bcrypt.hash(password, salt)

	const data = new UserModel({
		name,
		userName,
		lastName,
		password:hash,
		uuid: uuid.v4(),
	})
	data.save()
	
	res.status(201).json({ ...req.body, success:true })
}

module.exports = {createUser}