import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LokasiDonasi.css';

import lokasi1 from '../assets/lokasi1.png';
import lokasi2 from '../assets/lokasi2.png';
import lokasi3 from '../assets/lokasi3.png';
import lokasi4 from '../assets/lokasi4.png';
import lokasi5 from '../assets/lokasi5.png';
import lokasi6 from '../assets/lokasi6.png';
import lokasi7 from '../assets/lokasi7.png';
import coverImg from '../assets/bg2.png';

const lokasiList = [
    {
        nama: "Taman Kota Bandung (Jawa Barat)",
        deskripsi: "Penghijauan di taman kota dan jalur hijau untuk meningkatkan kualitas udara serta menyediakan ruang terbuka hijau bagi masyarakat.",
        img: lokasi1,
    },
    {
        nama: "Daerah Rawan Longsor di Puncak, Bogor (Jawa Barat)",
        deskripsi: "Penanaman pohon berakar kuat di daerah perbukitan untuk menjaga kestabilan tanah dan mencegah bencana longsor.",
        img: lokasi2,
    },
    {
        nama: "Bekas Tambang Batu Bara (Sumatera Barat)",
        deskripsi: "Rehabilitasi lahan bekas tambang dengan menanam pohon keras untuk mengurangi erosi dan memperbaiki ekosistem yang rusak.",
        img: lokasi3,
    },
    {
        nama: "Sekolah Hijau di Surabaya (Jawa Timur)",
        deskripsi: "Menanam pohon di lingkungan sekolah dan kampus untuk menciptakan suasana belajar yang lebih asri dan sehat.",
        img: lokasi4,
    },
    {
        nama: "Lahan Pertanian di Gunung Kidul (Yogyakarta)",
        deskripsi: "Penanaman pohon peneduh untuk menjaga kelembaban tanah dan meningkatkan hasil pertanian di daerah yang sering mengalami kekeringan.",
        img: lokasi5,
    },
    {
        nama: "Konservasi Mata Air di Dieng (Jawa Tengah)",
        deskripsi: "Penghijauan di sekitar sumber mata air untuk menjaga keseimbangan ekosistem, meningkatkan serapan air tanah, dan mencegah kekeringan.",
        img: lokasi6,
    },
    {
        nama: "Jalur Hijau di Sepanjang Jalan Sudirman (Jakarta)",
        deskripsi: "Penghijauan trotoar dan median jalan untuk mengurangi polusi udara, memberikan keteduhan, serta mempercantik kota.",
        img: lokasi7,
    }
];

export default function LokasiDonasi() {
    const navigate = useNavigate();

    const handleCardClick = (lokasiNama) => {
        const encodedNama = encodeURIComponent(lokasiNama);
        navigate(`/lokasi/${encodedNama}`);
    };

    return (
        <div className="lokasi-container">
            {/* Header */}
            <div
                className="cover"
                style={{ backgroundImage: `url(${coverImg})` }}
            >
                <div className="back-button" onClick={() => navigate('/')}>
                    ←
                </div>
                <div className="cover-content">
                    <h1 className="cover-title">
                        Bantu <span style={{ color: "#4ade80" }}>Hijaukan</span> Bumi,
                    </h1>
                    <h2 className="cover-subtitle">Satu Pohon Sekaligus!</h2>
                </div>
            </div>

            {/* Title tetap di atas */}
            <div className="lokasi-heading-wrapper">
                <h3 className="lokasi-heading">Pilih Lokasi Penghijauan:</h3>
            </div>

            {/* Scrollable content */}
            <div className="scrollable-list">
                {lokasiList.map((lokasi, index) => (
                    <div
                        key={index}
                        className="lokasi-card"
                        onClick={() => handleCardClick(lokasi.nama)}
                    >
                        <img
                            src={lokasi.img}
                            alt={lokasi.nama}
                            className="lokasi-img"
                        />
                        <div>
                            <h4 className="text-md font-semibold">{lokasi.nama}</h4>
                            <p className="text-sm text-gray-700 mt-1">{lokasi.deskripsi}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
