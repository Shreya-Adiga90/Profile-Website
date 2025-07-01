exports.getUserInfo = async (req, res) => {
  try {
const profile = {
  photoUrl: '/images/Profile_Photo.jpg',  // must match folder and file name
  aboutMe: 'I am a software developer passionate about learning new things.',
  skills: ['JavaScript', 'React', 'Node.js'],
  interests: ['Reading', 'Gaming', 'Traveling'],
  doing: "Working on cool web projects.",
  contact: {
    linkedin: '(NotAvailable)',
    phone: '(Not Available)',
    email: 'youremail@example.com',
    github: 'https://github.com/yourusername'
  }
};
  res.json(profile);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};