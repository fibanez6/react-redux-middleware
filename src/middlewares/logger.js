export default function ({ dispatch }) {
    return next => action => {
        console.log(action);

        return next(action);
    };
}