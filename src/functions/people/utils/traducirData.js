export default (data) => {
  return {
    nombre: data.name,
    altura: data.height,
    peso: data.mass,
    color_cabello: data.hair_color,
    color_piel: data.skin_color,
    color_ojos: data.eye_color,
    anio_nacimiento: data.birth_year,
    genero: data.gender,
    planeta_nacimiento: data.homeworld,
    peliculas: data.films,
    especie: data.species,
    vehiculos: data.vehicles,
    naves: data.starships,
    creado: data.created,
    editado: data.edited,
    enlace: data.url
  }
}
