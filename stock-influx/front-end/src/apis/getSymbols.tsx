import { dev_requestDomain } from "../utils/url";

const GetSymbols = async () => {
  return await fetch(`${dev_requestDomain}/v1/api/symbols`);
};

export default GetSymbols;
