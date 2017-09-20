import C from './../constants.js';
export const error = (states, action) => {
    return console.log(`
            Error
            =====
            ${states.map((state) => {
                return state + '\n '
            })}
    `)
}