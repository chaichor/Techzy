import { useState } from 'react';

/**
 * Custom hook para gestionar notificaciones
 * @returns {Object} Estado y funciones para controlar notificaciones
 */
const useNotification = () => {
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success', // 'success' o 'error'
  });

  /**
   * Muestra una notificación de éxito
   * @param {string} message - Mensaje a mostrar
   */
  const showSuccess = (message) => {
    setNotification({
      show: true,
      message,
      type: 'success',
    });
    
    // Auto-ocultar después de 3 segundos
    setTimeout(() => {
      hideNotification();
    }, 3000);
  };

  /**
   * Muestra una notificación de error
   * @param {string} message - Mensaje a mostrar
   */
  const showError = (message) => {
    setNotification({
      show: true,
      message,
      type: 'error',
    });
    
    // Auto-ocultar después de 3 segundos
    setTimeout(() => {
      hideNotification();
    }, 3000);
  };

  /**
   * Oculta la notificación actual
   */
  const hideNotification = () => {
    setNotification({
      show: false,
      message: '',
      type: 'success',
    });
  };

  return {
    notification,
    showSuccess,
    showError,
    hideNotification,
  };
};

export default useNotification;
