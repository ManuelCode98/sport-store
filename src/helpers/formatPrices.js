// Lo formateo para que sea en pesos colombianos
export const formatPrices = ( result )=>{

    const totalToPay = result.toLocaleString('es-CO',
      { style: 'currency', currency: 'COP' }
    );

    return totalToPay

}