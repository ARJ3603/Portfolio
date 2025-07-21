const portfolioProjects = [
    {
        id: 'logicrogue',
        title: 'LogicRogue RPG',
        cardDescription: 'Managed backend and database aspects for a turn-based RPG with logic puzzles.',
        duration: 'May 30th, 2025 - Jun 12th, 2025',
        detailedDescription: 'Developed a turn-based RPG with complex logic puzzles and robust backend database management for user progress, game state, and inventory. Focused on designing scalable backend architecture, efficient data persistence, and integrating gameplay mechanics with database operations. Utilized Node.js, Express, and a NoSQL database (e.g., MongoDB mock) to handle game logic and user data.',
        liveDemo: '#',
        githubRepo: 'https://github.com/RossignolD/logicRogue',
        timelineIcon: 'fa-solid fa-gamepad',
        carouselImages: [
            'gamescreen.png',
            'dialoguescreen.png',
            'encounterscreen.png'
        ]
    },
    {
        id: 'bookemporium',
        title: 'Book Emporium Webpage',
        cardDescription: 'Built a dynamic e-commerce front-end demo with product search, sorting and cart functionalities.',
        duration: 'Mar 31st, 2025',
        detailedDescription: 'Engineered a responsive single-page shopping application from scratch, showcasing a list of products with advanced search, sorting, category filtering, and shopping cart functionalities. Implemented dynamic content manipulation using JavaScript, ensuring a smooth and interactive user experience across various devices.',
        liveDemo: 'https://arj3603.github.io/Book-Emporium/',
        githubRepo: 'https://github.com/ARJ3603/Book-Emporium',
        timelineIcon: 'fa-solid fa-book',
        carouselImages: [
            'emporiumhome.png',
            'emporiumfilter.png',
            'emporiumsearch.png'
        ]
    },
    {
        id: 'tinysearchengine',
        title: 'Tiny Web Search Engine',
        cardDescription: 'Implemented core search engine components in Node.js with a CLI.',
        duration: 'Mar 14th, 2025',
        detailedDescription: 'Developed a basic web search engine with core components including an inverted search index, keyword extraction with stop word filtering, and a union-based search algorithm. Provided a command-line interface (CLI) for user interaction and tested components with a simple testing framework. Focused on fundamental data structures and algorithms for information retrieval.',
        liveDemo: '#',
        githubRepo: 'https://github.com/ARJ3603/tiny-web-search-engine-cli',
        timelineIcon: 'fa-solid fa-magnifying-glass',
        carouselImages: []
    },
    
];


document.addEventListener('DOMContentLoaded', () => {

    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.tabTarget;
            tabButtons.forEach(btn => btn.classList.remove('active-tab-btn'));
            button.classList.add('active-tab-btn');
            tabContents.forEach(content => content.classList.add('hidden'));
            document.getElementById(targetId).classList.remove('hidden');
        });
    });
    if (tabButtons.length > 0) {
        tabButtons[0].classList.add('active-tab-btn');
        tabContents[0].classList.remove('hidden');
    }

    renderProjectCards();
    renderProjectTimeline();

    initializeCarousels();

    const downloadCvBtn = document.getElementById('downloadCvBtn');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', () => {
            const cvFiles = ['CV1.png', 'CV2.png'];

            cvFiles.forEach((fileName, index) => {
                const a = document.createElement('a');
                a.href = fileName;
                a.download = `Abigail_Rector_Jones_CV_Page${index + 1}.png`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });
        });
    }

    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

});


