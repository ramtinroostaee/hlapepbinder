export const formSample = {
    "input_sequence_text": "LFGRDLSY",
    "Alleles": "HLA-A*01:01"
}

export const sample = [
    {
        "id": "169917a7-3dd1-4438-8c7f-fb3e16ade87d",
        "type": "result",
        "data": {
            "results": [
                {
                    "type": "peptide_table",
                    "table_data": [
                        [
                            1,
                            "LFGRDLSY",
                            1,
                            8,
                            8,
                            "HLA-A*01:01",
                            1,
                            6.6,
                            15110.8,
                            6.6
                        ]
                    ],
                    "table_columns": [
                        {
                            "name": "sequence_number",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 0,
                            "description": "Index of the input sequence among all input sequences.",
                            "display_name": "seq #",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": "ascending",
                            "row_sort_priority": 2
                        },
                        {
                            "name": "peptide",
                            "type": "text",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 3,
                            "description": "Peptide sequence sequence",
                            "display_name": "peptide",
                            "value_limits": {
                                "unique_values": [
                                    "LFGRDLSY"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "start",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 1,
                            "description": "Peptide sequence start within the context of the input sequence",
                            "display_name": "start",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "end",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 2,
                            "description": "Peptide sequence end within the context of the input sequence",
                            "display_name": "end",
                            "value_limits": {
                                "max": 8,
                                "min": 8
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "length",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 4,
                            "description": "Peptide sequence length",
                            "display_name": "peptide length",
                            "value_limits": {
                                "max": 8,
                                "min": 8
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "allele",
                            "type": "text",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 5,
                            "description": "MHC allele used in the prediction",
                            "display_name": "allele",
                            "value_limits": {
                                "unique_values": [
                                    "HLA-A*01:01"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "peptide_index",
                            "type": "int",
                            "hidden": true,
                            "source": "core",
                            "sort_order": 6,
                            "description": "Serial number of the peptide among all peptides",
                            "display_name": "peptide index",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "median_percentile",
                            "type": "float",
                            "hidden": false,
                            "source": "binding",
                            "sort_order": 2,
                            "description": "The median percentile rank of binding predictions",
                            "display_name": "median binding percentile",
                            "value_limits": {
                                "max": 6.6,
                                "min": 6.6
                            },
                            "default_order": "ascending",
                            "number_of_digits": null,
                            "row_sort_priority": 0
                        },
                        {
                            "name": "ic50",
                            "type": "float",
                            "hidden": false,
                            "source": "binding.ann",
                            "sort_order": 1,
                            "description": "Measured in (nM). Lower number indicates higher affinity.",
                            "display_name": "ann IC50",
                            "value_limits": {
                                "max": 15110.8,
                                "min": 15110.8
                            },
                            "default_order": "ascending",
                            "number_of_digits": 2,
                            "row_sort_priority": 1
                        },
                        {
                            "name": "percentile",
                            "type": "float",
                            "hidden": false,
                            "source": "binding.ann",
                            "sort_order": 1,
                            "description": "The percentile rank generated by comparing the peptide's IC50 against those of a set of random peptides from SWISSPROT database",
                            "display_name": "ann percentile",
                            "value_limits": {
                                "max": 6.6,
                                "min": 6.6
                            },
                            "default_order": "ascending",
                            "number_of_digits": null,
                            "row_sort_priority": null
                        }
                    ]
                },
                {
                    "type": "input_sequence_table",
                    "table_columns": [
                        {
                            "name": "sequence_number",
                            "display_name": "seq #",
                            "type": "int",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": 0,
                            "default_order": "ascending",
                            "description": "the index of sequence",
                            "hidden": false
                        },
                        {
                            "name": "sequence_name",
                            "display_name": "sequence name",
                            "type": "text",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": null,
                            "default_order": null,
                            "description": "the name of sequence",
                            "hidden": false
                        },
                        {
                            "name": "sequence",
                            "display_name": "sequence",
                            "type": "text",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": null,
                            "default_order": null,
                            "description": "sequence",
                            "hidden": false
                        }
                    ],
                    "table_data": [
                        [
                            1,
                            "sequence 1",
                            "LFGRDLSY"
                        ]
                    ]
                }
            ],
            "errors": [],
            "warnings": []
        },
        "status": "done"
    },
    {
        "id": "472f730a-7172-44e5-8629-d942e74bac0a",
        "type": "result",
        "data": {
            "results": [
                {
                    "type": "peptide_table",
                    "table_data": [
                        [
                            1,
                            "LFGRDLSY",
                            1,
                            8,
                            8,
                            "HLA-A*01:01",
                            1,
                            11.3,
                            11.3,
                            11064.709088124373,
                            16,
                            15110.8,
                            6.6
                        ]
                    ],
                    "table_columns": [
                        {
                            "name": "sequence_number",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 0,
                            "description": "Index of the input sequence among all input sequences.",
                            "display_name": "seq #",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": "ascending",
                            "row_sort_priority": 4
                        },
                        {
                            "name": "peptide",
                            "type": "text",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 3,
                            "description": "Peptide sequence sequence",
                            "display_name": "peptide",
                            "value_limits": {
                                "unique_values": [
                                    "LFGRDLSY"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "start",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 1,
                            "description": "Peptide sequence start within the context of the input sequence",
                            "display_name": "start",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "end",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 2,
                            "description": "Peptide sequence end within the context of the input sequence",
                            "display_name": "end",
                            "value_limits": {
                                "max": 8,
                                "min": 8
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "length",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 4,
                            "description": "Peptide sequence length",
                            "display_name": "peptide length",
                            "value_limits": {
                                "max": 8,
                                "min": 8
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "allele",
                            "type": "text",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 5,
                            "description": "MHC allele used in the prediction",
                            "display_name": "allele",
                            "value_limits": {
                                "unique_values": [
                                    "HLA-A*01:01"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "peptide_index",
                            "type": "int",
                            "hidden": true,
                            "source": "core",
                            "sort_order": 6,
                            "description": "Serial number of the peptide among all peptides",
                            "display_name": "peptide index",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "median_percentile",
                            "type": "float",
                            "hidden": false,
                            "source": "binding",
                            "sort_order": 2,
                            "description": "The median percentile rank of binding predictions",
                            "display_name": "median binding percentile",
                            "value_limits": {
                                "max": 11.3,
                                "min": 11.3
                            },
                            "default_order": "ascending",
                            "number_of_digits": null,
                            "row_sort_priority": 0
                        },
                        {
                            "name": "consensus_percentile",
                            "type": "float",
                            "hidden": false,
                            "source": "binding",
                            "sort_order": 2,
                            "description": "The median percentile rank of the binding predictions 'ann', 'smm', and 'comblib_sidney2008'",
                            "display_name": "consensus percentile",
                            "value_limits": {
                                "max": 11.3,
                                "min": 11.3
                            },
                            "default_order": "ascending",
                            "number_of_digits": null,
                            "row_sort_priority": 1
                        },
                        {
                            "name": "ic50",
                            "type": "float",
                            "hidden": false,
                            "source": "binding.smm",
                            "sort_order": 1,
                            "description": "Measured in (nM). Lower number indicates higher affinity.",
                            "display_name": "smm IC50",
                            "value_limits": {
                                "max": 11064.709088124373,
                                "min": 11064.709088124373
                            },
                            "default_order": "ascending",
                            "number_of_digits": 2,
                            "row_sort_priority": 2
                        },
                        {
                            "name": "percentile",
                            "type": "float",
                            "hidden": false,
                            "source": "binding.smm",
                            "sort_order": 1,
                            "description": "The percentile rank generated by comparing the peptide's IC50 against those of a set of random peptides from SWISSPROT database",
                            "display_name": "smm percentile",
                            "value_limits": {
                                "max": 16,
                                "min": 16
                            },
                            "default_order": "ascending",
                            "number_of_digits": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "ic50",
                            "type": "float",
                            "hidden": false,
                            "source": "binding.ann",
                            "sort_order": 1,
                            "description": "Measured in (nM). Lower number indicates higher affinity.",
                            "display_name": "ann IC50",
                            "value_limits": {
                                "max": 15110.8,
                                "min": 15110.8
                            },
                            "default_order": "ascending",
                            "number_of_digits": 2,
                            "row_sort_priority": 3
                        },
                        {
                            "name": "percentile",
                            "type": "float",
                            "hidden": false,
                            "source": "binding.ann",
                            "sort_order": 1,
                            "description": "The percentile rank generated by comparing the peptide's IC50 against those of a set of random peptides from SWISSPROT database",
                            "display_name": "ann percentile",
                            "value_limits": {
                                "max": 6.6,
                                "min": 6.6
                            },
                            "default_order": "ascending",
                            "number_of_digits": null,
                            "row_sort_priority": null
                        }
                    ]
                },
                {
                    "type": "input_sequence_table",
                    "table_columns": [
                        {
                            "name": "sequence_number",
                            "display_name": "seq #",
                            "type": "int",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": 0,
                            "default_order": "ascending",
                            "description": "the index of sequence",
                            "hidden": false
                        },
                        {
                            "name": "sequence_name",
                            "display_name": "sequence name",
                            "type": "text",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": null,
                            "default_order": null,
                            "description": "the name of sequence",
                            "hidden": false
                        },
                        {
                            "name": "sequence",
                            "display_name": "sequence",
                            "type": "text",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": null,
                            "default_order": null,
                            "description": "sequence",
                            "hidden": false
                        }
                    ],
                    "table_data": [
                        [
                            1,
                            "sequence 1",
                            "LFGRDLSY"
                        ]
                    ]
                }
            ],
            "errors": [],
            "warnings": []
        },
        "status": "done"
    },
    {
        "id": "ba01be92-b1dd-4348-b46d-a2d88830ffcf",
        "type": "result",
        "data": {
            "results": [
                {
                    "type": "peptide_table",
                    "table_data": [
                        [
                            1,
                            "LFGRDLSY",
                            1,
                            8,
                            8,
                            "HLA-A*01:01",
                            1,
                            5.4,
                            "-LFGRDLSY",
                            "LFGRDLSY",
                            16581.84,
                            5.4
                        ]
                    ],
                    "table_columns": [
                        {
                            "name": "sequence_number",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 0,
                            "description": "Index of the input sequence among all input sequences.",
                            "display_name": "seq #",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": "ascending",
                            "row_sort_priority": 2
                        },
                        {
                            "name": "peptide",
                            "type": "text",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 3,
                            "description": "Peptide sequence sequence",
                            "display_name": "peptide",
                            "value_limits": {
                                "unique_values": [
                                    "LFGRDLSY"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "start",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 1,
                            "description": "Peptide sequence start within the context of the input sequence",
                            "display_name": "start",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "end",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 2,
                            "description": "Peptide sequence end within the context of the input sequence",
                            "display_name": "end",
                            "value_limits": {
                                "max": 8,
                                "min": 8
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "length",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 4,
                            "description": "Peptide sequence length",
                            "display_name": "peptide length",
                            "value_limits": {
                                "max": 8,
                                "min": 8
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "allele",
                            "type": "text",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 5,
                            "description": "MHC allele used in the prediction",
                            "display_name": "allele",
                            "value_limits": {
                                "unique_values": [
                                    "HLA-A*01:01"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "peptide_index",
                            "type": "int",
                            "hidden": true,
                            "source": "core",
                            "sort_order": 6,
                            "description": "Serial number of the peptide among all peptides",
                            "display_name": "peptide index",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "median_percentile",
                            "type": "float",
                            "hidden": false,
                            "source": "binding",
                            "sort_order": 2,
                            "description": "The median percentile rank of binding predictions",
                            "display_name": "median binding percentile",
                            "value_limits": {
                                "max": 5.4,
                                "min": 5.4
                            },
                            "default_order": "ascending",
                            "number_of_digits": null,
                            "row_sort_priority": 0
                        },
                        {
                            "name": "core",
                            "type": "text",
                            "hidden": true,
                            "source": "binding.netmhcpan_ba",
                            "sort_order": 3,
                            "description": "Always 9 amino acids long sequence. It's a construction used for sequence alignment and identification of binding anchors.",
                            "display_name": "netmhcpan_ba core",
                            "value_limits": {
                                "unique_values": [
                                    "-LFGRDLSY"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "icore",
                            "type": "text",
                            "hidden": true,
                            "source": "binding.netmhcpan_ba",
                            "sort_order": 3,
                            "description": "Substring of peptide that encompasses all residues between P1 and P-omega of the MHC.",
                            "display_name": "netmhcpan_ba icore",
                            "value_limits": {
                                "unique_values": [
                                    "LFGRDLSY"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "ic50",
                            "type": "float",
                            "hidden": false,
                            "source": "binding.netmhcpan_ba",
                            "sort_order": 1,
                            "description": "Measured in (nM). Lower number indicates higher affinity.",
                            "display_name": "netmhcpan_ba IC50",
                            "value_limits": {
                                "max": 16581.84,
                                "min": 16581.84
                            },
                            "default_order": "ascending",
                            "number_of_digits": 2,
                            "row_sort_priority": 1
                        },
                        {
                            "name": "percentile",
                            "type": "float",
                            "hidden": false,
                            "source": "binding.netmhcpan_ba",
                            "sort_order": 1,
                            "description": "The percentile rank generated by comparing the peptide's IC50 against those of a set of random peptides from SWISSPROT database",
                            "display_name": "netmhcpan_ba percentile",
                            "value_limits": {
                                "max": 5.4,
                                "min": 5.4
                            },
                            "default_order": "ascending",
                            "number_of_digits": null,
                            "row_sort_priority": null
                        }
                    ]
                },
                {
                    "type": "netmhcpan_allele_distance",
                    "table_data": [
                        [
                            "HLA-A*01:01",
                            "HLA-A*01:01",
                            0
                        ]
                    ],
                    "table_columns": [
                        {
                            "name": "input_allele",
                            "type": "text",
                            "hidden": false,
                            "source": "allele_distances",
                            "sort_order": 5,
                            "description": "the predicted allele",
                            "display_name": "Input Allele",
                            "value_limits": {
                                "unique_values": [
                                    "HLA-A*01:01"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "closest_allele",
                            "type": "text",
                            "hidden": false,
                            "source": "allele_distances",
                            "sort_order": 5,
                            "description": " its nearest neighbor in the training set",
                            "display_name": "Closest Allele",
                            "value_limits": {
                                "unique_values": [
                                    "HLA-A*01:01"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "allele_distances",
                            "type": "int",
                            "hidden": false,
                            "source": "allele_distances",
                            "sort_order": 6,
                            "description": " Alleles with lower distances to the training set will have more accurate predictions. A distance of 0 indicates a perfect match between alleles and values at or below 0.1 is considered acceptable for generating accurate predictions.",
                            "display_name": "Distance",
                            "value_limits": {
                                "max": 0,
                                "min": 0
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        }
                    ]
                },
                {
                    "type": "input_sequence_table",
                    "table_columns": [
                        {
                            "name": "sequence_number",
                            "display_name": "seq #",
                            "type": "int",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": 0,
                            "default_order": "ascending",
                            "description": "the index of sequence",
                            "hidden": false
                        },
                        {
                            "name": "sequence_name",
                            "display_name": "sequence name",
                            "type": "text",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": null,
                            "default_order": null,
                            "description": "the name of sequence",
                            "hidden": false
                        },
                        {
                            "name": "sequence",
                            "display_name": "sequence",
                            "type": "text",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": null,
                            "default_order": null,
                            "description": "sequence",
                            "hidden": false
                        }
                    ],
                    "table_data": [
                        [
                            1,
                            "sequence 1",
                            "LFGRDLSY"
                        ]
                    ]
                }
            ],
            "errors": [],
            "warnings": []
        },
        "status": "done"
    },
    {
        "id": "e5f660be-8da1-4f4c-b4d5-0d05afce5d58",
        "type": "result",
        "data": {
            "results": [
                {
                    "type": "peptide_table",
                    "table_data": [
                        [
                            1,
                            "LFGRDLSY",
                            1,
                            8,
                            8,
                            "HLA-A*01:01",
                            1,
                            2.9,
                            "-LFGRDLSY",
                            "LFGRDLSY",
                            0.016228,
                            2.9
                        ]
                    ],
                    "table_columns": [
                        {
                            "name": "sequence_number",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 0,
                            "description": "Index of the input sequence among all input sequences.",
                            "display_name": "seq #",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": "ascending",
                            "row_sort_priority": 2
                        },
                        {
                            "name": "peptide",
                            "type": "text",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 3,
                            "description": "Peptide sequence sequence",
                            "display_name": "peptide",
                            "value_limits": {
                                "unique_values": [
                                    "LFGRDLSY"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "start",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 1,
                            "description": "Peptide sequence start within the context of the input sequence",
                            "display_name": "start",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "end",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 2,
                            "description": "Peptide sequence end within the context of the input sequence",
                            "display_name": "end",
                            "value_limits": {
                                "max": 8,
                                "min": 8
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "length",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 4,
                            "description": "Peptide sequence length",
                            "display_name": "peptide length",
                            "value_limits": {
                                "max": 8,
                                "min": 8
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "allele",
                            "type": "text",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 5,
                            "description": "MHC allele used in the prediction",
                            "display_name": "allele",
                            "value_limits": {
                                "unique_values": [
                                    "HLA-A*01:01"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "peptide_index",
                            "type": "int",
                            "hidden": true,
                            "source": "core",
                            "sort_order": 6,
                            "description": "Serial number of the peptide among all peptides",
                            "display_name": "peptide index",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "median_percentile",
                            "type": "float",
                            "hidden": false,
                            "source": "binding",
                            "sort_order": 2,
                            "description": "The median percentile rank of binding predictions",
                            "display_name": "median binding percentile",
                            "value_limits": {
                                "max": 2.9,
                                "min": 2.9
                            },
                            "default_order": "ascending",
                            "number_of_digits": null,
                            "row_sort_priority": 0
                        },
                        {
                            "name": "core",
                            "type": "text",
                            "hidden": true,
                            "source": "binding.netmhcpan_el",
                            "sort_order": 3,
                            "description": "Always 9 amino acids long sequence. It's a construction used for sequence alignment and identification of binding anchors.",
                            "display_name": "netmhcpan_el core",
                            "value_limits": {
                                "unique_values": [
                                    "-LFGRDLSY"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "icore",
                            "type": "text",
                            "hidden": true,
                            "source": "binding.netmhcpan_el",
                            "sort_order": 3,
                            "description": "Substring of peptide that encompasses all residues between P1 and P-omega of the MHC.",
                            "display_name": "netmhcpan_el icore",
                            "value_limits": {
                                "unique_values": [
                                    "LFGRDLSY"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "score",
                            "type": "float",
                            "hidden": false,
                            "source": "binding.netmhcpan_el",
                            "sort_order": 0,
                            "description": "binding prediction score which indicates binding affinity",
                            "display_name": "netmhcpan_el score",
                            "value_limits": {
                                "max": 0.016228,
                                "min": 0.016228
                            },
                            "default_order": "descending",
                            "number_of_digits": 4,
                            "row_sort_priority": 1
                        },
                        {
                            "name": "percentile",
                            "type": "float",
                            "hidden": false,
                            "source": "binding.netmhcpan_el",
                            "sort_order": 1,
                            "description": "The percentile rank generated by comparing the peptide's IC50 against those of a set of random peptides from SWISSPROT database",
                            "display_name": "netmhcpan_el percentile",
                            "value_limits": {
                                "max": 2.9,
                                "min": 2.9
                            },
                            "default_order": "ascending",
                            "number_of_digits": null,
                            "row_sort_priority": null
                        }
                    ]
                },
                {
                    "type": "netmhcpan_allele_distance",
                    "table_data": [
                        [
                            "HLA-A*01:01",
                            "HLA-A*01:01",
                            0
                        ]
                    ],
                    "table_columns": [
                        {
                            "name": "input_allele",
                            "type": "text",
                            "hidden": false,
                            "source": "allele_distances",
                            "sort_order": 5,
                            "description": "the predicted allele",
                            "display_name": "Input Allele",
                            "value_limits": {
                                "unique_values": [
                                    "HLA-A*01:01"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "closest_allele",
                            "type": "text",
                            "hidden": false,
                            "source": "allele_distances",
                            "sort_order": 5,
                            "description": " its nearest neighbor in the training set",
                            "display_name": "Closest Allele",
                            "value_limits": {
                                "unique_values": [
                                    "HLA-A*01:01"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "allele_distances",
                            "type": "int",
                            "hidden": false,
                            "source": "allele_distances",
                            "sort_order": 6,
                            "description": " Alleles with lower distances to the training set will have more accurate predictions. A distance of 0 indicates a perfect match between alleles and values at or below 0.1 is considered acceptable for generating accurate predictions.",
                            "display_name": "Distance",
                            "value_limits": {
                                "max": 0,
                                "min": 0
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        }
                    ]
                },
                {
                    "type": "input_sequence_table",
                    "table_columns": [
                        {
                            "name": "sequence_number",
                            "display_name": "seq #",
                            "type": "int",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": 0,
                            "default_order": "ascending",
                            "description": "the index of sequence",
                            "hidden": false
                        },
                        {
                            "name": "sequence_name",
                            "display_name": "sequence name",
                            "type": "text",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": null,
                            "default_order": null,
                            "description": "the name of sequence",
                            "hidden": false
                        },
                        {
                            "name": "sequence",
                            "display_name": "sequence",
                            "type": "text",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": null,
                            "default_order": null,
                            "description": "sequence",
                            "hidden": false
                        }
                    ],
                    "table_data": [
                        [
                            1,
                            "sequence 1",
                            "LFGRDLSY"
                        ]
                    ]
                }
            ],
            "errors": [],
            "warnings": []
        },
        "status": "done"
    },
    {
        "id": "d2e38f6f-bac3-447e-a861-3efb3e180a2d",
        "type": "result",
        "data": {
            "results": [
                {
                    "type": "peptide_table",
                    "table_data": [
                        [
                            1,
                            "LFGRDLSY",
                            1,
                            8,
                            8,
                            "HLA-A*01:01",
                            1,
                            16,
                            11064.709088124373,
                            16
                        ]
                    ],
                    "table_columns": [
                        {
                            "name": "sequence_number",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 0,
                            "description": "Index of the input sequence among all input sequences.",
                            "display_name": "seq #",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": "ascending",
                            "row_sort_priority": 2
                        },
                        {
                            "name": "peptide",
                            "type": "text",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 3,
                            "description": "Peptide sequence sequence",
                            "display_name": "peptide",
                            "value_limits": {
                                "unique_values": [
                                    "LFGRDLSY"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "start",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 1,
                            "description": "Peptide sequence start within the context of the input sequence",
                            "display_name": "start",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "end",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 2,
                            "description": "Peptide sequence end within the context of the input sequence",
                            "display_name": "end",
                            "value_limits": {
                                "max": 8,
                                "min": 8
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "length",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 4,
                            "description": "Peptide sequence length",
                            "display_name": "peptide length",
                            "value_limits": {
                                "max": 8,
                                "min": 8
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "allele",
                            "type": "text",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 5,
                            "description": "MHC allele used in the prediction",
                            "display_name": "allele",
                            "value_limits": {
                                "unique_values": [
                                    "HLA-A*01:01"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "peptide_index",
                            "type": "int",
                            "hidden": true,
                            "source": "core",
                            "sort_order": 6,
                            "description": "Serial number of the peptide among all peptides",
                            "display_name": "peptide index",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "median_percentile",
                            "type": "float",
                            "hidden": false,
                            "source": "binding",
                            "sort_order": 2,
                            "description": "The median percentile rank of binding predictions",
                            "display_name": "median binding percentile",
                            "value_limits": {
                                "max": 16,
                                "min": 16
                            },
                            "default_order": "ascending",
                            "number_of_digits": null,
                            "row_sort_priority": 0
                        },
                        {
                            "name": "ic50",
                            "type": "float",
                            "hidden": false,
                            "source": "binding.smm",
                            "sort_order": 1,
                            "description": "Measured in (nM). Lower number indicates higher affinity.",
                            "display_name": "smm IC50",
                            "value_limits": {
                                "max": 11064.709088124373,
                                "min": 11064.709088124373
                            },
                            "default_order": "ascending",
                            "number_of_digits": 2,
                            "row_sort_priority": 1
                        },
                        {
                            "name": "percentile",
                            "type": "float",
                            "hidden": false,
                            "source": "binding.smm",
                            "sort_order": 1,
                            "description": "The percentile rank generated by comparing the peptide's IC50 against those of a set of random peptides from SWISSPROT database",
                            "display_name": "smm percentile",
                            "value_limits": {
                                "max": 16,
                                "min": 16
                            },
                            "default_order": "ascending",
                            "number_of_digits": null,
                            "row_sort_priority": null
                        }
                    ]
                },
                {
                    "type": "input_sequence_table",
                    "table_columns": [
                        {
                            "name": "sequence_number",
                            "display_name": "seq #",
                            "type": "int",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": 0,
                            "default_order": "ascending",
                            "description": "the index of sequence",
                            "hidden": false
                        },
                        {
                            "name": "sequence_name",
                            "display_name": "sequence name",
                            "type": "text",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": null,
                            "default_order": null,
                            "description": "the name of sequence",
                            "hidden": false
                        },
                        {
                            "name": "sequence",
                            "display_name": "sequence",
                            "type": "text",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": null,
                            "default_order": null,
                            "description": "sequence",
                            "hidden": false
                        }
                    ],
                    "table_data": [
                        [
                            1,
                            "sequence 1",
                            "LFGRDLSY"
                        ]
                    ]
                }
            ],
            "errors": [],
            "warnings": []
        },
        "status": "done"
    },
    {
        "id": "fbf9cc8b-cc88-4402-9d2c-4bd2988aceb2",
        "type": "result",
        "data": {
            "results": [
                {
                    "type": "peptide_table",
                    "table_data": [
                        [
                            1,
                            "LFGRDLSY",
                            1,
                            8,
                            8,
                            "HLA-A*01:01",
                            1,
                            42,
                            37120.173718160346,
                            42
                        ]
                    ],
                    "table_columns": [
                        {
                            "name": "sequence_number",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 0,
                            "description": "Index of the input sequence among all input sequences.",
                            "display_name": "seq #",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": "ascending",
                            "row_sort_priority": 2
                        },
                        {
                            "name": "peptide",
                            "type": "text",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 3,
                            "description": "Peptide sequence sequence",
                            "display_name": "peptide",
                            "value_limits": {
                                "unique_values": [
                                    "LFGRDLSY"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "start",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 1,
                            "description": "Peptide sequence start within the context of the input sequence",
                            "display_name": "start",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "end",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 2,
                            "description": "Peptide sequence end within the context of the input sequence",
                            "display_name": "end",
                            "value_limits": {
                                "max": 8,
                                "min": 8
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "length",
                            "type": "int",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 4,
                            "description": "Peptide sequence length",
                            "display_name": "peptide length",
                            "value_limits": {
                                "max": 8,
                                "min": 8
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "allele",
                            "type": "text",
                            "hidden": false,
                            "source": "core",
                            "sort_order": 5,
                            "description": "MHC allele used in the prediction",
                            "display_name": "allele",
                            "value_limits": {
                                "unique_values": [
                                    "HLA-A*01:01"
                                ]
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "peptide_index",
                            "type": "int",
                            "hidden": true,
                            "source": "core",
                            "sort_order": 6,
                            "description": "Serial number of the peptide among all peptides",
                            "display_name": "peptide index",
                            "value_limits": {
                                "max": 1,
                                "min": 1
                            },
                            "default_order": null,
                            "row_sort_priority": null
                        },
                        {
                            "name": "median_percentile",
                            "type": "float",
                            "hidden": false,
                            "source": "binding",
                            "sort_order": 2,
                            "description": "The median percentile rank of binding predictions",
                            "display_name": "median binding percentile",
                            "value_limits": {
                                "max": 42,
                                "min": 42
                            },
                            "default_order": "ascending",
                            "number_of_digits": null,
                            "row_sort_priority": 0
                        },
                        {
                            "name": "ic50",
                            "type": "float",
                            "hidden": false,
                            "source": "binding.smmpmbec",
                            "sort_order": 1,
                            "description": "Measured in (nM). Lower number indicates higher affinity.",
                            "display_name": "smmpmbec IC50",
                            "value_limits": {
                                "max": 37120.173718160346,
                                "min": 37120.173718160346
                            },
                            "default_order": "ascending",
                            "number_of_digits": 2,
                            "row_sort_priority": 1
                        },
                        {
                            "name": "percentile",
                            "type": "float",
                            "hidden": false,
                            "source": "binding.smmpmbec",
                            "sort_order": 1,
                            "description": "The percentile rank generated by comparing the peptide's IC50 against those of a set of random peptides from SWISSPROT database",
                            "display_name": "smmpmbec percentile",
                            "value_limits": {
                                "max": 42,
                                "min": 42
                            },
                            "default_order": "ascending",
                            "number_of_digits": null,
                            "row_sort_priority": null
                        }
                    ]
                },
                {
                    "type": "input_sequence_table",
                    "table_columns": [
                        {
                            "name": "sequence_number",
                            "display_name": "seq #",
                            "type": "int",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": 0,
                            "default_order": "ascending",
                            "description": "the index of sequence",
                            "hidden": false
                        },
                        {
                            "name": "sequence_name",
                            "display_name": "sequence name",
                            "type": "text",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": null,
                            "default_order": null,
                            "description": "the name of sequence",
                            "hidden": false
                        },
                        {
                            "name": "sequence",
                            "display_name": "sequence",
                            "type": "text",
                            "source": "core",
                            "sort_order": 0,
                            "row_sort_priority": null,
                            "default_order": null,
                            "description": "sequence",
                            "hidden": false
                        }
                    ],
                    "table_data": [
                        [
                            1,
                            "sequence 1",
                            "LFGRDLSY"
                        ]
                    ]
                }
            ],
            "errors": [],
            "warnings": []
        },
        "status": "done"
    },
    {
        "id": "4f5294ee-01af-40c5-9f5c-2ad313b33a3a",
        "type": "result",
        "data": {
            "errors": [
                "The following errors occurred during processing.  If these issues persist, please contact help@iedb.org for assistance and include stage reference number 07484d37-9a75-418e-a0cb-fa04f3e5efde",
                "Runtime error: Completion flag file missing for job 0: /scratch/stages/tmpzmpu19e4/0.complete",
                "Expected output missing for job id 0: /scratch/stages/tmpzmpu19e4/results/0.json",
                "Runtime error: Completion flag file missing for job 1: /scratch/stages/tmpzmpu19e4/1.complete",
                "Expected output missing for job id 1: /scratch/stages/tmpzmpu19e4/aggregate/aggregated_result.json",
                "[Errno 2] No such file or directory: '/scratch/stages/tmpzmpu19e4/aggregate/aggregated_result.json'",
                "Key error converting cmd results to API: 'results' not found"
            ],
            "warnings": []
        },
        "status": "error"
    },
    {
        "errors": [
            "alleles ['HLA-A*01:01'] are not available for any of selected predictors"
        ],
        "warnings": [
            "netmhccons cannot predict binding for allele HLA-A*01:01"
        ]
    },
    {
        "errors": [
            "alleles ['HLA-A*01:01'] are not available for any of selected predictors"
        ],
        "warnings": [
            "netmhcstabpan cannot predict binding for allele HLA-A*01:01"
        ]
    }
];