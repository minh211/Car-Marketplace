/* eslint-disable react/function-component-definition */
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Head from 'next/head';

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </div>
    );
}
