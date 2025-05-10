import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useEffect, useState } from 'react';
import { mercadoPagoPreference } from '../services/paymentService';
import { envLoader } from "../../../config/envLoader";

const { mp_publicKey, optionsCurrency: { locale } } = envLoader;

export const MercadoPagoButton = ({ cart, onPaymentSuccess }) => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initMercadoPago(mp_publicKey, { locale });
  }, []);

  const handleGeneratePreference = async () => {
    setLoading(true);
    try {
      const { data } = await mercadoPagoPreference({ cart });
      setPreferenceId(data.id);
    } catch (error) {
      console.error('Error al procesar el pago', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-3">
      <button
        onClick={handleGeneratePreference}
        className="btn btn-primary w-100"
        disabled={loading}
      >
        {loading ? 'Cargando pasarela de pago...' : 'Pagar con Mercado Pago'}
      </button>

      {preferenceId && (
        <div className="w-100 mt-3">
          <Wallet
            initialization={{ preferenceId }}
            onReady={() => console.log('Mercado Pago Wallet lista')}
            onError={(error) => console.error('Error en la pasarela de pago', error)}
            onPayment={(details) => onPaymentSuccess(details)}
          />
        </div>
      )}
    </div>
  );
};