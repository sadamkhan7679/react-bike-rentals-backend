const formatUser = (user) => {
  return {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    gender: user.gender,
    role: user.role,
  };
};

module.exports = {
  formatUser,
};
