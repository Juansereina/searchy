const files = [
  'usuarios',
  'conciliaciones',
  'tableros',
  'fuentes'
];

export const getAlldata = async () => {
  try {
    const promises = files.map(file => {
      return fetch(`http://localhost:3000/data/${file}.json`)
    });
    const responses = await Promise.all(promises)
    return await Promise.all(responses.map(response => response.json()));
  } catch (error) {
    console.error(error);
  }
}
