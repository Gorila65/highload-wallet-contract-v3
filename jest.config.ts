import type { Config } from '
npm install --save-dev @types/jest
st'

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
;

export default config;

