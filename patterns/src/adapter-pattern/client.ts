import { FxService } from "./FxService";
import { JPMAdapter } from "./JPMadapter";
import { JPMService } from "./JPMService";

const fxService = new FxService();

console.log(fxService.fetchFXRates("usd", "inr", 100));

const jpm_service = new JPMAdapter(new JPMService());

console.log(jpm_service.fetchFXRates("usd", "inr", 100));
