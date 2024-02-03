"use client"

import {
    Button, CircularProgress,
    FormControl, InputAdornment,
    TextField
} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
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
    console.log(formData);

    useEffect(() => {
        if (Object.keys(formData).length) {
            async function fetchMyAPI() {
                const resultUrl = await submit(formData);
                console.log(resultUrl);

                let done = false;
                while (!done) {
                    console.log("alive");
                    await timeout(3000);
                    await getResult(resultUrl).then((res) => {
                        console.log(res);
                        console.log("alive again");
                        if (res.status !== "pending") {
                            done = true;
                            // setSubmitResults(res);
                        }
                    });
                }
            }

            fetchMyAPI()
        }
    }, [formData]);

    const action = useCallback((formData) => {
        const form = {};
        inputs.forEach((input) => {
            form[input] = formData.get(input);
        });
        form.Alleles = "HLA-A*" + form.Alleles;
        setFormData(form);
        setLoading(true);


        // setSubmitResults(data);
        // console.log(data);
        //
        // let allDone = false;
        // const firstValid = data.findIndex((result) => typeof result === "string");
        // if (firstValid !== -1) {

        //     getResult(data).then((response) => {
        //         console.log(response);
        //         setSubmitResults(response);
        //     });
        // }
    }, []);

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

                <Button type={"submit"} variant="outlined">Submit</Button>
            </form>
            {loading && <CircularProgress/>}
        </> : <Tables submitResults={submitResults} formData={formData}/>
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