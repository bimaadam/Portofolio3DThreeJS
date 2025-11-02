
export const blogPosts = [
    {
        id: 'how-i-built-my-3d-portfolio-by-bima-adam-nugraha',
        title: 'How I Built My 3D Portfolio with Three.js and React',
        date: 'November 02, 2025',
        summary: 'A deep dive into the technologies and challenges behind creating this interactive 3D website from scratch.',
        seoTitle: 'Building a 3D Portfolio | My Tech Stack By Bima Adam Nugraha',
        seoDescription: 'Learn how I used Three.js, React, and Tailwind CSS to build a fast and beautiful 3D portfolio website.',
        image: '/images/blog/image.png',
        content: `
            <div class="flex flex-col gap-6 text-white">
                <p>Building a 3D portfolio is a fantastic way to showcase skills in modern web development. For this project, I decided to combine the power of <strong>React</strong> with the versatility of <strong>Three.js</strong> to create an immersive experience.</p>
                <img src="/images/blog/image.png" alt="A descriptive alt text for your image" class="w-full h-auto rounded-lg shadow-md my-4" />
                <h3 class="text-2xl font-semibold">The Core Stack</h3>
                <ul class="list-disc ml-6 space-y-2">
                    <li><strong>Vite:</strong> For a blazing fast development server and optimized builds.</li>
                    <li><strong>React:</strong> To build a component-based and reactive user interface.</li>
                    <li><strong>React Three Fiber & Drei:</strong> These libraries act as a bridge, allowing me to write Three.js scenes declaratively within React. It simplifies everything from loading models to setting up cameras.</li>
                    <li><strong>Tailwind CSS:</strong> For rapidly styling the UI components without leaving the HTML.</li>
                    <li><strong>GLB Models:</strong> The 3D assets like the island and the fox were sourced and optimized as .glb files for fast loading on the web.</li>
                </ul>
                <h3 class="text-2xl font-semibold">Challenges</h3>
                <p>One of the main challenges was performance optimization. 3D scenes can be heavy, so it was crucial to keep the models low-poly, use efficient texture mapping, and leverage Drei's performance-conscious helpers.</p>
                <p>Another challenge was ensuring a smooth user experience on both desktop and mobile. This involved implementing responsive controls and adjusting the scene layout based on the screen size.</p>
                <p>In future posts, I'll dive deeper into specific topics like camera animations, lighting setups, and performance tuning. Stay tuned!</p>
            </div>
        `
    },
    {
        id: 'wisuda-ke-xvi-politeknik-triguna-tasikmalaya-ai-sri-mulyani',
        title: 'Wisuda ke-XVI Politeknik Triguna Tasikmalaya: Kisah Ai Sri Mulyani, Lulusan Terbaik Komputerisasi Akuntansi',
        date: 'November 02, 2025',
        summary: 'Cerita inspiratif tentang perjalanan akademik dan karir Ai Sri Mulyani, lulusan terbaik program Komputerisasi Akuntansi di Politeknik Triguna Tasikmalaya.',
        seoTitle: 'Wisuda ke-XVI Politeknik Triguna Tasikmalaya | Kisah Ai Sri Mulyani',
        seoDescription: 'Pelajari kisah inspiratif Ai Sri Mulyani, lulusan terbaik Komputerisasi Akuntansi dengan IPK 3,85, dan perjalanannya menuju kesuksesan.',
        image: '/images/blog/ai-sri.png',
        content: `
            <div class="flex flex-col gap-6 text-white">
                <p>Wisuda ke-XVI Politeknik Triguna Tasikmalaya menjadi terasa lengkap dengan hadirnya Ai Sri Mulyani, sebagai Lulusan Terbaik Program Komputerisasi Akuntansi.</p>
                <img src="/images/blog/ai-sri.png" alt="A descriptive alt text for your image" class="w-full h-auto rounded-lg shadow-md my-4" />
                <p>Putri asal Salawu ini menutup studi dengan IPK 3,85 (Dengan Pujian)—buah dari disiplin belajar yang tenang, lingkungan kampus yang suportif, dan kemauan untuk terus mencoba meski situasi tidak selalu ideal.</p>
                <p>Pilihan studi bukan kebetulan. Komputerisasi Akuntansi mempertemukan ketelitian angka dengan logika sistem; dua hal yang sejak awal menarik minat Ai.</p>
                <p>Satu momen kampus yang ia kenang adalah atmosfer "saling dorong" antar teman dan dosen: ruang belajar yang tak membiarkan mahasiswanya nyaman berlama-lama dalam zona aman. "Lingkungan kampus dan magang mendukung banget. Dikasih kesempatan dan arahan yang baik, hasilnya juga alhamdulillah baik," tuturnya.</p>
                <p>Titik kulminasi capaian akademiknya tercermin pada Tugas Akhir berjudul "Sistem Monitoring Kolektibilitas Kredit di UPK DAPM Kecamatan Salawu."</p>
                <p>Ai membangun aplikasi untuk mengefisienkan penagihan dan memantau nasabah agar penunggak tidak menumpuk serta perputaran dana di lembaga berjalan lancar.</p>
                <p>Ia menggarapnya dengan Microsoft C# (.NET Framework) dan Microsoft Access sebagai basis data—pilihan yang realistis untuk kebutuhan operasional harian di unit layanan kredit tingkat kecamatan.</p>
                <p>Dari sisi manfaat, sistem yang ia rancang menutup celah yang sering terjadi pada pengelolaan kredit skala kecil: data yang tercecer, pemantauan yang reaktif, dan tindak lanjut yang terlambat.</p>
                <p>Dengan dashboard sederhana, petugas bisa melihat status kolektibilitas tiap nasabah, membuat prioritas kunjungan, serta mendokumentasikan tindak lanjut. Dampak yang diincar: waktu penagihan lebih singkat, akurasi catatan meningkat, dan keputusan lebih cepat.</p>
                <p>Perjalanannya tidak tanpa hambatan. Di tengah penyusunan TA, dosen pembimbing sempat sakit sehingga bimbingan tidak bisa berjalan rutin. Ai memilih memusatkan bimbingan pada satu pembimbing agar pekerjaan tetap bergerak.</p>
                <p>"Dengan begitu, waktu pengerjaan TA tetap relatif singkat," ujarnya. Sikap adaptif ini—memetakan kendala lalu menyederhanakan jalur—menjadi pola pikir yang terus ia bawa.</p>
                <p>Sesudah sidang, jalan Ai berlanjut cepat. Sekitar dua minggu pasca-ujian, ia diterima bekerja sebagai admin di sebuah perusahaan kayu. Pilihan ini bukan "menyimpang" dari akuntansi, melainkan jembatan mengasah ketertiban data, ketelitian dokumen, dan disiplin proses—komponen penting sebelum melangkah ke tanggung jawab yang lebih besar.</p>
                <p>Di sela kesibukan kerja, Ai menatap rencana melanjutkan S1 ketika waktu dan rezeki memungkinkan: belajar sambil bekerja sebagai pola naik kelas yang realistis.</p>
                <p>Di balik rapihnya angka, Ai menyimpan modal komunikasi yang tumbuh dari kebiasaan tampil—membaca puisi, berpidato—sejak sekolah. Keterampilan berbicara dan menyusun pikiran membuat presentasi TA, koordinasi tim, hingga interaksi kerja terasa lebih mulus. "Pokoknya ketika menghadapi sesuatu jangan menyerah," ucapnya.</p>
                <p>"Ada satu kata yang selalu saya pegang: Apa pun yang terjadi, itulah yang terbaik menurut takdir," lanjutnya.</p>
                <p>Pesan untuk adik tingkat terdengar sederhana, tapi tajam: jaga konsistensi belajar, pelajari ulang materi setelah kelas, berani membangun solusi nyata (bukan sekadar laporan), dan rawat komunikasi sebagai pembeda.</p>
                <p>Di situ, Ai Sri Mulyani menunjukkan bahwa keunggulan vokasi lahir dari gabungan keterampilan teknis yang relevan, sikap kerja yang tangguh, dan kemampuan menjelaskan gagasan dengan terang.</p>
            </div>
        `
    },
    // You can add more blog posts here in the future
];
