import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const {
    numero_departamento = "",
    codigo_reserva = "",
    nombre_airbnb = "",
    colonia = "",
    wifi = "",
    contrasena_wifi = "",
    ubicacion = "",
    clave_acceso = "",
    link_airbnb = "",
    video_youtube = "",
    video_clave = "",
    video_dron = "",
    foto_estacionamiento = "",
  } = router.query;

  // Teléfono de soporte WhatsApp real
  const whatsappNumber = '50487680854';
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=Hola%20tengo%20una%20duda%20con%20mi%20reserva%20${codigo_reserva || ''}`;

  // Si no hay reserva
  if (!numero_departamento) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #182C49 60%, #4d7dfd 100%)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif'
      }}>
        <h1>¡Hola, Invitado!</h1>
        <p>No se encontró ningún número de reserva.</p>
      </div>
    );
  }

  return (
    <div style={{
       minHeight: '100vh',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif',
      padding: 0,
      boxSizing: 'border-box'
    }}>
      {/* HEADER */}
      <div style={{
        marginTop: 32,
        width: '100%',
        maxWidth: 500,
        position: 'relative',
        marginBottom: 12
      }}>
        <h1 style={{
          fontWeight: 700,
          textAlign: 'center',
          fontSize: '2.3rem',
          color: '#13427A',
          letterSpacing: '-1.5px',
          margin: 0
        }}>
          Bienvenid@ a la Experiencia 
           <br /> 
            H-Living!
        </h1>

        {/* Botón WhatsApp */}
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            background: '#25d366',
            borderRadius: '50%',
            width: 46,
            height: 46,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px #0003',
            border: '4px solid #fff',
            transition: 'transform 0.15s',
          }}>
          <svg width="26" height="26" viewBox="0 0 32 32"><path fill="#fff" d="M16.004 3C9.384 3 4 8.382 4 15c0 2.489.864 4.864 2.434 6.8L4 29l7.338-2.351A12.914 12.914 0 0 0 16 27c6.617 0 12-5.383 12-12S22.621 3 16.004 3zm0 22.762a10.769 10.769 0 0 1-5.486-1.504l-.395-.232l-4.364 1.395l1.43-4.255l-.254-.384A10.77 10.77 0 1 1 26.77 15c0 5.954-4.812 10.766-10.766 10.766zm5.886-7.879c-.32-.16-1.893-.93-2.187-1.04c-.293-.107-.508-.16-.723.16c-.213.319-.83 1.04-1.018 1.252c-.187.213-.373.24-.693.08c-.32-.16-1.349-.497-2.573-1.586c-.95-.846-1.592-1.892-1.78-2.212c-.187-.32-.02-.49.14-.65c.146-.147.319-.373.48-.56c.16-.187.213-.32.32-.533c.107-.213.053-.399-.027-.56c-.08-.16-.723-1.745-.992-2.394c-.263-.631-.531-.547-.723-.557l-.617-.012c-.187 0-.493.067-.753.32c-.253.252-.995.97-.995 2.364c0 1.393 1.018 2.738 1.16 2.93c.16.213 2.004 3.067 4.86 4.184c.68.293 1.21.466 1.625.596c.682.217 1.302.187 1.793.113c.547-.08 1.893-.773 2.16-1.52c.266-.747.266-1.386.187-1.52c-.08-.133-.292-.213-.613-.373z"/></svg>
        </a>
      </div>

      {/* TEXTO EXPLICATIVO */}
      <div style={{
        borderRadius: 16,
        padding: '1.1rem 1.2rem',
        margin: '0 0 24px 0',
        maxWidth: 500,
        width: '90%',
        color: '#13427A',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        
        <span>
          A continuación puedes encontrar toda la información de la reserva. <b>Asegúrate de leer bien</b> y cualquier duda estamos para servirte a través del mensaje que te llegará vía WhatsApp.
        </span>
      </div>

      {/* DATOS RESERVA */}
      <div style={{
        display: 'flex',
        gap: 16,
        justifyContent: 'center',
        width: '100%',
        maxWidth: 640,
        marginBottom: 16,
        flexWrap: 'wrap'
      }}>
        <div style={{
          background: '#F8F8F8',
          color: '#16213e',
          borderRadius: 16,
          padding: '1.3rem 1rem',
          flex: '1 1 160px',
          minWidth: 160,
          textAlign: 'center',
          boxShadow: '0 2px 12px #4d7dfd13',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'box-shadow 0.2s',
        }}>
          <div style={{ fontSize: 13, color: '#13427A', fontWeight: 600 }}>Código de Reserva</div>
          <div style={{ fontSize: 19, color: '#13427A', fontWeight: 700, marginTop: 6, wordBreak: 'break-word', lineHeight: '1.18' }}>{codigo_reserva || 'N/A'}</div>
        </div>
        <div style={{
          background: '#F8F8F8',
          color: '#16213e',
          borderRadius: 16,
          padding: '1.3rem 1rem',
          flex: '1 1 160px',
          minWidth: 160,
          textAlign: 'center',
          boxShadow: '0 2px 12px #4d7dfd13',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'box-shadow 0.2s',
        }}>
          <div style={{ fontSize: 13, color: '#13427A', fontWeight: 600 }}>Departamento</div>
          <div style={{ fontSize: 19, color: '#13427A', fontWeight: 700, marginTop: 6 }}>{numero_departamento}</div>
        </div>
        <div style={{
          background: '#F8F8F8',
          color: '#16213e',
          borderRadius: 16,
          padding: '1.3rem 1rem',
          flex: '1 1 160px',
          minWidth: 160,
          textAlign: 'center',
          boxShadow: '0 2px 12px #4d7dfd13',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'box-shadow 0.2s',
        }}>
          <div style={{ fontSize: 13, color: '#13427A', fontWeight: 600 }}>Colonia</div>
          <div style={{ fontSize: 18, color: '#13427A', fontWeight: 700, marginTop: 6, wordBreak: 'break-word' }}>{colonia}</div>
        </div>
      </div>

      {/* ACCIONES RÁPIDAS */}
      <div style={{
        display: 'flex',
        gap: 14,
        justifyContent: 'center',
        width: '95%',
        maxWidth: 640,
        marginBottom: 24,
        flexWrap: 'wrap'
      }}>
        <a href={ubicacion} target="_blank" rel="noopener noreferrer"
          style={{
            flex: 1,
            background: '#13427A',
            color: '#fff',
            padding: '0.85rem',
            borderRadius: 21,
            fontWeight: 600,
            textAlign: 'center',
            textDecoration: 'none',
            fontSize: 17,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 7,
            boxShadow: '0 2px 8px #4d7dfd22',
            minWidth: 180,
            transition: 'background 0.15s',
          }}>
        <img src="https://storage.googleapis.com/msgsndr/vNFJWo3gKuUCbXCZ0Mx8/media/6890e65f3c431507ca93906d.png" alt="icono" width="19" height="19"
        style={{ marginRight: 2 }}/>
        Ubicación Google maps
        </a>
        <a href={video_dron} target="_blank" rel="noopener noreferrer"
          style={{
            flex: 1,
            background: '#13427A',
            color: '#fff',
            padding: '0.85rem',
            borderRadius: 21,
            fontWeight: 600,
            textAlign: 'center',
            textDecoration: 'none',
            fontSize: 17,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 7,
            minWidth: 180,
            boxShadow: '0 2px 8px #25d36622',
            transition: 'background 0.15s',
          }}>
 <img src="https://storage.googleapis.com/msgsndr/vNFJWo3gKuUCbXCZ0Mx8/media/6890e65f600bc5ccf565f854.png" alt="icono" width="19" height="19"
       style={{ marginRight: 2 }}/>  
Video como llegar a la Colonia
        </a>
      </div>

      {/* INFORMACIÓN IMPORTANTE */}
      <div style={{
        background: '#F8F8F8',
        borderRadius: 18,
        padding: '1.3rem 1.2rem 1.3rem 1.2rem',
        color: '#13427A',
        maxWidth: 640,
        width: '95%',
        marginBottom: 24,
        fontSize: 17,
      }}>
        <div style={{fontWeight: 600, fontSize: 32, marginBottom: 14, letterSpacing: '-0.5px', textAlign: 'center'}}>
          Información importante
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 9, marginBottom: 8}}>
          <span><b>Clave de acceso:</b> {clave_acceso}</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 9, marginBottom: 8}}>
          <span><b>Wi-Fi:</b> {wifi}</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 9}}>
          <span><b>Contraseña Wi-Fi:</b> {contrasena_wifi}</span>
        </div>
      </div>

      {/* ACCESOS EXTRA */}
      <div style={{
        width: '95%',
        maxWidth: 640,
        display: 'flex',
        gap: 16,
        marginBottom: 24,
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {foto_estacionamiento &&
          <a href={foto_estacionamiento} target="_blank" rel="noopener noreferrer"
            style={{
              flex: 1,
              minWidth: 230,
              background: '#13427A',
              color: '#FFFFFF',
              display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 7,
              padding: '0.75rem',
              borderRadius: 12,
              fontWeight: 600,
              textAlign: 'center',
              textDecoration: 'none',
              fontSize: 16,
              boxShadow: '0 2px 8px #ffbf6933',
              transition: 'background 0.15s'
            }}>
            <img src="https://storage.googleapis.com/msgsndr/vNFJWo3gKuUCbXCZ0Mx8/media/6890e660746eb813385f4974.png" alt="icono" width="19" height="19"
       style={{ marginRight: 2 }}/>  
  Ver lugar de estacionamiento
          </a>
        }
{video_clave &&
          <a href={video_clave} target="_blank" rel="noopener noreferrer"
            style={{
              flex: 1,
              minWidth: 230,
              background: '#13427A',
              color: '#FFFFFF',
              display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 7,
              padding: '0.75rem',
              borderRadius: 12,
              fontWeight: 600,
              textAlign: 'center',
              textDecoration: 'none',
              fontSize: 16,
              boxShadow: '0 2px 8px #ffbf6933',
              transition: 'background 0.15s'
            }}>
             <img src="https://storage.googleapis.com/msgsndr/vNFJWo3gKuUCbXCZ0Mx8/media/6890e65f746eb86a295f4972.png" alt="icono" width="19" height="19"
       style={{ marginRight: 2 }}/>  
 Video como abrir Masterlock
          </a>
        }

        {video_youtube &&
          <a href={video_youtube} target="_blank" rel="noopener noreferrer"
            style={{
              flex: 1,
              minWidth: 230,
              background: '#13427A',
              color: '#FFFFFF',
              display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 7,
              padding: '0.75rem',
              borderRadius: 12,
              fontWeight: 600,
              textAlign: 'center',
              textDecoration: 'none',
              fontSize: 16,
              boxShadow: '0 2px 8px #ff757533',
              transition: 'background 0.15s'
            }}>
               <img src="https://storage.googleapis.com/msgsndr/vNFJWo3gKuUCbXCZ0Mx8/media/6890e65f600bc505fb65f853.png" alt="icono" width="19" height="19"
       style={{ marginRight: 2 }}/>  
 Video tour de tu apartamento
          </a>
        }
{link_airbnb &&
          <a href={ link_airbnb} target="_blank" rel="noopener noreferrer"
            style={{
              flex: 1,
              minWidth: 230,
              background: '#13427A',
              color: '#FFFFFF',
              display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 7,
              padding: '0.75rem',
              borderRadius: 12,
              fontWeight: 600,
              textAlign: 'center',
              textDecoration: 'none',
              fontSize: 16,
              boxShadow: '0 2px 8px #ff757533',
              transition: 'background 0.15s'
            }}>
               <img src="https://storage.googleapis.com/msgsndr/vNFJWo3gKuUCbXCZ0Mx8/media/6890e65f275c418fc25425ee.png" alt="icono" width="19" height="19"
       style={{ marginRight: 2 }}/>  
 Link airbnb de tu apartamento
          </a>
        }
      </div>
        {/* INFORMACIÓN IMPORTANTE */}
      <div style={{
        background: '#F8F8F8',
        borderRadius: 18,
        padding: '1.3rem 1.2rem 1.3rem 1.2rem',
        color: '#13427A',
        maxWidth: 640,
        width: '95%',
        marginBottom: 24,
        fontSize: 17,
      }}>
        <div style={{fontWeight: 700, fontSize: 32, marginBottom: 14, letterSpacing: '-0.5px', textAlign: 'center'}}>
          ¿Necesitas ayuda?
        </div>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
          style={{
            flex: 1,
            color: '#fff',
            display: flex,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.85rem',
            borderRadius: 21,
            fontWeight: 600,
            textAlign: 'center',
            textDecoration: 'none',
            fontSize: 17,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 7,
            boxShadow: '0 2px 8px #4d7dfd22',
            minWidth: 180,
            transition: 'background 0.15s',
          }}>
        <img src="https://storage.googleapis.com/msgsndr/vNFJWo3gKuUCbXCZ0Mx8/media/6890e65f275c41eda25425f0.png" alt="icono" width="19" height="19"
        style={{ marginRight: 2 }}/>
       Envianos un mensaje
        </a>
        </div>
      <div style={{margin: '24px 0 16px', width: 300px, opacity: 0.21, fontSize: 13, textAlign: 'center'}}>Powered by N8N + Next.js + IA</div>
    </div>
  );
}
