import R from 'react';

import { Stack } from 'components/ui/Layouts/Stack';

import { Typography } from './Typography';

export function TypographyDemo() {
    const lorem =
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, voluptates deleniti itaque doloribus necessitatibus mollitia harum.';
    const hrStyle: R.CSSProperties = {
        height: '.2rem',
        width: '100%',
        backgroundColor: 'black',
    };

    return (
        <Stack $direction='column'>
            <Typography $variant='h2' $isCentered>
                Typography [$variant]
            </Typography>
            <Stack $direction='column'>
                <Typography>p -- {lorem}</Typography>
                <Typography $variant='h6'>h6 -- {lorem}</Typography>
                <Typography $variant='h5'>h5 -- {lorem}</Typography>
                <Typography $variant='h4'>h4 -- {lorem}</Typography>
                <Typography $variant='h3'>h3 -- {lorem}</Typography>
                <Typography $variant='h2'>h2 -- {lorem}</Typography>
                <Typography $variant='h1'>h1 -- {lorem}</Typography>
            </Stack>
            <hr style={hrStyle} />

            <Typography $variant='h2' $isCentered>
                Typography [$isCentered]
            </Typography>
            <Stack $direction='column'>
                <Typography $isCentered>{lorem}</Typography>
                <Typography>{lorem}</Typography>
            </Stack>
            <hr style={hrStyle} />

            <Typography $variant='h2' $isCentered>
                Typography [$size]
            </Typography>
            <Stack $direction='column'>
                <Typography $size='xxl'>xxl -- {lorem}</Typography>
                <Typography $size='xl'>xl -- {lorem}</Typography>
                <Typography $size='l'>l -- {lorem}</Typography>
                <Typography>normal -- {lorem}</Typography>
                <Typography $size='s'>s -- {lorem}</Typography>
                <Typography $size='xs'>xs -- {lorem}</Typography>
                <Typography $size='xxs'>xxs -- {lorem}</Typography>
            </Stack>
            <hr style={hrStyle} />

            <Typography $variant='h2' $isCentered>
                Typography [$textTransform]
            </Typography>
            <Stack $direction='column'>
                <Typography $textTransform='capitalize'>capitalize -- {lorem}</Typography>
                <Typography $textTransform='uppercase'>uppercase -- {lorem}</Typography>
                <Typography>none -- {lorem}</Typography>
            </Stack>
            <hr style={hrStyle} />

            <Typography $variant='h2' $isCentered>
                Typography [$textWrap]
            </Typography>
            <Stack $direction='column' style={{ maxWidth: '700px' }}>
                <Typography $textWrap='balance'>balance -- {lorem}</Typography>
                <Typography $textWrap='nowrap'>nowrap -- {lorem}</Typography>
                <Typography $textWrap='wrap'>wrap -- {lorem}</Typography>
            </Stack>
            <hr style={hrStyle} />

            <Typography $variant='h2' $isCentered>
                Typography [$theme]
            </Typography>
            <Stack $direction='column'>
                <Typography $theme='current'>current -- {lorem}</Typography>
                <Typography $theme='gray'>gray -- {lorem}</Typography>
                <Typography>grayDark -- {lorem}</Typography>
                <Typography $theme='green'>green -- {lorem}</Typography>
            </Stack>
        </Stack>
    );
}
