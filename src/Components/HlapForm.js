"use client"

import {
    Button, CircularProgress,
    FormControl, InputAdornment,
    TextField
} from "@mui/material";
import {useCallback, useEffect, useMemo, useState} from "react";
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
let count = 0;

const Form = ({submit, getResult, getModelResult}) => {
    const [submitResults, setSubmitResults] = useState(sample);
    const [formData, setFormData] = useState(formSample);
    const [loading, setLoading] = useState(false);

    const isSubmitted = useMemo(() => Object.keys(formData).length > 0)

    useEffect(() => {
        if (isSubmitted && submitResults.length <= 0) {
            async function fetchMyAPI() {
                const data = await submit(formData);
                setSubmitResults(data);
                console.log(data);
            }

            fetchMyAPI()
        }
    }, [formData, isSubmitted]);

    useEffect(() => {
        if (submitResults.length) {
            let undoneIndex = -1;
            let anyoneDone = false;
            submitResults.forEach((result, index) => {
                if (typeof result === "string" || result?.status === "pending") {
                    undoneIndex = index;
                } else if (result?.status === "done") {
                    anyoneDone = true;
                }
            });

            if (undoneIndex !== -1) {
                if (anyoneDone) {
                    async function fetchAll() {
                        await getResult(submitResults?.map((res) =>
                            res?.status === "pending" ? `https://api-nextgen-tools.iedb.org/api/v1/results/${res.id}` : res
                        )).then((response) => {
                            console.log(response);
                            setSubmitResults(response);
                        });
                    }

                    fetchAll();
                } else {
                    async function fetchOne() {
                        console.log("alive");
                        await timeout(3000);
                        await getResult([submitResults[undoneIndex]]).then((res) => {
                            console.log(res[0]);
                            console.log(count++);
                            setSubmitResults((pre) => {
                                const the = [...pre];
                                the[undoneIndex] = res[0];
                                return the;
                            });
                        });
                    }

                    fetchOne();
                }
            }
        }
    }, [submitResults]);

    const action = useCallback(async (formData) => {
        const form = {};
        inputs.forEach((input) => {
            form[input] = formData.get(input);
        });
        form.Alleles = "HLA-A*" + form.Alleles;
        console.log(form);
        setFormData(form);
        setLoading(true);
    }, []);

    return (submitResults.length === 0 ? <>
            <form action={action}>
                <p>Enter protein sequence(s) in FASTA format
                    or as whitespace-separated sequences.
                </p>
                <FormControl className={"my-10"} fullWidth>
                    <TextField multiline name="input_sequence_text" label="sequence" variant="outlined"/>
                </FormControl>
                <TextField fullWidth className={"mb-10"}
                           label="Alleles"
                           name="Alleles"
                           variant={"outlined"}
                           InputProps={{
                               startAdornment: <InputAdornment position="start">HLA-A*</InputAdornment>,
                           }}
                />
                <Button disabled={isSubmitted} type={"submit"} variant="outlined">Submit</Button>
            </form>
            {loading && <CircularProgress/>}
        </> : <Tables submitResults={submitResults} formData={formData} getModelResult={getModelResult} />
    );
};

export default Form;
