import axios from "axios";
import HlapForm from "@/Components/HlapForm";

axios.defaults.headers.common["Content-Type"] = 'application/json';
// axios.defaults.baseURL = "https://api-nextgen-tools.iedb.org/";

export const allPredictors = ["ann", "consensus", "netmhcpan_ba", "netmhcpan_el", "smm", "smmpmbec", "pickpocket", "netmhccons", "netmhcstabpan"];

export function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function firstApiCall(apiArray) {
  return await Promise.all(apiArray.map((api) => axios(api).then(res => res.data.errors ? res.data : res?.data?.results_uri).catch((err) => {
    console.log(err)
    return { errors: ["500 error from mhci"] }
  })));
}

async function submit(formData) {
  "use server"

  const url = "https://api-nextgen-tools.iedb.org/api/v1/pipeline";
  const range = Number(formData.length);
  const peptide_length_range = [range, range];
  const the = {
    "pipeline_id": "",
    "pipeline_title": "",
    "email": "mahsasdt97@gmail.com",
    "run_stage_range": [1, 1],
    "stages": [{
      "stage_display_name": "T-Cell Prediction",
      "stage_number": 1,
      "stage_type": "prediction",
      "tool_group": "mhci",
      "input_sequence_text": formData.input_sequence_text,
      "input_parameters": {
        "alleles": formData.Alleles,
        peptide_length_range,
      },
      "table_state": { "columns": {} }
    }]
  };

  const responses = [];
  const allApi = allPredictors.map((method) => ({
    url,
    method: "post",
    data: {
      ...the,
      stages: [{
        ...the.stages[0],
        input_parameters: {
          ...the.stages[0].input_parameters,
          predictors: [{ "type": "binding", method }]
        }
      }]
    }
  }));

  const one = await firstApiCall(allApi.slice(0, 4));

  await timeout(2000);
  const two = await firstApiCall(allApi.slice(4, 6));

  await timeout(1000);
  const three = await firstApiCall(allApi.slice(6));

  return [...one, ...two, three];
}

const getResult = async (urlArray) => {
  "use server"

  const results = urlArray.map((result) =>
    typeof result === "string" ? axios({
      url: result,
    }).then((res) => res.data) : result
  );

  return await Promise.all(results);
}

const getModelResult = async (requestBody) => {
  "use server"

  const data = await axios({ data: requestBody, url: "http://5.34.201.187:4856/hlap", method: "post" });
  return data?.data;
}

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <HlapForm submit={submit} getResult={getResult} getModelResult={getModelResult}/>
    </main>
  )
}
