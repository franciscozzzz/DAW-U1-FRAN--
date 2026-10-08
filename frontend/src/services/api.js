export async function obtenerServicios() {
  const respuesta = await fetch('/api/servicios.php')
  if (!respuesta.ok) {
    throw new Error('Error al consultar la API: ' + respuesta.status)
  }
  return await respuesta.json()
}