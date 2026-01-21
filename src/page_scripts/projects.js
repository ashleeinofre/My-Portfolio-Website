document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  const tabletQuery = window.matchMedia("(max-width: 890px)");

  let observer = null;

  function setupHover(card, video) {
    card.onmouseenter = () => {
      video.currentTime = 0;
      video.play().catch(() => { });
    };

    card.onmouseleave = () => {
      video.pause();
    };
  }

  function clearHover(card) {
    card.onmouseenter = null;
    card.onmouseleave = null;
  }

  function setupObserver() {
    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = entry.target.querySelector(".project-video");
          if (!video) return;

          if (entry.isIntersecting) {
            video.currentTime = 0;
            video.play().catch(() => { });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    cards.forEach(card => observer.observe(card));
  }

  function destroyObserver() {
    if (!observer) return;
    observer.disconnect();
    observer = null;
  }

  function applyBehavior() {
    if (tabletQuery.matches) {
      cards.forEach(card => {
        const video = card.querySelector(".project-video");
        
        if (!video) return;
        clearHover(card);
      });

      if (!observer) setupObserver();
    } else {
      destroyObserver();
      cards.forEach(card => {
        const video = card.querySelector(".project-video");

        if (!video) return;
        setupHover(card, video);
      });
    }
  }
  applyBehavior();
  tabletQuery.addEventListener("change", applyBehavior);
});
