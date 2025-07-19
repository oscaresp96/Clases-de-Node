import User from './models/user.js'

async function getUsers(req, res){
    try {
        const users = await User.find().sort({displayName:1});
        res.json(users);
    } catch (error){
        res.status(500).send({error})
    }
}

async function getUserById(req, res){
    try {
        const id = req.params.id
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        res.json(user);
    } catch (error){
        res.status(500).send({error})
    }
}

async function createUser(req, res){
    try {
        const {displayName, email, hashPassword, role, avatar, phone, isActive} = req.body;
        if(!displayName || !email || !hashPassword || !role || !avatar || !phone || !isActive){
            return res.status(400).json({error: "All fields are required"});
        }
        const newUser = await User.create({displayName, email, hashPassword, role, avatar, phone, isActive});
        res.status(201).json(newUser)
    } catch (error){
        res.status(500).send({error})
    }
}

async function updateUser(req, res){
    try {
        const id = req.params.id;
        const {displayName, email, hashPassword, role, avatar, phone, isActive} = req.body;
        if(!displayName || !email || !hashPassword || !role || !avatar || !phone || !isActive){
            return res.status(400).json({error: "All fields are required"});
        }
        const updatedUser = await User.findByIdAndUpdate(id, {displayName, email, hashPassword, role, avatar, phone, isActive}, {new:true});
        if(!updatedUser){
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json(updatedUser)
    } catch (error){
        res.status(500).send({error})
    }
}
async function deleteUser(req, res){
    try {
        const id = req.params.id; 
        const deletedUser = await User.findByIdAndDelete(id);
        if(!deletedUser){
            return res.status(404).json({message: "User not found"});
        }
        res.status(204).send()
    } catch (error){
        res.status(500).send({error})
    }
}

export {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}