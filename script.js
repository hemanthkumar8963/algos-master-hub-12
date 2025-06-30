
// Data
const skillsData = [
    {
        title: "Programming Languages",
        icon: "fas fa-code",
        skills: ["Python", "C", "Java", "JavaScript", "TypeScript"],
        color: "linear-gradient(to right, #3b82f6, #06b6d4)",
        level: null
    },
    {
        title: "Web Development", 
        icon: "fas fa-globe",
        skills: ["HTML", "CSS", "Bootstrap", "React", "Node.js", "Express.js", "Interactive Web Design"],
        color: "linear-gradient(to right, #10b981, #059669)",
        level: "Medium"
    },
    {
        title: "Database",
        icon: "fas fa-database",
        skills: ["MySQL", "MongoDB", "SQL"],
        color: "linear-gradient(to right, #8b5cf6, #7c3aed)",
        level: "Beginner"
    },
    {
        title: "Core Skills",
        icon: "fas fa-layer-group",
        skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "UI/UX Design", "Problem Solving"],
        color: "linear-gradient(to right, #6366f1, #8b5cf6)"
    },
    {
        title: "Machine Learning",
        icon: "fas fa-brain",
        skills: ["Python", "TensorFlow", "Scikit-learn", "Data Analysis", "Pandas", "NumPy"],
        color: "linear-gradient(to right, #f97316, #ef4444)"
    },
    {
        title: "Cybersecurity",
        icon: "fas fa-shield-alt",
        skills: ["Threat Detection", "Incident Response", "Risk Management", "Security Analysis", "Vulnerability Assessment"],
        color: "linear-gradient(to right, #ef4444, #ec4899)"
    },
    {
        title: "Tools & Technologies",
        icon: "fas fa-wrench",
        skills: ["Git", "GitHub", "VS Code", "MERN Stack", "RESTful APIs"],
        color: "linear-gradient(to right, #14b8a6, #06b6d4)"
    }
];

const projectsData = [
    {
        title: "Deep Detect",
        description: "Real-time threat detection and defense system using advanced cybersecurity techniques and machine learning algorithms.",
        skills: ["Cybersecurity", "Machine Learning", "Python", "Threat Detection"],
        github: "https://github.com/Hemanth-Kumar-Somana/Deep_Detect/",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
        gradient: "linear-gradient(to right, #ef4444, #ec4899)"
    },
    {
        title: "Password Manager",
        description: "Secure Vault for Your Credentials with advanced encryption and user-friendly interface for managing passwords safely.",
        skills: ["MERN Stack", "Security", "Encryption"],
        github: "https://github.com/Hemanth-Kumar-Somana/Password-Manager",
        image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=500&h=300&fit=crop",
        gradient: "linear-gradient(to right, #3b82f6, #06b6d4)"
    },
    {
        title: "DSA Learning Portal",
        description: "DSA Made Simple and Effective - A comprehensive platform for learning Data Structures and Algorithms with interactive content.",
        skills: ["React", "Node.js", "Educational Technology"],
        github: "https://github.com/Hemanth-Kumar-Somana/DSA-learning-portal",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
        gradient: "linear-gradient(to right, #10b981, #059669)"
    },
    {
        title: "Daily Email Summarizer",
        description: "Intelligent email processing system that automatically summarizes daily emails using natural language processing and machine learning techniques.",
        skills: ["Machine Learning", "Python", "Email Processing"],
        github: "https://github.com/Hemanth-Kumar-Somana/Daily-Email-Summarizer",
        image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=300&fit=crop",
        gradient: "linear-gradient(to right, #8b5cf6, #7c3aed)"
    }
];

