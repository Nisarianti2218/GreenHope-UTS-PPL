import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/FormDonasi.css";
import bg2 from "../assets/bg2.png";
import logo from "../assets/logo.png";

export default function FormDonasi() {
    const { lokasi } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const nama = form.nama.value.trim() || "Donatur Anonim";
        const kontak = form.kontak.value.trim();
        const jumlah = form.jumlah.value.trim();
        const metode = form.metode.value.trim();

        if (!kontak || !jumlah || !metode) {
            alert("Mohon lengkapi semua field wajib.");
            return;
        }

        // Kirim data ke halaman konfirmasi
        navigate(`/KonfirmasiPembayaran/${lokasi}`, {
            state: {
                nama,
                kontak,
                jumlah: parseInt(jumlah),
                metode
            }
        });
    };

    return (
        <div className="form-page" style={{ backgroundImage: `url(${bg2})` }}>
            <div className="form-wrapper">
                <div className="form-header">
                    <img src={logo} alt="Logo" className="form-logo" />
                    <h1 className="form-title">Formulir Donasi</h1>
                </div>

                <form id="donationForm" onSubmit={handleSubmit}>
                    <label>Nama Lengkap (Opsional bisa anonim)</label>
                    <input type="text" name="nama" />

                    <label>Email/Nomor HP (untuk konfirmasi donasi)</label>
                    <input type="text" name="kontak" required />

                    <label>Jumlah Pohon yang ingin Didonasikan</label>
                    <input type="number" name="jumlah" required min="1" />

                    <label>Metode Pembayaran</label>
                    <select name="metode" required>
                        <option value="">-- Pilih --</option>
                        <option value="Transfer Bank">Transfer Bank</option>
                        <option value="E-Wallet">E-Wallet</option>
                        <option value="QRIS">QRIS</option>
                    </select>

                    <div className="button-group">
                        <button type="button" className="cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
