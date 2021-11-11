import { Grid } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
    display: 'none',
});


export default function UploadPriceSheet(props) {
    retun(
        <Grid container>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Grid item xs={6}>
                    <label htmlFor="excel-file-button">
                        <Input accept="image/*" id="excel-file-button" multiple type="file" />
                        <Button variant="contained" component="span">
                            Upload
                        </Button>
                    </label>
                </Grid>
                <Grid item xs={6}>
                    <Button variant='contained' component='span'
                        onClick={ }
                    >
                        Add
                    </Button>
                </Grid>
            </Stack>

        </Grid>
    );
}