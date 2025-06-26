import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const {
    numero_departamento = "",
    nombre_airbnb = "",
    colonia = "",
    wifi = "",
    contrasena_wifi = "",
    ubicacion = "",
    clave_acceso = "",
    link_airbnb = "",
    video_youtube = "",
  } = router.query;

  // Mostrar mensaje si no hay número de departamento (o cambia la lógica como prefieras)
  if (!numero_departamento) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#181b20',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Segoe UI, sans-serif'
      }}>
        <h1>¡Hola, Invitado!</h1>
        <p>No se encontró ningún número de reserva.</p>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#20242c',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, sans-serif',
      padding: 30
    }}>
      <div style={{
        background: '#232a36',
        borderRadius: 18,
        boxShadow: '0 8px 32px #0004',
        padding: '2rem 2.5rem',
        maxWidth: 500,
        width: '100%'
      }}>
        <h1 style={{textAlign: 'center', marginBottom: 10}}>
          {nombre_airbnb || 'Departamento'}
        </h1>
        <table style={{width: '100%', margin: '10px 0', fontSize: '1.08rem'}}>
          <tbody>
            <tr>
              <td><b>No. Departamento:</b></td>
              <td>{numero_departamento}</td>
            </tr>
            <tr>
              <td><b>Colonia:</b></td>
              <td>{colonia}</td>
            </tr>
            <tr>
              <td><b>WiFi:</b></td>
              <td>{wifi}</td>
            </tr>
            <tr>
              <td><b>Contraseña WiFi:</b></td>
              <td>{contrasena_wifi}</td>
            </tr>
            <tr>
              <td><b>Clave acceso:</b></td>
              <td>{clave_acceso}</td>
            </tr>
          </tbody>
        </table>
        <div style={{margin: '18px 0'}}>
          <a href={ubicacion} target="_blank" style={{color: '#80d0ff', textDecoration: 'none'}} rel="noopener noreferrer">
            📍 Ver ubicación
          </a>
        </div>
        <div style={{margin: '8px 0'}}>
          <a href={link_airbnb} target="_blank" style={{color: '#ffbf69', textDecoration: 'none'}} rel="noopener noreferrer">
            🏡 Ver Airbnb
          </a>
        </div>
        {video_youtube &&
          <div style={{margin: '16px 0'}}>
            <a href={video_youtube} target="_blank" style={{color: '#ff7575', textDecoration: 'none'}} rel="noopener noreferrer">
              ▶️ Ver video de llegada
            </a>
          </div>
        }
      </div>
      <div style={{marginTop: 36, opacity: 0.5, fontSize: 13}}>Powered by N8N + Next.js + IA</div>
    </div>
  );
}
