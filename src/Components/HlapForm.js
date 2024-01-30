"use client"

import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";

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

const Form = ({ submit }) => {
    const [the, setThe] = useState();
    return (
        <form action={(formData) => submit(formData).then((data) => {
            setThe(data);
            console.log(formData);
            console.log(data);
        })}>
            <p>Enter protein sequence(s) in FASTA format
                or as whitespace-separated sequences.
            </p>
            <FormControl fullWidth>
                <TextField className={"my-10"} name="sequence" label="sequence" variant="outlined"/>
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