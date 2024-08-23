const bcrypt = require('bcryptjs');

app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, mobileNo, role, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = new User({ firstName, lastName, email, mobileNo, role, password: hashedPassword });
        await newUser.save();
        res.status(201).send({ message: "User registered successfully!" });
    } catch (error) {
        res.status(400).send({ error: "User registration failed!" });
    }
});

const jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).send({ error: "Invalid credentials!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).send({ error: "Invalid credentials!" });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, 'secret_key', { expiresIn: '1h' });

    res.send({ token });
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.send(users);
    } catch (error) {
        res.status(400).send({ error: "Failed to retrieve users!" });
    }
});

