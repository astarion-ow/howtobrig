const sections = document.querySelectorAll("h2, h3, h4");
const tocLinks = document.querySelectorAll(".toc a");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tocLinks.forEach(link => {
                    link.classList.remove("active");
                    if(link.getAttribute("href").substring(1) === entry.target.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    },
    {
        rootMargin:"-40% 0px -55% 0px",
        threshold: 0
    }
);

sections.forEach(section => observer.observe(section));