document.addEventListener('DOMContentLoaded', () => {
    // Project Data
    const projectData = {
        extramarks: {
            title: "GenAI Media & API Suite 📁",
            client: "Extramarks Education Pvt. Ltd. 🎓",
            period: "Oct 2025 - Present",
            description: "Architecting and deploying production-grade Generative AI solutions and scalable backend systems for global educational content delivery. Focused on real-time audio synthesis and high-performance APIs.",
            highlights: [
                "Architected asynchronous RESTful APIs using Python FastAPI, optimizing data retrieval latency. ⚡",
                "Engineered a dual-TTS synthesis pipeline (ElevenLabs & Google TTS) for automated multilingual audio. 🔊",
                "Developed a high-performance Multilingual Media Review Panel in ReactJS for AI content validation. 🖥️",
                "Utilized FFMPEG with atempo filters to ensure precise audio/video alignment. 🎞️",
                "Optimized synchronization logic using requestAnimationFrame for frame-accurate playback across 8+ languages. 🔄"
            ],
            stack: ["FastAPI", "Python", "ReactJS", "ElevenLabs", "Google Cloud TTS", "GCS", "FFMPEG", "Secret Manager"]
        },
        quarks: {
            title: "Speaker Detection & AI Transcription 🔊",
            client: "Quarks Technosoft Pvt Ltd ⚛️",
            period: "Apr 2025 - Sep 2025",
            description: "Leveraging cutting-edge AI models to automate content localization and enhance audio processing accuracy for multi-speaker environments.",
            highlights: [
                "Engineered Python-based Generative AI solutions using Gemini and ElevenLabs for voice scaling. 🧠",
                "Implemented advanced speaker detection using Resemblyzer and HDBSCAN, improving classification accuracy. 👥",
                "Automated transcript generation and translation using Google STT and Gemini 2.5 Flash. 📝",
                "Synthesized natural-sounding audio via Google TTS for regionalized learning experiences. 🎧",
                "Collaborated with academic teams to ensure high-quality pedagogical standards in AI outputs. 🏫"
            ],
            stack: ["Python", "Gemini 2.5 Flash", "Resemblyzer", "HDBSCAN", "Google STT", "ElevenLabs", "AWS"]
        },
        mli: {
            title: "MLI SOA Cloud Transformation ☁️",
            client: "Max Life Insurance (via Cognizant) 💼",
            period: "Feb 2024 - Apr 2025",
            description: "Led the migration of legacy insurance APIs to a modern cloud-native architecture, significantly improving system reliability and developer velocity.",
            highlights: [
                "Migrated legacy APIs to Java Spring Boot and AWS cloud, improving throughput and scalability. 🚀",
                "Designed cloud migration strategies for legacy services transitioning to microservices. 🗺️",
                "Mentored two junior resources, fostering a collaborative and high-performing team culture. 🤝",
                "Successfully promoted 7+ migrated microservices to production environments. 🚢",
                "Collaborated cross-functionally to resolve high-priority bugs during the migration phase. 🐛"
            ],
            stack: ["Java", "Spring Boot", "AWS ECS", "CloudWatch", "API Gateway", "Junit5", "Mockito", "Jenkins"]
        },
        lm: {
            title: "LM GRS Claim Services 🛠️",
            client: "Liberty Mutual Insurance (via Cognizant) 💼",
            period: "Jun 2022 - Jun 2023",
            description: "Delivered scalable claim-related microservices and serverless functions for a leading global insurer, ensuring robust backend operations.",
            highlights: [
                "Delivered claim-related requirements across development and testing environments. ✅",
                "Designed and updated claim services utilizing 4+ Java/Spring Boot/AWS microservices. 🏗️",
                "Developed AWS Lambda functions for event-driven asynchronous processing. ⚡",
                "Integrated SNS and SQS for decoupled service communication. 📬",
                "Optimized DynamoDB queries for high-speed metadata retrieval. 🔍"
            ],
            stack: ["Java", "Spring Boot", "AWS Lambda", "DynamoDB", "SNS", "SQS", "API Gateway", "Bamboo CI/CD"]
        },
        library: {
            title: "LibraryKendra Architecture 📚",
            client: "Full Stack Personal/Project 👨‍💻",
            period: "Oct 2023 - Jan 2024",
            description: "A comprehensive library management ecosystem demonstrating modern microservices architecture and cloud-native deployment patterns.",
            highlights: [
                "Designed and implemented 7 Spring Boot microservices with high modularity. 🏗️",
                "Built a responsive ReactJS frontend for user registration and book browsing. ⚛️",
                "Configured Eureka, API Gateway, and Config Server for full Spring Cloud capabilities. 🌐",
                "Implemented secure authentication and book wishlist modules. 🔐",
                "Deployed onto AWS using EC2, S3, and RDS (MySQL). ☁️"
            ],
            stack: ["SpringBoot", "Java", "Kafka", "Eureka", "ReactJS", "MySQL", "AWS EC2", "S3"]
        },
        movie: {
            title: "MovieBooking Management 🎬",
            client: "Full Stack Personal/Project 👨‍💻",
            period: "Jan 2022 - Jun 2022",
            description: "Scale-ready movie booking application featuring complex state management and secure administrative workflows.",
            highlights: [
                "Built a scalable movie booking and management system from scratch. 🏗️",
                "Developed user features including real-time movie listings and booking cycles. 🎟️",
                "Implemented comprehensive Admin CRUD operations for movie and theater management. ⚙️",
                "Leveraged MongoDB for flexible document-based data storage. 💾",
                "Configured Junit5 and Mockito for robust backend testing coverage. 🧪"
            ],
            stack: ["SpringBoot", "Java", "ReactJS", "MongoDB", "Junit5", "Mockito", "Bootstrap", "AWS"]
        }
    };

    // Modal Logic
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.getElementById('closeModal');

    function openProject(projectId) {
        const project = projectData[projectId];
        if (!project) return;

        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <div class="modal-meta">
                <p><strong>Org/Client:</strong> ${project.client}</p>
                <p><strong>Timeline:</strong> ${project.period}</p>
            </div>
            <p class="modal-desc">${project.description}</p>
            
            <h4 style="color: var(--text-primary); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 12px; font-weight: 700; letter-spacing: 1px;">
                <span style="width: 32px; height: 2px; background: var(--accent-color);"></span> KEY CONTRIBUTIONS
            </h4>
            <ul style="color: var(--text-secondary); list-style: none; padding-left: 0; margin-bottom: 3rem; display: grid; gap: 14px;">
                ${project.highlights.map(h => `<li style="line-height: 1.6; padding-left: 24px; position: relative; font-size: 1rem;"><span style="position: absolute; left: 0; color: var(--accent-color); font-weight: bold;">▹</span> ${h}</li>`).join('')}
            </ul>

            <div class="modal-tech">
                <h4>ENGINEERED WITH</h4>
                <div class="skills-grid">
                    ${project.stack.map(s => {
            const isAI = ["Gemini", "ElevenLabs", "LLM", "STT", "TTS", "GenAI"].some(ai => s.includes(ai));
            return `<span class="skill-badge ${isAI ? 'skill-featured' : ''}">${s}</span>`;
        }).join('')}
                </div>
            </div>
        `;

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    document.querySelectorAll('.open-project').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectId = e.target.getAttribute('data-project');
            openProject(projectId);
        });
    });

    closeModal.addEventListener('click', closeProjectModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeProjectModal();
    });

    // Intersection Observer for staggered reveal animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-in');
    animatedElements.forEach((el, index) => {
        // Find if this element is part of a grid to apply stagger
        const parent = el.parentElement;
        let delay = 0;

        if (parent.classList.contains('projects-grid') || parent.classList.contains('skills-grid') || parent.classList.contains('timeline')) {
            const siblings = Array.from(parent.children).filter(child => child.classList.contains('animate-in'));
            const sIndex = siblings.indexOf(el);
            delay = sIndex * 0.15;
        }

        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) scale(0.95)';
        el.style.transition = `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;
        observer.observe(el);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Header transparency on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (window.scrollY > 50) {
            header.style.background = isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 10px 40px rgba(0,0,0,0.15)';
            header.style.height = '70px';
        } else {
            header.style.background = 'transparent';
            header.style.boxShadow = 'none';
            header.style.height = '80px';
        }
    });

    // Auto-typing effect
    const typewriterElement = document.getElementById('typewriter');
    const nameText = "Harshit Gupta.";
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 200;

    function type() {
        if (!typewriterElement) return;
        const currentText = typewriterElement.textContent;

        if (isDeleting) {
            typewriterElement.textContent = nameText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 100;
        } else {
            typewriterElement.textContent = nameText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 200;
        }

        if (!isDeleting && charIndex === nameText.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
    }

    type();

    // Dynamic Current Year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Dynamic Calendar Date
    const calendarElement = document.getElementById('dynamic-calendar');
    if (calendarElement) {
        const now = new Date();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[now.getMonth()];
        const day = now.getDate();

        calendarElement.innerHTML = `
            <div class="calendar-badge">
                <div class="month">${month}</div>
                <div class="day">${day}</div>
            </div>
        `;
    }

    // Interactive Mouse Glow (Luxury Feature)
    document.addEventListener('mousemove', (e) => {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        const { left, top, width, height } = hero.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        hero.style.setProperty('--mouse-x', `${x}%`);
        hero.style.setProperty('--mouse-y', `${y}%`);
    });
});
