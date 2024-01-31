import axios from "axios";
import HlapForm from "@/Components/HlapForm";

axios.defaults.headers.common["Content-Type"] = 'application/json';
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.withCredentials = true;
// axios.defaults.baseURL = "https://api-nextgen-tools.iedb.org/";

export const allPredictors = ["ann", "consensus", "netmhcpan_ba", "netmhcpan_el", "smm", "smmpmbec", "pickpocket", "netmhccons", "netmhcstabpan"];

export function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function submit(formData) {
  "use server"

  const url = "https://api-nextgen-tools.iedb.org/api/v1/pipeline"
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
      "input_sequence_text": formData.get("input_sequence_text"),
      "input_parameters": {
        "alleles": "HLA-A*01:01",
        "peptide_length_range": null,
      },
      "table_state": { "columns": {} }
    }]
  };
  const allPromise = allPredictors.map((method) =>
    axios({
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
    }).then(res => res.data.errors ? res.data : res?.data?.results_uri)
  );

  return await Promise.all(allPromise);
}

const getResult = async (urlArray) => {
  "use server"

  const results = urlArray.map((result) =>
    typeof result === "string" ? axios({
      url: result,
    }).then((res) => res.data) : null
  );

  return await Promise.all(results);
}

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HlapForm submit={submit} getResult={getResult}/>
    </main>
  )
}

const hhh = {
  "id": "039be395-bf73-43d3-950b-d65b9900f390",
  "type": "result",
  "data": {
    "results": [
      {
        "type": "peptide_table",
        "table_data": [
          [
            1,
            "LFGRDLSY",
            1,
            8,
            8,
            "HLA-A*01:01",
            1,
            16.0,
            11064.709088124373,
            16.0
          ]
        ],
        "table_columns": [
          {
            "name": "sequence_number",
            "type": "int",
            "hidden": false,
            "source": "core",
            "sort_order": 0,
            "description": "Index of the input sequence among all input sequences.",
            "display_name": "seq #",
            "value_limits": {
              "max": 1.0,
              "min": 1.0
            },
            "default_order": "ascending",
            "row_sort_priority": 2
          },
          {
            "name": "peptide",
            "type": "text",
            "hidden": false,
            "source": "core",
            "sort_order": 3,
            "description": "Peptide sequence sequence",
            "display_name": "peptide",
            "value_limits": {
              "unique_values": [
                "LFGRDLSY"
              ]
            },
            "default_order": null,
            "row_sort_priority": null
          },
          {
            "name": "start",
            "type": "int",
            "hidden": false,
            "source": "core",
            "sort_order": 1,
            "description": "Peptide sequence start within the context of the input sequence",
            "display_name": "start",
            "value_limits": {
              "max": 1.0,
              "min": 1.0
            },
            "default_order": null,
            "row_sort_priority": null
          },
          {
            "name": "end",
            "type": "int",
            "hidden": false,
            "source": "core",
            "sort_order": 2,
            "description": "Peptide sequence end within the context of the input sequence",
            "display_name": "end",
            "value_limits": {
              "max": 8.0,
              "min": 8.0
            },
            "default_order": null,
            "row_sort_priority": null
          },
          {
            "name": "length",
            "type": "int",
            "hidden": false,
            "source": "core",
            "sort_order": 4,
            "description": "Peptide sequence length",
            "display_name": "peptide length",
            "value_limits": {
              "max": 8.0,
              "min": 8.0
            },
            "default_order": null,
            "row_sort_priority": null
          },
          {
            "name": "allele",
            "type": "text",
            "hidden": false,
            "source": "core",
            "sort_order": 5,
            "description": "MHC allele used in the prediction",
            "display_name": "allele",
            "value_limits": {
              "unique_values": [
                "HLA-A*01:01"
              ]
            },
            "default_order": null,
            "row_sort_priority": null
          },
          {
            "name": "peptide_index",
            "type": "int",
            "hidden": true,
            "source": "core",
            "sort_order": 6,
            "description": "Serial number of the peptide among all peptides",
            "display_name": "peptide index",
            "value_limits": {
              "max": 1.0,
              "min": 1.0
            },
            "default_order": null,
            "row_sort_priority": null
          },
          {
            "name": "median_percentile",
            "type": "float",
            "hidden": false,
            "source": "binding",
            "sort_order": 2,
            "description": "The median percentile rank of binding predictions",
            "display_name": "median binding percentile",
            "value_limits": {
              "max": 16.0,
              "min": 16.0
            },
            "default_order": "ascending",
            "number_of_digits": null,
            "row_sort_priority": 0
          },
          {
            "name": "ic50",
            "type": "float",
            "hidden": false,
            "source": "binding.smm",
            "sort_order": 1,
            "description": "Measured in (nM). Lower number indicates higher affinity.",
            "display_name": "smm IC50",
            "value_limits": {
              "max": 11064.709088124373,
              "min": 11064.709088124373
            },
            "default_order": "ascending",
            "number_of_digits": 2,
            "row_sort_priority": 1
          },
          {
            "name": "percentile",
            "type": "float",
            "hidden": false,
            "source": "binding.smm",
            "sort_order": 1,
            "description": "The percentile rank generated by comparing the peptide's IC50 against those of a set of random peptides from SWISSPROT database",
            "display_name": "smm percentile",
            "value_limits": {
              "max": 16.0,
              "min": 16.0
            },
            "default_order": "ascending",
            "number_of_digits": null,
            "row_sort_priority": null
          }
        ]
      },
      {
        "type": "input_sequence_table",
        "table_columns": [
          {
            "name": "sequence_number",
            "display_name": "seq #",
            "type": "int",
            "source": "core",
            "sort_order": 0,
            "row_sort_priority": 0,
            "default_order": "ascending",
            "description": "the index of sequence",
            "hidden": false
          },
          {
            "name": "sequence_name",
            "display_name": "sequence name",
            "type": "text",
            "source": "core",
            "sort_order": 0,
            "row_sort_priority": null,
            "default_order": null,
            "description": "the name of sequence",
            "hidden": false
          },
          {
            "name": "sequence",
            "display_name": "sequence",
            "type": "text",
            "source": "core",
            "sort_order": 0,
            "row_sort_priority": null,
            "default_order": null,
            "description": "sequence",
            "hidden": false
          }
        ],
        "table_data": [
          [
            1,
            "sequence 1",
            "LFGRDLSY"
          ]
        ]
      }
    ],
    "errors": [],
    "warnings": []
  },
  "status": "done"
}
