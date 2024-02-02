"use client"

import {
    Button, CircularProgress,
    FormControl, InputAdornment,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import {useCallback, useState} from "react";
import {formSample, sample} from "@/Components/testing";

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
    const [submitResults, setSubmitResults] = useState(sample);
    const [formData, setFormData] = useState(formSample);
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
                    if (res[0].status === "done") {
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
        </> : <>
            <TableContainer sx={{maxWidth: 650}} component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Input Sequence Text</TableCell>
                            <TableCell align="right">Alleles</TableCell>
                            {/*<TableCell align="right">Alleles Length</TableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell component="th" scope="row">{formData.input_sequence_text}</TableCell>
                            <TableCell align="right">{formData.Alleles}</TableCell>
                            {/*<TableCell align="right">{formData.Alleles}</TableCell>*/}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div className={"mt-8"}>{submitResults?.findIndex(res => typeof res === "string") !== -1 && <CircularProgress/>}</div>
        </>
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