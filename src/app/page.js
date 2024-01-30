import axios from "axios";
import HlapForm from "@/Components/HlapForm";

axios.defaults.headers.common["Content-Type"] = 'application/json';
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.withCredentials = true;
axios.defaults.baseURL = "https://api-nextgen-tools.iedb.org/";

async function submit(formData) {
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
            "input_sequence_text": formData.get("input_sequence_text"),
            "input_parameters": {
                "alleles": "HLA-A*01:01",
                "peptide_length_range": null,
                "predictors": [{"type": "binding", "method": "netmhcpan_el"}]
            },
            "table_state": {"columns": {}}
        }]
    };
    const allPredictors = ["ann", "consensus", "netmhcpan_ba", "netmhcpan_el", "smm", "smmpmbec", "pickpocket", "netmhccons", "netmhcstabpan"];
    const allPromise = allPredictors.map((method) =>
        axios({
            url: "/api/v1/pipeline",
            method: "post",
            data: {
                ...the,
                stages: [{
                    ...the.stages[0],
                    input_parameters: {
                        ...the.stages[0].input_parameters,
                        predictors: [{"type": "binding", method}]
                    }
                }]
            }
        }).then(res => res.data.errors ? res.data : res?.data?.results_uri)
    );

    // const allPromise = allPredictors.map((method) =>
    //     ({
    //         data: {
    //             ...the,
    //             stages: [{
    //                 ...the.stages[0],
    //                 input_parameters: {
    //                     ...the.stages[0].input_parameters,
    //                     predictors: [{"type": "binding", method}]
    //                 }
    //             }]
    //         }
    //     })
    // );
    // return allPromise;

    const response = await Promise.all(allPromise);
    return response;

    // const that = await axios({
    //   url: "/api/v1/pipeline",
    //   method: "post",
    //   data: the,
    // });
    // console.log(that.data.results_uri);
    //
    // return that.data.results_uri;
};

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <HlapForm submit={submit}/>
        </main>
    )
}
