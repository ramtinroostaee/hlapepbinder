"use client"

import {
    Button, CircularProgress,
    FormControl, InputAdornment,
    TextField
} from "@mui/material";
import {useCallback, useState} from "react";
import {formSample, sample} from "@/Components/testing";
import Tables from "@/Components/Tables";

const sourceSpecies = [
    {text: "chimpanzee", value: "chimpanzee"},
    {text: "cow", value: "cow"},
    {text: "gorilla", value: "gorilla"},
    {text: "human", value: "human"},
    {text: "macaque", value: "macaque"},
    {text: "mouse", value: "mouse"},
    {text: "pig", value: "pig"},
    {text: "dog", value: "dog"},
    {text: "horse", value: "horse"},
]

export function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const inputs = ["input_sequence_text", "Alleles"];

const Form = ({submit, getResult}) => {
    const [submitResults, setSubmitResults] = useState([]);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    const action = useCallback(async (formData) => {
        const form = {};
        inputs.forEach((input) => {
            form[input] = formData.get(input);
        });
        form.Alleles = "HLA-A*" + form.Alleles;
        console.log(form)
        setFormData(form);

        const data = await submit(form);
        setSubmitResults(data);
        console.log(data);

        let allDone = false;
        const firstValid = data.findIndex((result) => typeof result === "string");
        if (firstValid !== -1) {
            let first = null;
            while (!allDone) {
                console.log("alive")
                await timeout(3000);
                await getResult([data[firstValid]]).then((res) => {
                    console.log(res[0]);
                    if (res[0].status !== "pending") {
                        allDone = true;
                        first = res;
                    }
                    console.log("alive again")
                });
            }
            getResult(data).then((response) => {
                console.log(response);
                setSubmitResults(response);
            });
        }
    }, [getResult, submit]);

    return (submitResults.length === 0 ? <>
            <form action={action}>
                <p>Enter protein sequence(s) in FASTA format
                    or as whitespace-separated sequences.
                </p>
                <FormControl className={"my-10"} fullWidth>
                    <TextField name="input_sequence_text" label="sequence" variant="outlined"/>
                </FormControl>
                <TextField fullWidth className={"mb-10"}
                           label="Alleles"
                           name="Alleles"
                           variant={"outlined"}
                           InputProps={{
                               startAdornment: <InputAdornment position="start">HLA-A*</InputAdornment>,
                           }}
                />

                <Button type={"submit"} onClick={() => setLoading(true)} variant="outlined">Submit</Button>
            </form>
            {loading && <CircularProgress/>}
        </> : <Tables submitResults={submitResults} formData={formData} />
    );
};

export default Form;


{/*<FormControl fullWidth>*/
}
{/*    <InputLabel id="demo-simple-select-label">Age</InputLabel>*/
}
{/*    <Select*/
}
{/*        labelId="demo-simple-select-label"*/
}
{/*        id="demo-simple-select"*/
}
{/*        value={species}*/
}
{/*        label="Age"*/
}
{/*        onChange={(select) => {*/
}
{/*            setSpecies(select.target.value.toString())*/
}
{/*        }}*/
}
{/*    >*/
}
{/*        {sourceSpecies.map((source) => <MenuItem key={source.value} name={source.text}*/
}
{/*                                                 value={source.value}>{source.text}</MenuItem>)}*/
}
{/*    </Select>*/
}
{/*</FormControl>*/
}