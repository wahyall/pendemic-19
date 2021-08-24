const jumbotron = () => {
  const widgetPositif = document.querySelector('.case .widget .positif .value');
  const widgetSembuh = document.querySelector('.case .widget .sembuh .value');
  const widgetMeninggal = document.querySelector('.case .widget .meninggal .value');
  const widgetDirawat = document.querySelector('.case .widget .dirawat .value');

  fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
    .then(response => response.json())
    .then(result => {
      widgetPositif.innerHTML = result.positif.toString().split(/(?=(?:\d{3})+(?:\.|$))/g ).join(".");
      widgetSembuh.innerHTML = result.sembuh.toString().split(/(?=(?:\d{3})+(?:\.|$))/g ).join(".");
      widgetMeninggal.innerHTML = result.meninggal.toString().split(/(?=(?:\d{3})+(?:\.|$))/g ).join(".");
      widgetDirawat.innerHTML = result.dirawat.toString().split(/(?=(?:\d{3})+(?:\.|$))/g ).join(".");
    })
}

export default jumbotron;