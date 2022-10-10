
import db from '../models/index';
import CRUDServices from '../services/CRUDServices';
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (e) {
    console.log(e);
  }
};

let getCRUD = async (req, res) => {
  return res.render("crud.ejs");
};
let postCRUD = async (req, res) => {
  let message = await CRUDServices.createNewUser(req.body);
  return res.send("crud from server post CRUD");
};

let displayCRUD = async (req, res) => { 
  let data = await CRUDServices.getAllUSer();
  return res.render("displayCRUD.ejs",{
    dataTable: data,
  });
};
let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if(userId){
    let userData = await CRUDServices.getUserById(userId);
    //check user data not founded


    return res.render("editCRUD.ejs",{
      user: userData,
    });  
    
  }else{
    return res.send("Undefined user");  

  }
  
};
let putCRUD = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDServices.updateUserData(data);
  return res.render("displayCRUD.ejs",{
    dataTable: allUsers,
  });
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id; 
  if(id){
    await CRUDServices.deleteUserById(id);
    return res.send('deleteCRUD successfully')
  }else{
    return res.send('Users undefined')
  }
 
   
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayCRUD: displayCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
