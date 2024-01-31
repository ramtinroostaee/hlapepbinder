"use client"

import { Button, FormControl, TextField } from "@mui/material";
import { useCallback, useState } from "react";

// python3 hlapepbinder.py ann 41841.86 consensus 70.500 netmhcpan_ba 42170.00 netmhcpan_el 0.000182 smm 197983.956993 smmpmbec 174968.552921 pickpocket 50000.000000 netmhccons 41375.00 netmhcstabpan 0.11
const sourceSpecies = [
  { text: "chimpanzee", value: "chimpanzee" },
  { text: "cow", value: "cow" },
  { text: "gorilla", value: "gorilla" },
  { text: "human", value: "human" },
  { text: "macaque", value: "macaque" },
  { text: "mouse", value: "mouse" },
  { text: "pig", value: "pig" },
  { text: "dog", value: "dog" },
  { text: "horse", value: "horse" },
]
// export type response = {
//     result_id: string,
//     results_uri: string,
//     pipeline_id: string,
//     pipeline_uri: string,
//     pipeline_spec_id: string,
//     pipeline_spec_uri: string,
//     warnings: string[],
//     input_sequence_text_id: string,
//     input_sequence_text_uri: string,
// }

const finalResultsInitialState = {
  status: "pending",

}

const inputs = ["input_sequence_text"]

const Form = ({ submit, getResult }) => {
  const [submitResults, setSubmitResults] = useState([]);
  const [formData, setFormData] = useState({});

  // useEffect(() => {
  //     if (submitResults.length) {
  //         const get = async (response) => {
  //             const results = response.map((result) =>
  //                 typeof result === "string" ? axios({
  //                     url: result,
  //                 }) : null
  //             );
  //             Promise.all(results);
  //         }
  //         get(submitResults);
  //     }
  // }, [submitResults]);

  const action = useCallback((formData) => {
    setFormData(() => {
      const form = {};
      inputs.forEach((input) => {
        form[input] = formData.get(input);
      })
    });
    submit(formData).then((data) => {
      setSubmitResults(data);
      console.log(data);

      const firstValid = data.findIndex((result) => typeof result === "string");
      firstValid !== -1 && getResult([data[firstValid]]).then((res) => setSubmitResults((pre) => {
        console.log(res);
        const the = [...pre];
        the[firstValid] = res[0];
        return the;
      }));
    })
  }, [getResult, submit]);

  return (
    <form action={action}>
      <p>Enter protein sequence(s) in FASTA format
        or as whitespace-separated sequences.
      </p>
      <FormControl className={"my-10"} fullWidth>
        <TextField name="input_sequence_text" label="sequence" variant="outlined"/>
      </FormControl>

      {/*<FormControl fullWidth>*/}
      {/*    <InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
      {/*    <Select*/}
      {/*        labelId="demo-simple-select-label"*/}
      {/*        id="demo-simple-select"*/}
      {/*        value={species}*/}
      {/*        label="Age"*/}
      {/*        onChange={(select) => {*/}
      {/*            setSpecies(select.target.value.toString())*/}
      {/*        }}*/}
      {/*    >*/}
      {/*        {sourceSpecies.map((source) => <MenuItem key={source.value} name={source.text}*/}
      {/*                                                 value={source.value}>{source.text}</MenuItem>)}*/}
      {/*    </Select>*/}
      {/*</FormControl>*/}
      <Button type={"submit"} variant="outlined">Submit</Button>
    </form>
  );
};

export default Form