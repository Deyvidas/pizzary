import s from './[FTName|pascalcase].module.scss';

export function [FTName|pascalcase]() {
    return (
        <div className='Container'>
            <h1
                style={{
                    paddingBlock: '200px',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#804021',
                }}
            >
                [FTName|sentencecase]
            </h1>
        </div>
    );
}