const experienceData = [
    {
        organization: "CS50 x Harvard",
        period: "Dec 2024 – May 2025",
        courses: [
            {
                name: "CS50's Introduction to Computer Science",
                certificateUrl: "/lovable-uploads/5ae16e33-916f-4205-a011-934339b108ed.png"
            },
            {
                name: "Python Programming", 
                certificateUrl: "/lovable-uploads/fa22ca46-7178-4b08-8b51-debe2570169e.png"
            },
            {
                name: "Databases with SQL",
                certificateUrl: "/lovable-uploads/3b326cbe-d740-4ac2-b837-ad3adb224075.png"
            },
            {
                name: "Web Programming with Python and JavaScript",
                certificateUrl: null
            }
        ],
        type: "Educational Program",
        color: "linear-gradient(to right, #dc2626, #b91c1c)",
        profileImage: "https://camo.githubusercontent.com/2485cdb92cc1563cb21703bd1dc5474a727cd17b4d8243b27b9906468ec4e945/68747470733a2f2f676f6f2e676c2f6d4a774e5543"
    },
    {
        organization: "TCS",
        program: "Young Professional Batch-2",
        period: "Feb 2025 – Apr 2025",
        courses: [],
        type: "Professional Development",
        color: "linear-gradient(to right, #2563eb, #1d4ed8)",
        singleCertificate: true,
        certificateUrl: "/lovable-uploads/78dd9d9e-835f-4dd2-af7b-4d8f37578e43.png"
    },
    {
        organization: "ServiceNow",
        program: "Micro-Certifications",
        period: "Feb 2025 – Apr 2025",
        courses: [
            {
                name: "Flow Designer – Feb 2025",
                certificateUrl: "/lovable-uploads/fc257750-c769-47cb-8525-d469c2efd264.png"
            },
            {
                name: "UI Builder – Apr 2025",
                certificateUrl: "/lovable-uploads/09c670e4-30a8-4121-8b5f-577e4b87c269.png"
            }
        ],
        type: "Technical Certification",
        color: "linear-gradient(to right, #059669, #047857)",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9azji1P3eHGE-4K5f_uogVJk8glXpar_cg&s"
    }
];

const codingProfilesData = [
    {
        platform: "Smart Interviews",
        description: "Comprehensive coding interview preparation platform with structured learning paths and practice problems.",
        profileImage: "https://media.licdn.com/dms/image/v2/D560BAQGhGl9gZ5NfjA/company-logo_200_200/company-logo_200_200/0/1692156655367?e=2147483647&v=beta&t=FTd01Jk64RhzHAE99gFBAXqLvKvdcwSaxWsncunqhZo",
        profileLink: "https://smartinterviews.in/profile/hemanthkumar40",
        gradient: "linear-gradient(to right, #3b82f6, #6366f1)"
    },
    {
        platform: "LeetCode",
        description: "Popular coding platform for practicing algorithmic problems and preparing for technical interviews.",
        profileImage: "https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000",
        profileLink: "https://leetcode.com/u/SOMANA_HEMANTH_KUMAR/",
        gradient: "linear-gradient(to right, #f97316, #eab308)"
    },
    {
        platform: "HackerRank",
        description: "Technical skills assessment platform with coding challenges and competitive programming contests.",
        profileImage: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hackerrank.svg",
        profileLink: "https://www.hackerrank.com/profile/22311a05fy1",
        gradient: "linear-gradient(to right, #10b981, #059669)"
    }
];

const contactData = [
    {
        label: "Email",
        value: "hemanthkumarsomana@gmail.com",
        href: "mailto:hemanthkumarsomana@gmail.com",
        icon: "fas fa-envelope",
        color: "linear-gradient(to right, #ef4444, #ec4899)"
    },
    {
        label: "WhatsApp",
        value: "Chat on WhatsApp",
        href: "https://wa.me/919398756712",
        icon: "fas fa-comments",
        color: "linear-gradient(to right, #10b981, #059669)"
    },
    {
        label: "LinkedIn",
        value: "Connect with me",
        href: "https://www.linkedin.com/in/hemanth-kumar-somana-2029b5212/",
        icon: "fab fa-linkedin",
        color: "linear-gradient(to right, #3b82f6, #06b6d4)"
    },
    {
        label: "GitHub",
        value: "View my repositories",
        href: "https://github.com/Hemanth-Kumar-Somana",
        icon: "fab fa-github",
        color: "linear-gradient(to right, #374151, #1f2937)"
    },
    {
        label: "Resume",
        value: "Download Resume",
        href: "https://drive.google.com/drive/folders/1UNQzAjpEFmiSDNKKjK1dDo6AJVDOk7ce?usp=drive_link",
        icon: "fas fa-file-text",
        color: "linear-gradient(to right, #10b981, #059669)"
    }
];

// Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleViewCredential(certName, certificateUrl) {
    if (certificateUrl) {
        window.open(certificateUrl, '_blank');
    } else {
        alert(`Certificate for ${certName} will be available soon!`);
    }
}

function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = skillsData.map(skill => `
        <div class="skill-card">
            <div class="skill-icon" style="background: ${skill.color}">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-header">
                <h3 class="skill-title">${skill.title}</h3>
                ${skill.level ? `<span class="skill-level">${skill.level}</span>` : ''}
            </div>
            <div class="skill-tags">
                ${skill.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay" style="background: ${project.gradient}"></div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.skills.map(skill => `<span class="project-tag">${skill}</span>`).join('')}
                </div>
                <div class="project-actions">
                    <a href="${project.github}" target="_blank" class="btn-small btn-outline-small">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    const experienceList = document.getElementById('experienceList');
    experienceList.innerHTML = experienceData.map(exp => `
        <div class="experience-card">
            <div class="experience-header">
                <div class="experience-logo">
                    ${exp.profileImage ? 
                        `<img src="${exp.profileImage}" alt="${exp.organization} logo">` : 
                        `<i class="fas fa-award"></i>`
                    }
                </div>
                <div class="experience-info">
                    <h3 class="experience-title">${exp.organization}</h3>
                    ${exp.program ? `<p class="experience-program">${exp.program}</p>` : ''}
                    <div class="experience-meta">
                        <div class="experience-period">
                            <i class="fas fa-calendar"></i>
                            <span>${exp.period}</span>
                        </div>
                        <span class="experience-type" style="background: ${exp.color}">${exp.type}</span>
                    </div>
                </div>
            </div>
            
            ${exp.singleCertificate ? `
                <div class="single-credential">
                    <button onclick="handleViewCredential('${exp.program || exp.organization}', '${exp.certificateUrl}')" 
                            class="credential-btn">
                        <i class="fas fa-eye"></i> View Credential
                    </button>
                </div>
            ` : `
                <div class="experience-courses">
                    ${exp.courses.map(course => `
                        <div class="course-item">
                            <div class="course-name">
                                <div class="course-dot"></div>
                                <span>${course.name}</span>
                            </div>
                            <button onclick="handleViewCredential('${course.name}', '${course.certificateUrl}')" 
                                    class="credential-btn">
                                <i class="fas fa-eye"></i> View
                            </button>
                        </div>
                    `).join('')}
                </div>
            `}
        </div>
    `).join('');
}

function renderCodingProfiles() {
    const profilesGrid = document.getElementById('profilesGrid');
    profilesGrid.innerHTML = codingProfilesData.map(profile => `
        <div class="profile-card">
            <div class="profile-header">
                <div class="profile-icon" style="background: ${profile.gradient}">
                    <img src="${profile.profileImage}" alt="${profile.platform} logo">
                </div>
                <div class="profile-info">
                    <h3>${profile.platform}</h3>
                    <div class="profile-type">
                        <i class="fas fa-trophy"></i>
                        <span>Coding Platform</span>
                    </div>
                </div>
            </div>
            <p class="profile-description">${profile.description}</p>
            <a href="${profile.profileLink}" target="_blank" class="profile-link" style="background: ${profile.gradient}">
                <i class="fas fa-code"></i>
                <span>View Profile</span>
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `).join('');
}

function renderContact() {
    const contactGrid = document.getElementById('contactGrid');
    contactGrid.innerHTML = contactData.map(contact => `
        <a href="${contact.href}" target="_blank" class="contact-card">
            <div class="contact-icon" style="background: ${contact.color}">
                <i class="${contact.icon}"></i>
            </div>
            <h3 class="contact-label">${contact.label}</h3>
            <p class="contact-value">${contact.value}</p>
            <i class="fas fa-external-link-alt contact-external"></i>
        </a>
    `).join('');
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuContent = document.getElementById('mobileMenuContent');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuContent.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenuContent.contains(e.target)) {
            mobileMenuContent.classList.remove('show');
        }
    });

    // Close menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuContent.classList.remove('show');
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderExperience();
    renderCodingProfiles();
    renderContact();
    initMobileMenu();
    initSmoothScrolling();
});

// Make functions globally available
window.scrollToSection = scrollToSection;
window.handleViewCredential = handleViewCredential;