function renderProjectCards() {
    const projectsGridContainer = document.getElementById('projects-grid');
    if (!projectsGridContainer) return;

    projectsGridContainer.innerHTML = '';

    portfolioProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = `
            project-card
            bg-white p-6 rounded-xl shadow-lg border border-gray-100
            flex flex-col items-center justify-center text-center gap-4
            transition-all duration-300 ease-in-out
            hover:bg-black hover:text-white hover:transform hover:-translate-y-2 hover:scale-[1.02]
        `;

        projectCard.innerHTML = `
            <h3 class="text-2xl font-semibold mb-2">${project.title}</h3>
            <p class="text-gray-700 leading-relaxed flex-grow">${project.cardDescription}</p>
            <div class="btn-group flex flex-wrap justify-center gap-3 mt-auto">
                ${project.liveDemo && project.liveDemo !== '#' ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn bg-pink-500 text-white hover:bg-pink-600 px-4 py-2 rounded-lg transition-colors">Live Demo</a>` : ''}
                <a href="${project.githubRepo}" target="_blank" rel="noopener noreferrer" class="btn bg-gray-800 text-white hover:bg-black px-4 py-2 rounded-lg transition-colors">Github Repo</a>
                <button class="btn view-details-btn bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors" data-project-id="${project.id}">View Details</button>
            </div>
            ${project.carouselImages && project.carouselImages.length > 0 ? `
                <div class="flex items-center justify-center pt-8 pb-4 w-full">
                    <div class="carousel-container w-full max-w-sm aspect-video bg-white rounded-xl shadow-md border border-gray-100 relative" data-carousel-id="${project.id}-carousel" data-project-id="${project.id}">
                        <div class="carousel-slides h-full">
                            ${project.carouselImages.map((imgSrc, index) => `<img src="${imgSrc}" alt="${project.title} slide ${index + 1}" class="w-full h-full object-cover rounded-xl flex-shrink-0">`).join('')}
                        </div>
                        <button class="carousel-button left text-pink-500 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button class="carousel-button right text-blue-500 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                        <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                            ${project.carouselImages.map((_, index) => `<div class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}" data-carousel-id="${project.id}-carousel"></div>`).join('')}
                        </div>
                    </div>
                </div>
            ` : ''}
        `;
        projectsGridContainer.appendChild(projectCard);
    });

    document.querySelectorAll('.project-card .view-details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = e.target.dataset.projectId;
            const project = portfolioProjects.find(p => p.id === projectId);
            if (project) {
                showModal(project, 'details');
            }
        });
    });
}


function renderProjectTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer) return;

    timelineContainer.innerHTML = '';

    const sortedProjects = [...portfolioProjects].sort((a, b) => {
        const parseDate = (dateString) => {
            const parts = dateString.split(' - ')[0].split(' ');
            return new Date(`${parts[0]} 1, ${parts[1]}`);
        };
        const dateA = parseDate(a.duration);
        const dateB = parseDate(b.duration);
        return dateA - dateB;
    });

    sortedProjects.forEach(project => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'timeline-entry mb-8 relative';
        entryDiv.innerHTML = `
            <div class="timeline-marker absolute -left-5 top-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-bold shadow-md">
                <i class="${project.timelineIcon}"></i>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 ml-6">
                <h3 class="text-2xl font-semibold text-blue-600 mb-2">${project.title}</h3>
                <p class="text-gray-600 text-sm mb-3">${project.duration}</p>
                <p class="text-gray-700 mb-4 leading-relaxed">${project.detailedDescription}</p>
                <div class="btn-group flex gap-3 flex-wrap justify-end">
                    <button class="btn view-details-btn bg-pink-500 text-white hover:bg-pink-600 px-4 py-2 rounded-lg transition-colors"
                            data-project-id="${project.id}">View Details</button>
                    <a href="${project.githubRepo}" target="_blank" rel="noopener noreferrer" class="btn bg-gray-800 text-white hover:bg-black px-4 py-2 rounded-lg transition-colors">Github Repo</a>
                    ${project.liveDemo && project.liveDemo !== '#' ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">Live Demo</a>` : ''}
                </div>
            </div>
        `;
        timelineContainer.appendChild(entryDiv);
    });

    document.querySelectorAll('.timeline-entry .view-details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = e.target.dataset.projectId;
            const project = portfolioProjects.find(p => p.id === projectId);
            if (project) {
                showModal(project, 'details');
            }
        });
    });
}

const modal = document.getElementById('project-details-modal');
const closeBtn = document.querySelector('.close-modal-btn');

const modalTextContent = document.getElementById('modal-text-content');
const modalTitle = document.getElementById('modal-title');
const modalDuration = document.getElementById('modal-duration');
const modalDescription = document.getElementById('modal-description');
const modalGithubLink = document.getElementById('modal-github-link');
const modalLiveLink = document.getElementById('modal-live-link');

const modalCarouselContent = document.getElementById('modal-carousel-content');
const modalCarouselTitle = document.getElementById('modal-carousel-title');
const modalCarouselImage = document.getElementById('modal-carousel-image');
const modalCarouselPrev = document.getElementById('modal-carousel-prev');
const modalCarouselNext = document.getElementById('modal-carousel-next');

let currentModalProject = null;
let currentModalImageIndex = 0;

function showModal(project, mode = 'details', initialImageIndex = 0) {
    currentModalProject = project;
    currentModalImageIndex = initialImageIndex;

    modalTextContent.classList.add('hidden');
    modalCarouselContent.classList.add('hidden');

    if (mode === 'carousel' && project.carouselImages && project.carouselImages.length > 0) {
        modalCarouselContent.classList.remove('hidden');
        modalCarouselTitle.textContent = project.title;
        updateModalCarouselImage();

        modalCarouselPrev.onclick = () => {
            currentModalImageIndex = (currentModalImageIndex > 0) ? currentModalImageIndex - 1 : project.carouselImages.length - 1;
            updateModalCarouselImage();
        };
        modalCarouselNext.onclick = () => {
            currentModalImageIndex = (currentModalImageIndex < project.carouselImages.length - 1) ? currentModalImageIndex + 1 : 0;
            updateModalCarouselImage();
        };

    } else {
        modalTextContent.classList.remove('hidden');
        modalTitle.textContent = project.title;
        modalDuration.textContent = `Duration: ${project.duration}`;
        modalDescription.textContent = project.detailedDescription;
        modalGithubLink.href = project.githubRepo;

        if (project.liveDemo && project.liveDemo !== '#') {
            modalLiveLink.href = project.liveDemo;
            modalLiveLink.classList.remove('hidden');
        } else {
            modalLiveLink.classList.add('hidden');
        }
    }

    modal.classList.remove('hidden');
}

function updateModalCarouselImage() {
    if (currentModalProject && currentModalProject.carouselImages && currentModalProject.carouselImages.length > 0) {
        modalCarouselImage.src = currentModalProject.carouselImages[currentModalImageIndex];
        modalCarouselImage.alt = `${currentModalProject.title} image ${currentModalImageIndex + 1}`;
    }
}

function hideModal() {
    modal.classList.add('hidden');
    currentModalProject = null;
    currentModalImageIndex = 0;
    modalCarouselPrev.onclick = null;
    modalCarouselNext.onclick = null;
}

closeBtn.addEventListener('click', hideModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        hideModal();
    }
});


function initializeCarousels() {
    const allCarouselContainers = document.querySelectorAll('.carousel-container');

    allCarouselContainers.forEach(carouselContainer => {
        const slides = carouselContainer.querySelector('.carousel-slides');
        const images = carouselContainer.querySelectorAll('.carousel-slides img');
        const dots = carouselContainer.querySelectorAll('.carousel-dot');
        const prevButton = carouselContainer.querySelector('.carousel-button.left');
        const nextButton = carouselContainer.querySelector('.carousel-button.right');

        if (images.length === 0) {
            carouselContainer.style.display = 'none';
            return;
        }

        let currentIndex = 0;
        const totalSlides = images.length;
        let slideWidth = 0;
        const projectId = carouselContainer.dataset.projectId;

        function setSlideWidth() {
            if (images.length > 0) {
                slideWidth = images[0].clientWidth;
            }
        }

        function updateCarousel() {
            slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
            updateDots();
        }

        function updateDots() {
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
                updateCarousel();
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
                updateCarousel();
            });
        }

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = parseInt(e.target.dataset.index);
                updateCarousel();
            });
        });

        carouselContainer.addEventListener('click', () => {
            const project = portfolioProjects.find(p => p.id === projectId);
            if (project && project.carouselImages.length > 0) {
                showModal(project, 'carousel', currentIndex);
            }
        });

        window.addEventListener('resize', () => {
            setSlideWidth();
            updateCarousel();
        });

        setSlideWidth();
        updateCarousel();
    });
}