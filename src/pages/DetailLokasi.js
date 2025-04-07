import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import lokasiList from '../data/lokasiList';
import '../styles/DetailLokasi.css';

import update1 from '../assets/update1.png';
import update2 from '../assets/update2.png';

export default function DetailLokasi() {
    const { nama } = useParams();
    const navigate = useNavigate();

    const decodedNama = decodeURIComponent(nama);
    const lokasi = lokasiList.find((item) => item.nama === decodedNama);

    if (!lokasi) {
        return (
            <div className="detail-container">
                <button onClick={() => navigate(-1)} className="back-button">
                    ← Kembali
                </button>
                <p>Data lokasi tidak ditemukan.</p>
            </div>
        );
    }

    // Fungsi untuk navigasi ke halaman FormDonasi dengan nama lokasi
    const handleDonasi = () => {
        const encodedNama = encodeURIComponent(lokasi.nama);
        navigate(`/formdonasi/${encodedNama}`);
    };

    return (
        <div>
            {/* Sticky Header */}
            <div className="sticky-header">
                <div className="header-content" onClick={() => navigate(-1)}>
                    <span className="back-arrow">←</span>
                    <span className="header-title">Detail Lokasi {lokasi.nama}</span>
                </div>
            </div>

            {/* Gambar Fullwidth */}
            <div className="fullwidth-image-wrapper">
                <img src={lokasi.img} alt={lokasi.nama} className="detail-img" />
            </div>

            {/* Konten Detail */}
            <div className="detail-container">
                <button className="donasi-btn" onClick={handleDonasi}>
                    Donasi Sekarang
                </button>

                <h2 className="section-title">Deskripsi Lokasi & Kebutuhan Penghijauan</h2>
                <div className="info-grid">
                    <div className="info-box">
                        <img src="/icons/dunia.png" alt="Alasan" className="icon" />
                        <h4>Alasan Penghijauan</h4>
                        <p>{lokasi.alasan || 'Meningkatkan kualitas udara serta menyediakan ruang terbuka hijau.'}</p>
                    </div>
                    <div className="info-box">
                        <img src="/icons/tree.png" alt="Jenis Pohon" className="icon" />
                        <h4>Jenis Pohon</h4>
                        <p>{lokasi.jenisPohon || 'Trembesi, mangga, dan tanaman peneduh lainnya.'}</p>
                    </div>
                    <div className="info-box">
                        <img src="/icons/target.png" alt="Target" className="icon" />
                        <h4>Target Penghijauan</h4>
                        <p>{lokasi.target || 'Target penghijauan sekitar 10.000 pohon.'}</p>
                    </div>
                </div>

                <h2 className="section-title">Statistik Donasi & Progress</h2>
                <div className="stat-grid">
                    <div className="stat-box">
                        <img src="/icons/people.png" alt="Donatur" className="icon-sm" />
                        <p className="stat-value">250</p>
                        <p className="stat-label">Donatur</p>
                    </div>
                    <div className="stat-box">
                        <img src="/icons/tree.png" alt="Total Pohon" className="icon-sm" />
                        <p className="stat-value">1.200</p>
                        <p className="stat-label">Total Pohon Ditanam</p>
                    </div>
                    <div className="stat-box">
                        <img src="/icons/graphic.png" alt="Progress" className="icon-sm" />
                        <p className="stat-value">40%</p>
                        <p className="stat-label">Progress</p>
                    </div>
                </div>

                <h2 className="section-title">Update Proyek</h2>
                <div className="update-grid">
                    <img src={update1} alt="Update 1" />
                    <img src={update2} alt="Update 2" />
                </div>
            </div>
        </div>
    );
}
