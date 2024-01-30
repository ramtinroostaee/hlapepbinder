import { Button, FormControl, TextField } from "@mui/material";
import axios from "axios";

axios.defaults.headers.common["Content-Type"] = 'application/json';
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.withCredentials = true;
axios.defaults.baseURL = "https://api-nextgen-tools.iedb.org/";

async function submit (formData) {
  "use server"

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
      "input_sequence_text": ">ITKVFSFWLLCKLS\nITKVFSFWLLCKLS\n>KPVAFAVKTNVSYC\nKPVAFAVKTNVSYC\n>DLLDPKGSRQSLKV\nDLLDPKGSRQSLKV",
      "input_parameters": {
        "alleles": "HLA-A*01:01",
        "peptide_length_range": null,
        "predictors": [{ "type": "binding", "method": "netmhcpan_el" }]
      },
      "table_state": { "columns": {} }
    }]
  };

  const that = await axios({
    url: "/api/v1/pipeline",
    method: "post",
    data: the,
    // headers: {
    //     "Access-Control-Allow-Origin": "https://api-nextgen-tools.iedb.org",
    //     "Access-Control-Allow-Methods": "POST"
    // }
  });
  console.log(that.data);
  console.log(formData);

  return that.data;
};

export default function Home() {
  // const [species, setSpecies] = useState<string>("");

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <form action={submit}>
          <p>Enter protein sequence(s) in FASTA format
            or as whitespace-separated sequences.
          </p>
          <FormControl fullWidth>
            <TextField className={"my-10"} name="sequence" variant="outlined"/>
          </FormControl>
          <Button type={"submit"} variant="outlined">Submit</Button>
        </form>
      </main>
  )
}
