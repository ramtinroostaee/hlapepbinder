"use client"

import {
  Button, CircularProgress,
  FormControl, InputAdornment, InputLabel, MenuItem, Select,
  TextField
} from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { formSample, sample } from "@/Components/testing";
import Tables from "@/Components/Tables";

const lengths = [8, 9, 10, 11, 12, 13, 14];

export function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const inputs = ["input_sequence_text", "Alleles", "length"];
let count = 0;

const Form = ({ submit, getResult, getModelResult }) => {
  const [submitResults, setSubmitResults] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const isSubmitted = useMemo(() => Object.keys(formData).length > 0, [formData]);

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
          if (undoneIndex === -1) {
            undoneIndex = index;
          }
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
            const that = submitResults[undoneIndex];
            await getResult([that?.status === "pending" ? `https://api-nextgen-tools.iedb.org/api/v1/results/${that.id}` : that]).then((res) => {
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
    form.Alleles = "HLA-" + form.Alleles;
    console.log(form);
    setFormData(form);
    setLoading(true);
  }, []);

  return (submitResults.length === 0 ? <>
      <form action={action} className={"flex flex-col justify-center"}>
        <p>Enter protein sequence(s) in FASTA format
          or as whitespace-separated sequences.
        </p>
        <TextField sx={{ margin: "24px 0" }} fullWidth multiline name="input_sequence_text" label="sequence"
                   variant="outlined"/>
        <div className={"flex justify-center"}>
          <TextField className={"mb-10"}
                     label="Alleles"
                     name="Alleles"
                     variant={"outlined"}
                     fullWidth
                     sx={{ marginRight: "10px" }}
                     InputProps={{
                       startAdornment: <InputAdornment position="start">HLA-</InputAdornment>,
                     }}
          />
          <FormControl fullWidth sx={{ marginLeft: "10px" }}>
            <InputLabel>Length</InputLabel>
            <Select
              id="demo-simple-select"
              defaultValue={lengths[0]}
              label="length"
              name={"length"}
            >
              {lengths.map((source) =>
                <MenuItem key={source} value={source}>{source}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
        <Button sx={{ margin: "24px 0" }} disabled={isSubmitted} type={"submit"} variant="outlined">Submit</Button>
      </form>
      {loading && <CircularProgress/>}
    </> : <Tables submitResults={submitResults} formData={formData} getModelResult={getModelResult}/>
  );
};

export default Form;
