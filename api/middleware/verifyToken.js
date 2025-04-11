import jwt from 'jsonwebtoken'

const verifyToken = (req,res,next) =>{
    const token = req.cookies.token;
    if (!token) {
        //if there is no token 
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next()
    } catch (error) {
        return res.status(403).json({ error: error.message });
    }
}

export default verifyToken;