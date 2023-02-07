const velocidadeDaLuz = 299792; // km/s

const distanciaParaSigmaOctantis = 1930000; // km
const distanciaParaAlphaCentauri = 4.37 * Math.pow(10, 12); // km

const distanciaEmAnosLuz = distanciaParaAlphaCentauri / Math.pow(velocidadeDaLuz, 2);
const distanciaEmQuilometros = distanciaParaAlphaCentauri / 1000;

alert(`A distância de Sigma Octantis até Alpha Centauri é de ${distanciaEmAnosLuz} anos-luz.`);
alert(`A distância de Sigma Octantis até Alpha Centauri é de ${distanciaEmQuilometros} quilômetros.`);