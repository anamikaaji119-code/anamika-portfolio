  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu
  var btn = document.getElementById('menuBtn'), menu = document.getElementById('menu');
  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
  });

  // Highlight current section in nav
  var links = document.querySelectorAll('nav a');
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id); });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('section[id]').forEach(function (s) { obs.observe(s); });

  // Certificates
  var certs = {
    raise: {
      title: '1st prize, RAISE 26',
      meta: 'Certificate of Appreciation · Rajagiri College of Social Sciences, Kalamassery',
      img: "images/raise.jpg",
      alt: 'RAISE 26 certificate of appreciation for securing the 1st prize',
      text: 'RAISE 26 was organised by the SPAC Learning & Teaching Pillar in association with the Department of Computer Science and IQAC. I secured the 1st prize in the exhibition, and the certificate of appreciation was signed by the Principal, Prof. Fr. Saju M D, along with the SPAC head and the RAISE 26 co-ordinator.'
    },
    foundations: {
      title: 'Foundations of Data Science, AI & Machine Learning Training Programme',
      meta: 'Grant Thornton Bharat · Completed 24 February 2026 · Certificate no. GT/RGC/2631',
      img: "images/foundations.jpg",
      alt: 'Grant Thornton Bharat certificate of completion for Foundations of Data Science, AI and Machine Learning',
      text: 'A training programme by Grant Thornton Bharat, delivered at Rajagiri College of Social Sciences. It covered the foundations of data science, artificial intelligence and machine learning. The certificate is signed by Vishesh C Chandiok, CEO of Grant Thornton Bharat, and Fr. Dr. Saju M.D., Principal of the college.'
    },
    endtoend: {
      title: 'End-to-End Machine Learning: From Data to Deployment',
      meta: 'Grant Thornton Bharat · 40 hours · Completed 28 September 2026 · Certificate no. GT/RCSS/0926',
      img: "images/endtoend.jpg",
      alt: 'Grant Thornton Bharat certificate of completion for End-to-End Machine Learning, Star Performer',
      text: 'A 40-hour programme by Grant Thornton Bharat that follows a machine learning project from data through to deployment. I completed it as a Star Performer. The certificate is signed by Vishesh C Chandiok, CEO of Grant Thornton Bharat, and Fr. Dr. Saju M.D., Principal of the college.'
    }
  };
  var dlg = document.getElementById('certDialog');
  document.querySelectorAll('[data-cert]').forEach(function (el) {
    el.addEventListener('click', function () {
      var c = certs[el.dataset.cert];
      document.getElementById('certTitle').textContent = c.title;
      document.getElementById('certMeta').textContent = c.meta;
      var img = document.getElementById('certImg'); img.src = c.img; img.alt = c.alt;
      document.getElementById('certText').textContent = c.text;
      dlg.showModal();
    });
  });
  document.getElementById('certClose').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  // Theme toggle
  document.getElementById('theme').addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.getAttribute('data-theme') === 'dark' ||
      (!root.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
    root.setAttribute('data-theme', dark ? 'light' : 'dark');
  });
