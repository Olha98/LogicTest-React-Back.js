const UserDB = require('./user.model');
const catchAsync = require('../../utils/catchAsync');

const getCurrentUser = async (req, res, next) => {
  
  const response = {
    id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    aboutMySelf: req.user.aboutMySelf,
    skills: req.user.skills,
    projectsExperience: req.user.projectsExperience,
    workExperience: req.user.workExperience,
    contactsPhone: req.user.contactsPhone,
  };
  

  return res.status(200).json(response);
};

const updateUsersController = catchAsync(async (req, res, next) => {

  const updatedUser = await UserDB.findByIdAndUpdate(
    req.user._id,
    { ...req.body },
    {
      new: true,
    },
  );
  
  const response = {
    id: updatedUser._id,
    username: updatedUser.username,
    email: updatedUser.email,
    aboutMySelf: updatedUser.aboutMySelf,
    skills: updatedUser.skills,
    projectsExperience: updatedUser.projectsExperience,
    workExperience: updatedUser.workExperience,
    contactsPhone: updatedUser.contactsPhone,
  }

  return res.status(200).json(response);

});



module.exports = { getCurrentUser, updateUsersController };