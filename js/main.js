const test = () => {
    const ingridients = [
        { id: 'e88', name: 'картошка', alergen: false, kkal: 100 },
        { id: '08a', name: 'лук', alergen: true, kkal: 200 },
        { id: 'a0b', name: 'шкварки', alergen: false, kkal: 300 },
        { id: '0dd', name: 'бульйон', alergen: true, kkal: 400 },
        { id: 'd12', name: 'морковка', alergen: false, kkal: 500 },
        { id: '8a1', name: 'оливковая олия', alergen: false, kkal: 600 }
      ];

    const result = {
        status: 'ok',
        ingridients, // ingridients: ingridients,
        payload: {
        error: 'test_fail',
        message: 'тест не пройден'
        }
    }

  return result;
}

const getkKalAlergenProduct = (ingridients) => {
    const sumKkal = ingridients.reduce((sum, ingridient) => {
        if (ingridient.alergen === true) {
            sum+= ingridient.kkal;
        } else {
            sum += 0;
        }

        return sum;
    },0);
    return sumKkal;
}

const {ingridients} = test();

console.log(getkKalAlergenProduct(ingridients));