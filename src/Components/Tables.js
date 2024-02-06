"use client";

import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { Fragment, useEffect, useMemo, useState } from "react";

const Tables = ({ submitResults, formData, getModelResult }) => {
  const [modelResult, setModelResult] = useState({});
  const [allDataReady, setAllDataReady] = useState(false);

  useEffect(() => {
    let ready = true;
    submitResults.forEach((result) => {
      ready = ready && typeof result !== "string" && (result?.errors || result?.status !== "pending");
    })
    setAllDataReady(ready);
  }, [submitResults]);

  const realInputs = useMemo(() => {
    let all = null;
    const realResponseIndex = submitResults.findIndex((result) => !result.errors && result.status === "done");
    if (realResponseIndex !== -1) {
      all = [];
      submitResults[realResponseIndex]?.data?.results[0]?.table_data?.forEach((data) => {
        all.push(data[1]);
      });
      console.log(all);
    }

    return all;
  }, [submitResults]);

  useEffect(() => {
    if (allDataReady && realInputs) {
      const peptide = {};
      realInputs.forEach((input) => peptide[input] = {})

      submitResults.map((result, index) => {
        if (!result.errors && result.status === "done") {
          if (result?.data?.results[0]) {
            result?.data?.results[0]?.table_data?.map((data) => {
              peptide[data[1]][index] = data[scoreValues[index]];
            });
          }
        }
      });
      console.log(peptide);
      const requestBody = {};
      Object.keys(peptide).forEach((pep) => {
        requestBody[pep] = [];
        [0, 1, 2, 3, 4, 5, 6, 7, 8].forEach((index) => {
          requestBody[pep].push(peptide[pep][index] ?? 0);
        });
      });

      console.log(requestBody);

      async function fetchMyAPI() {
        const modelResults = await getModelResult(requestBody);
        setModelResult(modelResults);
        console.log(modelResults);
      }

      fetchMyAPI()
    }
  }, [allDataReady, submitResults, realInputs]);

  const showModelData = useMemo(() => {
    if (allDataReady && Object.keys(submitResults).length) {
      const isLarge = realInputs.length >= 10;
      let rows = realInputs.map((peptide) =>
        <TableRow key={peptide} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">{peptide}</TableCell>
          <TableCell align="right">{modelResult[peptide]}</TableCell>
        </TableRow>);
      if (isLarge) {
        let data = [...realInputs];
        const the = [];
        for (let i = 0; i < (data.length % 2 === 1 ? data.length / 2 + 1 : data.length / 2) - 1; i++) {
          the.push(i);
        }
        rows = the.map((index) => {
          const data1 = data.shift();
          const data2 = data.shift();

          return (<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{data1}</TableCell>
            <TableCell align="right">{modelResult[data1]}</TableCell>
            <TableCell>{data2 ?? ""}</TableCell>
            <TableCell align="right">{data2 ? modelResult[data2] : ""}</TableCell>
          </TableRow>)
        });
      }

      const headers = (index) => (<Fragment key={index}><TableCell>Peptide</TableCell>
        <TableCell align="right">Model Result (Binded?)</TableCell></Fragment>);

      return (
        <div className={"max-w-[650px] my-8"}>
          <h2 className={"text-lg"}>Model Results: </h2>
          <p className={"pb-8"}>The binary values of 1 or 0 are utilized to denote the presence or absence of
            binding between a
            peptide and HLA (Human Leukocyte Antigen). Specifically, a value of 1 indicates binding, while a
            value of 0 signifies non-binding.</p>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {isLarge ? [0, 1].map(headers) : [0].map(headers)}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
    }
  }, [allDataReady, realInputs, modelResult]);

  return (<>
    <TableContainer sx={{ maxWidth: 650 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Input Sequence Text</TableCell>
            <TableCell align="right">Alleles</TableCell>
            {/*<TableCell align="right">Alleles Length</TableCell>*/}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{formData.input_sequence_text}</TableCell>
            <TableCell align="right">{formData.Alleles}</TableCell>
            {/*<TableCell align="right">{formData.Alleles}</TableCell>*/}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    {showModelData}
    <div className={"mt-8"}>{submitResults?.findIndex(res => typeof res === "string") !== -1 &&
      <CircularProgress/>}</div>

    <h2 className={"-mb-8"}>MHC-I binding predictions Data</h2>
    <div className={"max-w-[850px]"}>
      {submitResults.map((result, index) => {
        if (result?.errors?.length) {
          return (<div key={allPredictors[index]} className={"my-8"}>
            <b>{allPredictors[index]}:</b> {result?.errors[0]}
          </div>);
        } else if (typeof result !== "string") {
          if (result?.status === "error") {
            return (<div key={allPredictors[index]} className={"my-8"}>
              <b>{allPredictors[index]}:</b> {result?.data?.errors[0]}
            </div>);
          } else if (result?.status === "done") {
            return <TableMaker key={allPredictors[index]} result={result?.data?.results[0]} index={index}/>;
          }
        }
      })}
    </div>
  </>)
}

export default Tables;

const TableMaker = ({ result, index }) => {

  return (
    <>
      <h3 className={"text-center mt-16"}>{(allPredictors[index]?.toUpperCase())}</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {predictionTables[index].map((i, cellIndex) => {
                  const style = cellIndex === 0 ? { component: "th", scope: "row" } : { align: "left" };
                  return (<TableCell {...style} key={result?.table_columns[i].display_name}>
                    {result?.table_columns[i].display_name}
                  </TableCell>)
                }
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {result?.table_data?.map((dataArray, dataIndex) =>
              <TableRow key={dataIndex} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {predictionTables[index].map((i, cellIndex) => {
                  const style = cellIndex === 0 ? { component: "th", scope: "row" } : { align: "left" };
                  return (<TableCell
                    key={result?.table_columns[i].display_name} {...style}>{dataArray[i]}</TableCell>)
                })}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

const predictionTables = [
  [0, 1, 4, 5, 8, 9],
  [0, 1, 4, 5, 8],
  [0, 1, 4, 5, 10, 11],
  [0, 1, 4, 5, 10, 11],
  [0, 1, 4, 5, 8, 9],
  [0, 1, 4, 5, 8, 9],
  [0, 1, 4, 5, 8, 9],
  [0, 1, 4, 5, 8, 9],
  [0, 1, 4, 5, 8, 9],
];
const scoreValues = [8, 8, 10, 10, 8, 8, 8, 8, 8];

export const allPredictors = ["ann", "consensus", "netmhcpan_ba", "netmhcpan_el", "smm", "smmpmbec", "pickpocket", "netmhccons", "netmhcstabpan"];
