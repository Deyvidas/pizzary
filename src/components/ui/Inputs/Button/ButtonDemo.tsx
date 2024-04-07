import R from 'react';

import { Icon } from 'components/ui/DataDisplay/Icon';
import { Typography } from 'components/ui/DataDisplay/Typography';
import { Stack } from 'components/ui/Layouts/Stack';

import { Button, TButtonProps } from './Button';

export function ButtonDemo() {
    const icons: TButtonProps = {
        $endIcon: <Icon $iconId='Close' />,
        $startIcon: <Icon $iconId='Cart' />,
    };
    const hrStyle: R.CSSProperties = {
        height: '.2rem',
        width: '100%',
        backgroundColor: 'black',
    };

    return (
        <Stack $direction='column' $spacing={1}>
            <Typography $variant='h2' $isCentered>
                Button [$size]
            </Typography>
            <Stack>
                <Button {...icons} $size='xxl' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $size='xl' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $size='l' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $size='s' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $size='xs' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $size='xxs' $theme='grayDark'>
                    button
                </Button>
            </Stack>
            <hr style={hrStyle} />

            <Typography $variant='h2' $isCentered>
                Button [$text]
            </Typography>
            <Stack>
                <Button {...icons} $text='h1' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $text='h2' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $text='h3' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $text='h4' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $text='h5' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $text='h6' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $theme='grayDark'>
                    button
                </Button>
            </Stack>
            <hr style={hrStyle} />

            <Typography $variant='h2' $isCentered>
                Button [$theme]
            </Typography>
            <Stack>
                <Button {...icons} $theme='current'>
                    button
                </Button>
                <Button {...icons} $theme='gray'>
                    button
                </Button>
                <Button {...icons} $theme='grayDark'>
                    button
                </Button>
                <Button {...icons}>button</Button>
            </Stack>
            <hr style={hrStyle} />

            <Typography $variant='h2' $isCentered>
                Button [$transform]
            </Typography>
            <Stack>
                <Button {...icons} $transform='capitalize' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $transform='uppercase' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $theme='grayDark'>
                    button
                </Button>
            </Stack>
            <hr style={hrStyle} />

            <Typography $variant='h2' $isCentered>
                Button [$variant]
            </Typography>
            <Stack>
                <Button {...icons} $variant='contained' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $variant='outlined' $theme='grayDark'>
                    button
                </Button>
                <Button {...icons} $variant='text' $theme='grayDark'>
                    button
                </Button>
            </Stack>
        </Stack>
    );
}
