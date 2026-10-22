(function () {
  'use strict';

  var ARTICLES = [
    { 
      id: 1, 
      cat: 'nutrisi', 
      title: 'Berapa Protein yang Sebenarnya Dibutuhkan Atlet?',
      author: 'Content Writer & Researcher (Tim Sport Science UNJ)', 
      date: '12 Okt 2026', 
      read: '6 menit baca',
      img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=70',
      excerpt: 'Angka 1,4–2,0 g/kg berat badan sering dikutip dalam berbagai literatur olahraga. Artikel ini mengupas landasan ilmiah di balik rekomendasi tersebut...',
      fullText: `
        <span class="text-xs font-semibold text-[#14532d] uppercase tracking-wider">Nutrisi Olahraga</span>
        <h2 class="font-serif text-3xl font-bold text-[#0F172A] mt-1">Berapa Protein yang Sebenarnya Dibutuhkan Atlet?</h2>
        <div class="flex items-center gap-4 text-xs text-[#0F172A]/60 border-b border-[#E4E1D8] pb-4">
          <span>Oleh Tim Sport Science UNJ</span>
          <span>•</span>
          <span>12 Oktober 2026</span>
          <span>•</span>
          <span>680 Kata</span>
        </div>
        <div class="space-y-4 text-base text-[#0F172A]/80 leading-relaxed font-sans pt-2">
          <p>Dalam dunia kebugaran dan prestasi olahraga, protein sering kali dianggap sebagai nutrisi paling krusial. Konsensus umum dari International Society of Sports Nutrition (ISSN) merekomendasikan asupan protein harian berkisar antara 1,4 hingga 2,0 gram per kilogram berat badan bagi individu yang aktif berlatih secara rutin. Namun, angka ini kerap disalahartikan atau digeneralisasi secara berlebihan oleh masyarakat awam yang baru memulai program olahraga.</p>
          
          <h3 class="font-serif text-xl font-semibold text-[#0F172A] pt-3">Mengapa Kebutuhan Atlet Berbeda dari Orang Sedenter?</h3>
          <p>Individu yang tidak aktif secara fisik (sedenter) umumnya hanya membutuhkan sekitar 0,8 gram protein per kilogram berat badan sekadar untuk menjaga keseimbangan nitrogen dasar dan memperbaiki jaringan sel normal. Sebaliknya, atlet dan penggiat olahraga mengalami tekanan mekanik berulang pada serat otot selama latihan beban maupun kardiorespirasi. Proses ini memicu kerusakan mikro pada struktur otot (micro-tears), yang kemudian merangsang sintesis protein otot (Muscle Protein Synthesis - MPS).</p>
          <p>Tanpa suplai asam amino yang memadai dari makanan, tubuh tidak akan mampu memperbaiki jaringan otot secara optimal. Akibatnya, alih-alih mengalami peningkatan massa otot dan kekuatan (hipertrofi), atlet justru akan masuk ke dalam fase katabolik di mana jaringan otot terurai.</p>

          <h3 class="font-serif text-xl font-semibold text-[#0F172A] pt-3">Waktu dan Distribusi Konsumsi Protein (Protein Timing)</h3>
          <p>Selain jumlah total harian, penelitian modern menunjukkan bahwa distribusi asupan protein sepanjang hari memegang peran penting. Mengonsumsi 20 hingga 40 gram protein berkualitas tinggi setiap 3 hingga 4 jam terbukti jauh lebih efektif dalam mempertahankan tingkat sintesis protein otot yang tinggi dibandingkan mengonsumsi seluruh kebutuhan harian dalam satu atau dua kali makan besar.</p>

          <h3 class="font-serif text-xl font-semibold text-[#0F172A] pt-3">Kesimpulan</h3>
          <p>Bagi pemula maupun atlet profesional, kunci utama terletak pada konsistensi mencukupi kebutuhan protein harian dari sumber pangan utuh (seperti dada ayam, ikan, telur, tahu, tempe, dan kacang-kacangan) serta memadukannya dengan latihan yang terstruktur dan waktu istirahat yang cukup.</p>

          <div class="mt-8 p-4 bg-[#FAF9F6] border border-[#E4E1D8] rounded-lg">
            <h4 class="font-serif font-bold text-sm text-[#0F172A] mb-2">Daftar Pustaka Artikel Ini:</h4>
            <ul class="list-disc list-inside text-xs text-[#0F172A]/70 space-y-1">
              <li>Campbell, B., dkk. (2007). International Society of Sports Nutrition position stand: protein and exercise. <em>Journal of the International Society of Sports Nutrition</em>, 4(1), 8.</li>
              <li>Phillips, S. M., & Van Loon, L. J. (2011). Dietary protein for athletes: from requirements to metabolic advantage. <em>Journal of Sports Sciences</em>, 29(sup1), S29-S38.</li>
            </ul>
          </div>
        </div>
      `
    },
    { 
      id: 2, 
      cat: 'latihan', 
      title: 'Latihan Aerobik dan VO₂ Max: Panduan Dosis untuk Pemula',
      author: 'Lead Researcher (Tim Sport Science UNJ)', 
      date: '8 Okt 2026', 
      read: '7 menit baca',
      img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=70',
      excerpt: 'VO₂ max adalah indikator utama kebugaran kardiorespirasi. Bagaimana intensitas, durasi, dan frekuensi latihan kardio memengaruhinya secara biologis?',
      fullText: `
        <span class="text-xs font-semibold text-[#14532d] uppercase tracking-wider">Fisiologi & Latihan</span>
        <h2 class="font-serif text-3xl font-bold text-[#0F172A] mt-1">Latihan Aerobik dan VO₂ Max: Panduan Dosis untuk Pemula</h2>
        <div class="flex items-center gap-4 text-xs text-[#0F172A]/60 border-b border-[#E4E1D8] pb-4">
          <span>Oleh Tim Sport Science UNJ</span>
          <span>•</span>
          <span>8 Oktober 2026</span>
          <span>•</span>
          <span>720 Kata</span>
        </div>
        <div class="space-y-4 text-base text-[#0F172A]/80 leading-relaxed font-sans pt-2">
          <p>Kebugaran kardiorespirasi adalah salah satu komponen terpenting dalam kesehatan secara keseluruhan dan umur panjang. Ukuran baku emas (gold standard) untuk menilai kapasitas kardiorespirasi ini adalah VO₂ max, yaitu volume maksimum oksigen yang dapat digunakan oleh tubuh seseorang selama latihan berintensitas tinggi.</p>
          
          <h3 class="font-serif text-xl font-semibold text-[#0F172A] pt-3">Adaptasi Fisiologis Jantung dan Paru</h3>
          <p>Ketika seseorang memulai program latihan aerobik secara teratur (seperti lari ringan, bersepeda, atau berenang), tubuh merespons dengan melakukan serangkaian adaptasi struktural. Jantung mengalami hipertrofi ekséntrik, yang berarti bilik jantung membesar dan mampu memompa lebih banyak darah (stroke volume) dalam setiap denyutnya. Akibatnya, denyut jantung istirahat (resting heart rate) seseorang yang terlatih akan cenderung lebih rendah.</p>
          <p>Di tingkat seluler, jumlah dan ukuran mitokondria di dalam serat otot meningkat, meningkatkan kapasitas oksidatif sel untuk mengubah glukosa dan asam lemak menjadi energi secara efisien.</p>

          <h3 class="font-serif text-xl font-semibold text-[#0F172A] pt-3">Prinsip Dosis Latihan untuk Pemula</h3>
          <p>Bagi masyarakat yang baru memulai, American College of Sports Medicine (ACSM) menyarankan prinsip FITT:
            <br>• <strong>Frequency:</strong> 3 hingga 5 hari per minggu.
            <br>• <strong>Intensity:</strong> Mulai dari intensitas moderat (60-70% dari denyut jantung maksimum).
            <br>• <strong>Time:</strong> 20 hingga 30 menit per sesi.
            <br>• <strong>Type:</strong> Aktivitas aerobik ritmis yang melibatkan kelompok otot besar.
          </p>

          <h3 class="font-serif text-xl font-semibold text-[#0F172A] pt-3">Kesimpulan</h3>
          <p>Peningkatan VO₂ max tidak memerlukan latihan ekstrem sejak hari pertama. Konsistensi, peningkatan beban secara bertahap (progressive overload), dan kesabaran adalah kunci utama bagi pemula untuk membangun fondasi kardiorespirasi yang kokoh.</p>

          <div class="mt-8 p-4 bg-[#FAF9F6] border border-[#E4E1D8] rounded-lg">
            <h4 class="font-serif font-bold text-sm text-[#0F172A] mb-2">Daftar Pustaka Artikel Ini:</h4>
            <ul class="list-disc list-inside text-xs text-[#0F172A]/70 space-y-1">
              <li>American College of Sports Medicine (ACSM). (2018). ACSM's Guidelines for Exercise Testing and Prescription. 10th Edition.</li>
              <li>Uth, M., dkk. (2004). Estimation of VO2max from the ratio between HRmax and HRrest. <em>European Journal of Applied Physiology</em>, 91(1), 111-115.</li>
            </ul>
          </div>
        </div>
      `
    },
    { 
      id: 3, 
      cat: 'recovery', 
      title: 'Tidur dan Pemulihan: Fondasi yang Sering Terlupakan',
      author: 'Recovery Specialist (Tim Sport Science UNJ)', 
      date: '3 Okt 2026', 
      read: '6 menit baca',
      img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=70',
      excerpt: 'Pemulihan bukan sekadar istirahat. Konsensus ilmiah menempatkan tidur berkualitas, nutrisi makro, dan manajemen beban sebagai satu kesatuan mutlak.',
      fullText: `
        <span class="text-xs font-semibold text-[#14532d] uppercase tracking-wider">Recovery & Kesehatan</span>
        <h2 class="font-serif text-3xl font-bold text-[#0F172A] mt-1">Tidur dan Pemulihan: Fondasi yang Sering Terlupakan</h2>
        <div class="flex items-center gap-4 text-xs text-[#0F172A]/60 border-b border-[#E4E1D8] pb-4">
          <span>Oleh Tim Sport Science UNJ</span>
          <span>•</span>
          <span>3 Oktober 2026</span>
          <span>•</span>
          <span>650 Kata</span>
        </div>
        <div class="space-y-4 text-base text-[#0F172A]/80 leading-relaxed font-sans pt-2">
          <p>Dalam kultur olahraga modern, obsesi terhadap porsi latihan yang keras sering kali mengalahkan pentingnya waktu istirahat. Padahal, adaptasi biologis yang membuat seseorang menjadi lebih kuat, cepat, atau bugar tidak terjadi di tempat gym atau saat berlari, melainkan pada saat tubuh berada dalam fase pemulihan (recovery), khususnya ketika tidur nyenyak.</p>
          
          <h3 class="font-serif text-xl font-semibold text-[#0F172A] pt-3">Peran Biologis Tidur dalam Perbaikan Otot</h3>
          <p>Selama fase tidur gelombang lambat (slow-wave sleep), kelenjar pituitari melepaskan Human Growth Hormone (HGH) dalam jumlah puncaknya. Hormon ini sangat esensial untuk perbaikan jaringan otot yang rusak, sintesis protein, serta metabolisme lemak. Kurang tidur kronis terbukti menurunkan kadar testosteron, meningkatkan hormon stres kortisol, serta memperlambat waktu reaksi motorik.</p>

          <h3 class="font-serif text-xl font-semibold text-[#0F172A] pt-3">Strategi Peningkatan Kualitas Tidur</h3>
          <p>Bagi atlet dan penggiat olahraga, higienitas tidur mutlak diperhatikan:
            <br>1. Menjaga waktu tidur dan bangun yang konsisten setiap hari.
            <br>2. Menghindari paparan layar gawai (blue light) minimal 60 menit sebelum tidur.
            <br>3. Menjaga suhu kamar tetap sejuk (sekitar 18–20°C).
          </p>

          <h3 class="font-serif text-xl font-semibold text-[#0F172A] pt-3">Kesimpulan</h3>
          <p>Tidur bukanlah bentuk kemalasan atau waktu yang terbuang, melainkan instrumen latihan pasif yang sama pentingnya dengan sesi latihan fisik itu sendiri.</p>

          <div class="mt-8 p-4 bg-[#FAF9F6] border border-[#E4E1D8] rounded-lg">
            <h4 class="font-serif font-bold text-sm text-[#0F172A] mb-2">Daftar Pustaka Artikel Ini:</h4>
            <ul class="list-disc list-inside text-xs text-[#0F172A]/70 space-y-1">
              <li>Halson, S. L. (2008). Sleep in elite athletes and nutritional interventions to enhance sleep. <em>Sports Medicine</em>, 38(6), 443-459.</li>
              <li>Mah, C. D., dkk. (2011). The effects of sleep extension on the athletic performance of collegiate basketball players. <em>Sleep</em>, 34(7), 943-950.</li>
            </ul>
          </div>
        </div>
      `
    }
  ];

  /* ===== Animasi Muncul dari Bawah pada Setiap Section ===== */
  var scrollSections = document.querySelectorAll('.section-scroll');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    scrollSections.forEach(function (sec) {
      observer.observe(sec);
    });
  } else {
    scrollSections.forEach(function (sec) {
      sec.classList.add('visible');
    });
  }

  /* ===== Indikator Warna Active pada Navbar saat Scroll & Klik ===== */
  var allSections = document.querySelectorAll('section[id]');
  var allNavLinks = document.querySelectorAll('header nav a.nav-link, #mobileMenu a.nav-link');

  function setActiveNavLink() {
    var scrollPosition = window.pageYOffset + 120;

    allSections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        allNavLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNavLink);
  setActiveNavLink();

  allNavLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      allNavLinks.forEach(function (l) { l.classList.remove('active'); });
      link.classList.add('active');

      var targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        var targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.classList.remove('visible', 'animate-rise');
          void targetSection.offsetWidth;
          targetSection.classList.add('animate-rise');
        }
      }
    });
  });

  // Mobile Menu Toggle
  var mobileBtn = document.getElementById('mobileMenuBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Widget VO2 Max
  var inputAge = document.getElementById('inputAge');
  var inputHR = document.getElementById('inputHR');
  var valAge = document.getElementById('valAge');
  var valHR = document.getElementById('valHR');
  var resHRmax = document.getElementById('resHRmax');
  var resVO2 = document.getElementById('resVO2');
  var resCat = document.getElementById('resCat');

  function updateVO2() {
    if (!inputAge || !inputHR) return;
    var age = parseInt(inputAge.value);
    var hrRest = parseInt(inputHR.value);
    valAge.textContent = age + ' tahun';
    valHR.textContent = hrRest + ' bpm';

    var hrmax = 208 - (0.7 * age);
    var vo2 = 15.3 * (hrmax / hrRest);

    resHRmax.textContent = Math.round(hrmax);
    resVO2.textContent = vo2.toFixed(1);

    var cat = 'Kurang';
    if (vo2 >= 50) cat = 'Sangat Baik / Atletik';
    else if (vo2 >= 43) cat = 'Baik';
    else if (vo2 >= 35) cat = 'Cukup';
    resCat.textContent = cat;
  }

  if (inputAge && inputHR) {
    inputAge.addEventListener('input', updateVO2);
    inputHR.addEventListener('input', updateVO2);
    updateVO2();
  }

  // Filter & Search
  var searchInput = document.getElementById('searchInput');
  var filterButtons = document.querySelectorAll('#filterButtons button');
  var currentCategory = 'all';

  function filterAndSearchArticles() {
    var query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    var grid = document.getElementById('articlesGrid');
    if (!grid) return;

    var cards = grid.querySelectorAll('.article-card');
    cards.forEach(function (card) {
      var cat = card.getAttribute('data-category');
      var titleText = card.querySelector('h3').textContent.toLowerCase();
      var descText = card.querySelector('p').textContent.toLowerCase();

      var matchCat = (currentCategory === 'all' || cat === currentCategory);
      var matchQuery = (titleText.indexOf(query) !== -1 || descText.indexOf(query) !== -1);

      if (matchCat && matchQuery) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterAndSearchArticles);
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) {
        b.className = 'px-3.5 py-1.5 rounded text-xs font-semibold bg-white border border-[#E4E1D8] text-[#0F172A] hover:border-[#14532d] transition-all';
      });
      btn.className = 'px-3.5 py-1.5 rounded text-xs font-semibold bg-[#14532d] text-white transition-all';
      currentCategory = btn.getAttribute('data-filter');
      filterAndSearchArticles();
    });
  });

  // Modal Open / Close dengan Animasi Fade & Pull Up/Down
  window.openModal = function (id) {
    var modal = document.getElementById('articleModal');
    var contentDiv = document.getElementById('modalContent');
    var article = ARTICLES.find(function (a) { return a.id === id; });

    if (article && contentDiv && modal) {
      contentDiv.innerHTML = article.fullText;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModal = function () {
    var modal = document.getElementById('articleModal');
    if (modal) {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  };

  var modalEl = document.getElementById('articleModal');
  if (modalEl) {
    modalEl.addEventListener('click', function (e) {
      if (e.target === modalEl) {
        window.closeModal();
      }
    });
  }

})();