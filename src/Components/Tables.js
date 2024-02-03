"use client";

import {CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const Tables = ({submitResults, formData}) => {

    console.log(submitResults)
    return (<>
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
        <div className={"mt-8"}>{submitResults?.findIndex(res => typeof res === "string") !== -1 &&
            <CircularProgress/>}</div>

        <div className={"max-w-[850px]"}>
            {submitResults.map((result, index) => {
                if (result?.errors?.length) {
                    return (<>
                        <div className={"my-8"}>
                            <b>{allPredictors[index]}:</b> {result?.errors[0]}</div>
                        {/*<div>{result?.errors[1]}</div>*/}
                    </>);
                } else if (typeof result !== "string") {
                    if (result?.status === "error") {
                        return (<>
                            <div className={"my-8"}>
                                <b>{allPredictors[index]}:</b> {result?.data?.errors[0]}</div>
                        </>)
                    } else {
                        return <TableMaker result={result?.data?.results[0]} index={index}/>;
                    }
                }
            })}
        </div>
    </>);
}

export default Tables;

const TableMaker = ({result, index}) => {

    return (
        <>
            <h3 className={"text-center mt-16"}>{(allPredictors[index]?.toUpperCase())}</h3>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {predictionTables[index].map((i, cellIndex) => {
                                    const style = cellIndex === 0 ? {component: "th", scope: "row"} : {align: "left"};
                                    return (<TableCell {...style} key={result?.table_columns[i].display_name}>
                                        {result?.table_columns[i].display_name}
                                    </TableCell>)
                                }
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {result?.table_data?.map((dataArray, dataIndex) =>
                            <TableRow key={dataIndex} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                {predictionTables[index].map((i, cellIndex) => {
                                    const style = cellIndex === 0 ? {component: "th", scope: "row"} : {align: "left"};
                                    return (<TableCell {...style}>{dataArray[i]}</TableCell>)
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

export const allPredictors = ["ann", "consensus", "netmhcpan_ba", "netmhcpan_el", "smm", "smmpmbec", "pickpocket", "netmhccons", "netmhcstabpan"];
