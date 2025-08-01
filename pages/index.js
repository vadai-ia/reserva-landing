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
      background: 'linear-gradient(135deg, #16213e 60%, #274382 90%, #4d7dfd 100%)',
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
          fontWeight: 900,
          fontSize: '2.3rem',
          color: '#fff',
          letterSpacing: '-1.5px',
          margin: 0,
          textShadow: '0 4px 12px #182C4940'
        }}>
          <span style={{ color: '#4d7dfd' }}></span>Bienvenid@ a la Experiencia <span style={{ color: '#13427A' }}>HIDEKEL</span>
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
        background: 'rgba(196,236,255,0.93)',
        borderRadius: 16,
        padding: '1.1rem 1.2rem',
        margin: '0 0 24px 0',
        maxWidth: 500,
        width: '90%',
        color: '#16213e',
        fontWeight: 500,
        boxShadow: '0 2px 16px #27438220',
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        <span style={{
          background: '#4d7dfd',
          color: '#fff',
          borderRadius: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 30, height: 30,
          fontWeight: 'bold',
          fontSize: 19,
        }}>i</span>
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
        maxWidth: 540,
        marginBottom: 16,
        flexWrap: 'wrap'
      }}>
        <div style={{
          background: '#fff',
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
          <div style={{ fontSize: 13, color: '#4d7dfd', fontWeight: 600 }}>Código de Reserva</div>
          <div style={{ fontSize: 19, fontWeight: 800, marginTop: 6, wordBreak: 'break-word', lineHeight: '1.18' }}>{codigo_reserva || 'N/A'}</div>
        </div>
        <div style={{
          background: '#fff',
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
          <div style={{ fontSize: 13, color: '#4d7dfd', fontWeight: 600 }}>Departamento</div>
          <div style={{ fontSize: 19, fontWeight: 800, marginTop: 6 }}>{numero_departamento}</div>
        </div>
        <div style={{
          background: '#fff',
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
          <div style={{ fontSize: 13, color: '#4d7dfd', fontWeight: 600 }}>Colonia</div>
          <div style={{ fontSize: 18, fontWeight: 800, marginTop: 6, wordBreak: 'break-word' }}>{colonia}</div>
        </div>
      </div>

      {/* ACCIONES RÁPIDAS */}
      <div style={{
        display: 'flex',
        gap: 14,
        justifyContent: 'center',
        width: '95%',
        maxWidth: 540,
        marginBottom: 24,
        flexWrap: 'wrap'
      }}>
        <a href={ubicacion} target="_blank" rel="noopener noreferrer"
          style={{
            flex: 1,
            background: '#4d7dfd',
            color: '#fff',
            padding: '0.85rem',
            borderRadius: 11,
            fontWeight: 700,
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
          <svg width="19" height="19" fill="#fff" style={{marginRight: 2}} viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 6.36 12.36 6.64 12.65.37.37.97.37 1.34 0C12.64 21.36 19 14.25 19 9c0-3.87-3.13-7-7-7zm0 17.6C10.2 17.18 7 12.89 7 9a5 5 0 0110 0c0 3.89-3.2 8.18-5 10.6zm0-13.1a3.1 3.1 0 100 6.2 3.1 3.1 0 000-6.2zm0 4.2a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2z"/></svg>
          Ver ubicación
        </a>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
          style={{
            flex: 1,
            background: '#25d366',
            color: '#fff',
            padding: '0.85rem',
            borderRadius: 11,
            fontWeight: 700,
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
          <svg width="21" height="21" viewBox="0 0 32 32" fill="#fff"><path d="M16.004 3C9.384 3 4 8.382 4 15c0 2.489.864 4.864 2.434 6.8L4 29l7.338-2.351A12.914 12.914 0 0 0 16 27c6.617 0 12-5.383 12-12S22.621 3 16.004 3zm0 22.762a10.769 10.769 0 0 1-5.486-1.504l-.395-.232l-4.364 1.395l1.43-4.255l-.254-.384A10.77 10.77 0 1 1 26.77 15c0 5.954-4.812 10.766-10.766 10.766zm5.886-7.879c-.32-.16-1.893-.93-2.187-1.04c-.293-.107-.508-.16-.723.16c-.213.319-.83 1.04-1.018 1.252c-.187.213-.373.24-.693.08c-.32-.16-1.349-.497-2.573-1.586c-.95-.846-1.592-1.892-1.78-2.212c-.187-.32-.02-.49.14-.65c.146-.147.319-.373.48-.56c.16-.187.213-.32.32-.533c.107-.213.053-.399-.027-.56c-.08-.16-.723-1.745-.992-2.394c-.263-.631-.531-.547-.723-.557l-.617-.012c-.187 0-.493.067-.753.32c-.253.252-.995.97-.995 2.364c0 1.393 1.018 2.738 1.16 2.93c.16.213 2.004 3.067 4.86 4.184c.68.293 1.21.466 1.625.596c.682.217 1.302.187 1.793.113c.547-.08 1.893-.773 2.16-1.52c.266-.747.266-1.386.187-1.52c-.08-.133-.292-.213-.613-.373z"/></svg>
          Ayuda por WhatsApp
        </a>
      </div>

      {/* INFORMACIÓN IMPORTANTE */}
      <div style={{
        background: '#182C49',
        borderRadius: 18,
        boxShadow: '0 4px 20px #182c4944',
        padding: '1.3rem 1.2rem 1.3rem 1.2rem',
        color: '#fff',
        maxWidth: 540,
        width: '95%',
        marginBottom: 24,
        fontSize: 17,
      }}>
        <div style={{fontWeight: 800, fontSize: 22, marginBottom: 14, letterSpacing: '-0.5px', textAlign: 'center'}}>
          Información importante
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 9, marginBottom: 8}}>
          <svg width="19" height="19" fill="#4d7dfd" viewBox="0 0 24 24"><path d="M12 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm1-14h-2v2h2V3zm6.364 2.636l-1.414 1.414A7.962 7.962 0 0 0 12 6c-1.657 0-3.157.537-4.364 1.414l-1.414-1.414A9.957 9.957 0 0 1 12 4c2.21 0 4.264.713 6.364 2.636zm-12.728 0A9.957 9.957 0 0 0 4 12c0 2.21.713 4.264 2.636 6.364l1.414-1.414A7.962 7.962 0 0 1 6 12c0-1.657.537-3.157 1.414-4.364zm14.728 14.728l-1.414-1.414A7.962 7.962 0 0 1 18 12c0-1.657-.537-3.157-1.414-4.364l1.414-1.414A9.957 9.957 0 0 1 20 12c0 2.21-.713 4.264-2.636 6.364zM12 22a9.957 9.957 0 0 1-6.364-2.636l1.414-1.414A7.962 7.962 0 0 0 12 18c1.657 0 3.157-.537 4.364-1.414l1.414 1.414A9.957 9.957 0 0 1 12 22z"/></svg>
          <span><b>Clave de acceso:</b> {clave_acceso}</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 9, marginBottom: 8}}>
          <svg width="19" height="19" fill="#4d7dfd" viewBox="0 0 24 24"><path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm1 17.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79l4.65 4.65c.2.2.51.2.71 0l1.23-1.23c.2-.2.2-.51 0-.71l-4.65-4.65C7.8 5.08 9.8 4 12 4c4.97 0 9 4.03 9 9 0 4.97-4.03 9-9 9z"/></svg>
          <span><b>Wi-Fi:</b> {wifi}</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 9}}>
          <svg width="19" height="19" fill="#4d7dfd" viewBox="0 0 24 24"><path d="M12 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm0-16C6.48 1 2 5.48 2 11c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8c0-4.41 3.59-8 8-8c4.41 0 8 3.59 8 8c0 4.41-3.59 8-8 8z"/></svg>
          <span><b>Contraseña Wi-Fi:</b> {contrasena_wifi}</span>
        </div>
      </div>

      {/* ACCESOS EXTRA */}
      <div style={{
        width: '95%',
        maxWidth: 540,
        display: 'flex',
        gap: 16,
        marginBottom: 24,
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {link_airbnb &&
          <a href={link_airbnb} target="_blank" rel="noopener noreferrer"
            style={{
              flex: 1,
              minWidth: 180,
              background: '#ffbf69',
              color: '#2b2b2b',
              padding: '0.75rem',
              borderRadius: 12,
              fontWeight: 800,
              textAlign: 'center',
              textDecoration: 'none',
              fontSize: 16,
              boxShadow: '0 2px 8px #ffbf6933',
              transition: 'background 0.15s'
            }}>
            🏡 Ver Airbnb
          </a>
        }
        {video_youtube &&
          <a href={video_youtube} target="_blank" rel="noopener noreferrer"
            style={{
              flex: 1,
              minWidth: 180,
              background: '#ff7575',
              color: '#fff',
              padding: '0.75rem',
              borderRadius: 12,
              fontWeight: 800,
              textAlign: 'center',
              textDecoration: 'none',
              fontSize: 16,
              boxShadow: '0 2px 8px #ff757533',
              transition: 'background 0.15s'
            }}>
            ▶️ Ver video de llegada
          </a>
        }
      </div>
      <div style={{margin: '24px 0 16px', opacity: 0.21, fontSize: 13, textAlign: 'center'}}>Powered by N8N + Next.js + IA</div>
    </div>
  );
}
