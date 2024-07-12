import CowboyModel from '../../models/CowboyDAO.js';

const Cowboy = new CowboyModel();
/* get all cowboys */

const browse = (req, res) => {
  Cowboy.readAll()
    .then((cowboy) => {
      res.json(cowboy);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getPlayerCowboys = (req,res) =>{
  const loggedPlayerID = req.loggedPlayerId
  Cowboy.getPlayerCowboy(loggedPlayerID).then((cowboy)=>{
    res.json(cowboy)
  }).catch((err)=>{
    console.log("you can't get your cowboys")
    return res.status(401).json(err)
  })
}
/* get all dispo cowboys  */

const getAlldispoCowboys = (req, res) => {
  Cowboy.readAllDispo()
    .then((Cowboy) => {
      res.json(Cowboy);
    })
    .catch((err) => {
      console.log("erreur controll")
      return res.status(401).json(err);
 
    });
};

export default {
  browse,
  getAlldispoCowboys,
  getPlayerCowboys
  
};
