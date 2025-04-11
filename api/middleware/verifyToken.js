import jwt from 'jsonwebtoken'

const verifyToken = (req,res,next) =>{
    const token = req.cookies.token;
    console.log('en middleware');
    
    if (!token) {
        //if there is no token 
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    try {
        console.log('hay token');
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next()
    } catch (error) {
        return res.status(403).json({ error: 'Invalid or expired token.' });
    }
}

export default verifyToken;