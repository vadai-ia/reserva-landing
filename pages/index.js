import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { nombre, reserva } = router.query;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#121212',
      color: 'white'
    }}>
      <h1>¡Hola, {nombre || "Invitado"}!</h1>
      <p>
        {reserva 
          ? <>Tu número de reserva es: <b>{reserva}</b></>
          : <>No se encontró ningún número de reserva.</>
        }
      </p>
    </div>
  );
}
