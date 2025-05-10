
import { useRef, useState } from "react";
import previewSvg from '../../assets/preview.svg';

export const ImageUploader = ({ onChange, error }) => {
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);

            onChange({
                target: {
                    name: "imagen",
                    value: file,
                },
            });
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="mb-3">
            <label className="form-label">Imagen de Perfil</label>
            <div
                className={`border border-${error ? 'danger' : 'secondary'} border-2 rounded p-4 text-center bg-light cursor-pointer`}
                style={{ borderStyle: 'dashed' }}
                onClick={handleClick}
            >
                {preview ? (
                    <div className="d-flex flex-column align-items-center">
                        <img
                            src={preview}
                            alt="Preview"
                            className="rounded-circle mb-2"
                            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                        />
                        <p className="text-primary small mb-0">Cambiar Imagen</p>
                    </div>
                ) : (
                    <div>
                        <img
                            src={previewSvg}
                            alt="preview default"
                            className="mb-2"
                            style={{ width: '64px', height: '64px' }}
                        />
                        <p className="text-muted small mb-1">Haz click para seleccionar una imagen</p>
                        <p className="text-muted small">PNG, JPG o JPEG - Máx. 2MB</p>
                    </div>
                )}

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="d-none"
                />
            </div>

            {error && <div className="text-danger small mt-1">{error}</div>}
        </div>
    );
};