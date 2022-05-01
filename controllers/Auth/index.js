const bcrypt = require('bcrypt');
const User = require('../../models/User');


const registration = async (req, res) => {
    // CHECK IF USER NOT EXIST
    const email = req.body.email;
    const userExist = await User.find({ email });
    // console.log(userExist);
    if (userExist.length === 0) {
        console.log(
            {
                full_name: req.body.full_name,
                username: req.body.username,
                email: req.body.email,
                full_name: req.body.full_name,
            }
        );
        bcrypt.hash(
            req.body.password,
            10,
            async (err, hash) => {
                if (err) {
                    console.log(err);
                } else {
                    await User.create({
                        full_name: req.body.full_name,
                        username: req.body.username,
                        email: req.body.email,
                        password: hash
                    });
                    console.log('success!');
                    res.send('success!');
                }
            })
    } else {
        res.json({ message: 'user already exist with this email account' });
    }

}

const login = async (req, res) => {
    if (await (await User.find({ email: req.body.email })).length !== 0) {
        const result = await (await User.find({ email: req.body.email }))[0]
        const hash = result.password;

        bcrypt.compare(req.body.password, hash, async (err, result) => {
            const resData = {
                _id: result._id,
                full_name:result.full_name,
                username:result.username,
                email:result.email,
                role:result.role,
                created_at:result.created_at,
                updated_at:result.updated_at,
            }
            result ? res.send(resData) : res.json({ message: "Email or password incorrect" })
        });

    } else {
        res.json({ message: "Email or password incorrect" })
    }
}

module.exports = {
    registration,
    login
};