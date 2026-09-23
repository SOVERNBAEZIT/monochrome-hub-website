document.addEventListener('DOMContentLoaded', () => {
    // LOGIKA PINDAH TAB
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = button.getAttribute('data-tab');

            if (!targetTab) return;

            // Sembunyikan semua tab
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Tampilkan tab yang dipilih
            const activeTab = document.getElementById(targetTab);
            if (activeTab) {
                activeTab.classList.add('active');
            }

            // Ubah tautan aktif di navbar
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-tab') === targetTab) {
                    link.classList.add('active');
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // ANIMASI GLOW KARTU ABOUT
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('glow-pulse');
            setTimeout(() => {
                card.classList.remove('glow-pulse');
            }, 500);
        });
    });
});

// FUNGSI UNTUK BUKA LINK WHATSAPP SESUAI NOMOR KONTAK EKSPLISIT
function openWA(phone, message) {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}