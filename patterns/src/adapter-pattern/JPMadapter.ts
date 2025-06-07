import { IFxService } from "./FxService";
import { JPMService } from "./JPMService";

export class JPMAdapter implements IFxService {
  constructor(private jpmService: JPMService) {} //adaptee

  fetchFXRates(source: string, target: string, amount: number): number {
    const rates = this.jpmService.fetchJPMRates(amount, source, target);
    return rates;
  }
}

// export class BarclaysAdapter implements IFxService {
//   constructor(private barclays: Barclays) {} //adaptee

//   fetchFXRates(source: string, target: string, amount: number): number {
//     const rates = this.barclays.fetchBarclaysRates(amount, source, target);
//     return rates;
//   }
// }
