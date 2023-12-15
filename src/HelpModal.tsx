import React from "react";

interface HelpModalProps {
    show: boolean;
    onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modalBackground">
            <div className="modalContent">
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default HelpModal;
