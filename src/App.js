import React, { useState } from 'react';
import Modal from './components/Modal';

function App() {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setModalOpen(true)}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <p>This is a modal!</p>
            </Modal>
        </div>
    );
}

export default App;
