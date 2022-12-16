function initMap() {
    const campinas = { lat: -22.90626410924555, lng: -47.06471398657536 };
    const hortolandia = { lat: -22.8769465, lng: -47.2440489 };
    const sumare = { lat: -22.8423726, lng: -47.3313439 };
    const americana = { lat: -22.7238733, lng: -47.3608199 };
    const rio_claro = { lat: -22.3956726, lng: -47.7061233 };
    const piracicaba = { lat: -22.714462, lng: -47.6918735 };
    const paulinia = { lat: -22.7582398, lng: -47.2412277 };
    const jundiai = { lat: -23.1893209, lng: -47.0467903 };
    const braganca = { lat: -22.9286782, lng: -46.7028643 };
    const itatiba = { lat: -22.9970938, lng: -46.8993034 };
    const atibaia = { lat: -23.1228834, lng: -46.6288631 };
    const sorocaba = { lat: -23.4694895, lng: -47.5768799 };
    const itu = { lat: -23.296916, lng: -47.4177633 };
    const boituva = { lat: -23.2890632, lng: -47.7096494 };
    const sao_carlos = { lat: -22.0183658, lng: -47.9660986 };
    const araraquara = { lat: -21.7792862, lng: -48.2277822 };
    const mococa = { lat: -21.471193, lng: -47.076486 };
    const serra_negra = { lat: -22.614921, lng: -46.7559674 };
    const jaguariuna = { lat: -22.6906477, lng: -47.0227934 };
    const pedreira = { lat: -22.7621987, lng: -46.9631643 };
    const itapira = { lat: -22.4337258, lng: -46.8445007 };
    const sao_paulo = { lat: -23.554925, lng: -46.6086252 };
    const porto_ferreira = { lat: -21.8510782, lng: -47.5109716 };
    const sj_boa_vista = { lat: -21.9834405, lng: -46.9120583 };
    const sj_rio_pardo = { lat: -21.6055576, lng: -46.9735911 };
    const map = new google.maps.Map(document.getElementById("map_canvas"), {
      zoom: 9,
      center: campinas,
    });
    const marker = new google.maps.Marker({
      position: campinas,
      map: map,
    });
    const marker2 = new google.maps.Marker({
      position: hortolandia,
      map: map,
    });
  const marker3 = new google.maps.Marker({
    position: sumare,
    map: map,
  });
const marker4 = new google.maps.Marker({
  position: americana,
  map: map,
});
const marker5 = new google.maps.Marker({
  position: rio_claro,
  map: map,
});
const marker6 = new google.maps.Marker({
  position: piracicaba,
  map: map,
});
const marker7 = new google.maps.Marker({
  position: paulinia,
  map: map,
});
const marker8 = new google.maps.Marker({
  position: jundiai,
  map: map,
});
const marker9 = new google.maps.Marker({
  position: braganca,
  map: map,
});
const marker10 = new google.maps.Marker({
  position: itatiba,
  map: map,
});
const marker11 = new google.maps.Marker({
  position: atibaia,
  map: map,
});
const marker12 = new google.maps.Marker({
  position: sorocaba,
  map: map,
});
const marker13 = new google.maps.Marker({
  position: itu,
  map: map,
});
const marker14 = new google.maps.Marker({
  position: boituva,
  map: map,
});
const marker15 = new google.maps.Marker({
  position: sao_carlos,
  map: map,
});
const marker16 = new google.maps.Marker({
  position: araraquara,
  map: map,
});
const marker17 = new google.maps.Marker({
  position: mococa,
  map: map,
});
const marker18 = new google.maps.Marker({
  position: serra_negra,
  map: map,
});
const marker19 = new google.maps.Marker({
  position: jaguariuna,
  map: map,
});
const marker20 = new google.maps.Marker({
  position: pedreira,
  map: map,
});
const marker21 = new google.maps.Marker({
  position: itapira,
  map: map,
});
const marker22 = new google.maps.Marker({
  position: sao_paulo,
  map: map,
});
const marker23 = new google.maps.Marker({
  position: porto_ferreira,
  map: map,
});
const marker24 = new google.maps.Marker({
  position: sj_boa_vista,
  map: map,
});
const marker25 = new google.maps.Marker({
  position: sj_rio_pardo,
  map: map,
});
  }
  window.initMap = initMap;