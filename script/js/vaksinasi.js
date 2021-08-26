const vaksinasi = () => {
  const glb1 = document.querySelectorAll('.vaksinasi .value')[0];
  const glb2 = document.querySelectorAll('.vaksinasi .value')[1];

  fetch('https://vaksincovid19-api.vercel.app/api/vaksin')
    .then(response => response.json())
    .then(result => {
      glb1.textContent = result.vaksinasi1.toString().split(/(?=(?:\d{3})+(?:\.|$))/g ).join(".");
      glb2.textContent = result.vaksinasi2.toString().split(/(?=(?:\d{3})+(?:\.|$))/g ).join(".");
    });
}

export default vaksinasi;