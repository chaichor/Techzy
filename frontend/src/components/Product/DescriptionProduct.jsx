import React from 'react';

const DescriptionProduct = () => {
    return (
        <>
            <div className="col-span-1 text-subprimary text-2xl space-y-4 font-mono leading-relaxed m-10 p-2">
                <div>
                    <h2 className="font-bold text-subsecondary text-3xl mb-2">Especificaciones:</h2>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>Model: TK75HE V2</li>
                        <li>Layout: ANSI (US)</li>
                        <li>The number of keys: 75% 81 keys</li>
                        <li>Structure: TOP</li>
                        <li>Connection: TYPE-C</li>
                        <li>Switch: Gamakay Magnetic switches: Phoenix, Mercury</li>
                        <li>Keycaps: PBT Cherry-profile translucent keycaps</li>
                        <li>Backlight: 16M RGB backlight</li>
                        <li>Keyboard Type: Hall-effect Magnetic Keyboard</li>
                        <li>Polling Rate: 8k Hz</li>
                        <li>Scanning rate: 10k Hz</li>
                        <li>Adjustable Acuation: 0.01–3.7mm</li>
                        <li>Compatible System: Mac/Windows</li>
                        <li>Screen: 0.85-inch TFT Screen</li>
                        <li>N-key Rollover Support: Yes</li>
                    </ol>
                </div>
                <br />
                <div>
                    <h2 className="font-bold text-subsecondary text-3xl mb-2">Lo que viene en el paquete:</h2>
                    <p><span className="font-semibold">Keyboard:</span><br />1 * Gamakay TK75HE V2</p>
                    <p><span className="font-semibold">Cable:</span><br />1 * 1.5M Type C cable</p>
                    <p><span className="font-semibold">Tools:</span><br />1 * Dual-head keycap puller<br />1 * Top case screws</p>
                </div>
            </div>
        </>
    );
};

export default DescriptionProduct;