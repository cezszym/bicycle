import React from 'react';
import BikeBox from './BikeBox/BikeBox.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bicycles</h1>
      </header>
      <div className="boxContainer">
        <BikeBox
          name="Rower miejski"
          desc="napędu oraz ograniczenia masy stosuje się napędy z ilością biegów w przedziale 11-22 (1 lub 2 biegi z przodu i 10-12 przełożeń z tyłu). Coraz bardziej popularne stają się napędy z jedną zębatką z przodu i nawet "
          img="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iksKg0.jBhHk/v1/1000x-1.jpg"
        />
        <BikeBox
          name="Rower soszowy"
          desc="nazwa rowerów, których przeznaczeniem jest jazda w terenie trudniejszym, niż pozwalają na to rowery szosowe czy trekingowe, np. górskie ścieżki, szlaki leśne, specjalne tory przeszkód.adsasdsa"
          img="https://thumbs.img-sprzedajemy.pl/1000x901c/ec/b4/14/rower-szosa-motobecane-kolarka-limitowana-seria-slaskie-chorzow-509610210.jpg"
        />
        <BikeBox
          name="Rower górski"
          desc="Rowery MTB wyposażane sa w małe ramy (rama MTB jest mniejsza o 1-2 cale niż rama trekingowa przeznaczona dla rowerzysty o tej samej długości nogi)[1]. W celu zwiększenia prześwitu ramy wyposażone są w wyżej położoną oś suportu. Zwiększenie zwrotności jest osiągane z jednej strony przez zmniejszenie długości ramy, z drugiej dzięki większemu kątowi osi rury podsiodłowej i główki ramy[2]. W geometrii r"
          img="https://www.bikko.pl/media/catalog/product/cache/1/image/b38cf51ec77170b109c5e310157197eb/k/1/k19068_vanity_20_white.jpg"
        />
      </div>
    </div>
  );
}

export default App;
