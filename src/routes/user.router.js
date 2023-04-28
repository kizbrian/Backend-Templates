const express = require('express');
const User = require('../Models/user.model');
const router = express.Router();

router.post("/user", async (req, res) => {
    try {
        const newUser = {
            username: req.body.username,
            firstname: req.body.firstname,
            email: req.body.email,
        };
        console.log(newUser);
        const user = new User(newUser);
        await user.save();

        return res.status(201).json({
            success: true,
            user
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
});

module.exports = router;

