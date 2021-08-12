export function nbMonths(startPriceOld: number, startPriceNew: number, savingperMonth: number, percentLossByMonth: number): number[] {
    let months = 0
    let savings = 0
    while (startPriceOld + savings < startPriceNew) {
        months += 1
        percentLossByMonth += months % 2 ? 0 : 0.5
        savings += savingperMonth
        startPriceOld *= (1-percentLossByMonth)
        startPriceNew *= (1-percentLossByMonth)
    }
    return [months, Math.round(savings + startPriceOld - startPriceNew)]
}