document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const xPosition = 50 + (x - 0.5) * 40;
        const yPosition = 50 + (y - 0.5) * 40;

        document.body.style.backgroundPosition = `${xPosition}% ${yPosition}%`;
    });

    const contentData = {
        about: `
        <p>Hi, my name is Ali and I am a second year software engineering student at UNSW. I enjoy learning new technologies and creating cool programs and scripts.</p>
        `,
        projects: `
        <p class="project-title">Here are some of my projects:</p>
        <div class="all-projects">
            <div class="project-image">
                <a href="https://github.com/Eternal-Monke/Poly-Lang-Link" target="_blank">
                    <img src="https://images.unsplash.com/photo-1530358449046-0aec8f1c0414?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1">
                    <p>https://github.com/Eternal-Monke/Poly-Lang-Link</p>
                </a>
            </div>
            <div class="project-image">
                <a href="https://github.com/Eternal-Monke/PyNIDS" target="_blank">
                    <img src="https://plus.unsplash.com/premium_photo-1682145723071-33e2207f4eb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 2">
                    <p>https://github.com/Eternal-Monke/PyNIDS</p>
                </a>
            </div>
            <div class="project-image">
                <a href="https://github.com/Eternal-Monke/PulseLAN" target="_blank">
                    <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 3">
                    <p>https://github.com/Eternal-Monke/PulseLAN</p>
                </a>
            </div>
        </div>
        <br>
        `,
        contact: `
        <p> Linked-In: <a href='https://www.linkedin.com/in/ali-allk/' target='_blank'>https://www.linkedin.com/in/ali-allk/</a></p>
        <p> Github: <a href='https://github.com/Eternal-Monke' target='_blank'>https://github.com/Eternal-Monke</a></p>
        `,
    };

    document.querySelectorAll('.top-bar a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            if(contentData[target]) {
                const contentArea = document.getElementById('content-area');
                contentArea.innerHTML = contentData[target];

                if (target === 'projects') {
                    contentArea.classList.add('projects-change-width');
                } else {
                    contentArea.classList.remove('projects-change-width');
                }

                document.getElementById('content-title').innerText = target.charAt(0).toUpperCase() + target.slice(1);
            }
        });
    });

    const backgrounds = [
        'images/girl_with_car.png',
        'images/clouds.png',
        'images/girl_standing.jpg',
        'images/powerlines.png',
        'images/car_hills.jpg'
    ]

    let currentImageIndex = 0;

    document.querySelector('.bar-text a[data-target="background"]').addEventListener('click', function(e) {
        e.preventDefault();

        currentImageIndex = (currentImageIndex + 1) % backgrounds.length;

        document.body.style.backgroundImage = `url('${backgrounds[currentImageIndex]}')`;
    });

    const cursorOutline = document.querySelector('.cursor-outline');

    setTimeout(() => {
        cursorOutline.style.opacity = '1';
    }, 1000);

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX - cursorOutline.offsetWidth / 2;
        const posY = e.clientY - cursorOutline.offsetHeight / 2;
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
    });
});