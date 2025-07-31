const express = require('express');
const router = express.Router();

// Example API endpoints
router.get('/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Portfolio data endpoints
router.get('/portfolio', (req, res) => {
  res.json({
    name: 'SOMANA HEMANTH KUMAR',
    title: 'Full Stack Developer | ML Explorer',
    description: 'Passionate about creating efficient solutions through code and exploring the realms of cybersecurity, machine learning, and the MERN stack.',
    skills: [
      {
        category: 'Frontend Development',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
      },
      {
        category: 'Backend Development', 
        technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL']
      },
      {
        category: 'Machine Learning',
        technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas']
      },
      {
        category: 'Cybersecurity',
        technologies: ['Network Security', 'Ethical Hacking', 'Penetration Testing']
      }
    ]
  });
});

module.exports = router;