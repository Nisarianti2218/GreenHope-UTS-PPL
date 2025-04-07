import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/KonfirmasiPembayaran.css";
import logo from "../assets/logo.png";
import bsiLogo from "../assets/bsi.png";

export default function KonfirmasiPembayaran() {
    const navigate = useNavigate();
    const location = useLocation();

    const { nama, jumlah, kontak, metode } = location.state || {};
    const total = jumlah * 10000;

    const handleConfirm = () => {
        // Arahkan kembali ke halaman Home
        navigate("/");
    };

    return (
        <div className="confirmation-container">
            <div className="confirmation-card">
                <img src={logo} alt="GreenHope Logo" className="greenhope-logo" />

                <p>
                    Terima kasih <strong>{nama || "Donatur Anonim"}</strong>
                </p>
                <p>atas Donasi yang akan anda berikan pada program:</p>
                <h2 className="program-name">GreenHope!</h2>

                <div className="bank-info">
                    <img src={bsiLogo} alt="BSI" className="bank-logo" />
                    <div className="bank-text">
                        <b>7267986382</b>
                        <br />
                        Yayasan GreenHope Nasional
                    </div>
                </div>

                <div className="tree-info">
                    <img src="/icons/tree.png" alt="Tree Icon" className="tree-icon" />
                    <div className="tree-text">
                        {jumlah} Pohon <br />
                        Total pembayaran: <strong>Rp {total.toLocaleString("id-ID")}</strong>
                    </div>
                </div>

                <p className="transfer-note">
                    Harap transfer sesuai nominal di atas agar dapat terkonfirmasi otomatis
                    dan kebaikan ini dapat kami laksanakan.
                </p>

                <div className="upload-box">
                    <label>Upload bukti pembayaran:</label>
                    <input type="file" accept="image/*,application/pdf" />
                </div>

                <button className="confirm-button" onClick={handleConfirm}>
                    Konfirmasi Pembayaran
                </button>
            </div>
        </div>
    );
}
