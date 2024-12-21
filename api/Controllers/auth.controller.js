import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';


export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;

    // vérifier que les inputs soient remplis    
  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    //return res.status(400).json({message: 'All fields are required'});
    //next permet d'utiliser le Middlware dans index pour gérer les erreurs avec errorHandler
    next(errorHandler(400, 'All field are required'))
  }


  const hashedPassword = bcryptjs.hashSync(password, 10);


  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json('Signup successful');
  } catch (error) {
    //res.status(500).json ({message: error.message});
    //next permet d'utiliser le Middlware dans index pour gérer les erreurs
    next(error);
  }
}