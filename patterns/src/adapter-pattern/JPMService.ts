export class JPMService {
  fetchJPMRates(amount: number, source: string, target: string): number {
    console.log(
      `JPM fetching FX rates and calulcate -> source - ${source} and Target - ${target} and amount - ${amount}`,
    );

    return amount * 3; // triple
  }
}
