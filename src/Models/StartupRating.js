import firebase from '../services/firebase'

const MainTable = 'Rate'

const database = firebase.database();


export function SaveRate(values) {
    const { StartupName, proposta, pitch, desenv, comment } = values;

    const StartupName2 = StartupName.replace(/[^a-zA-Z0-9]+/g,'');

    console.log(StartupName2)

    const ref = database.ref(`${MainTable}/${StartupName2}`);
    return new Promise((resolve, reject) => {
        ref.push(values)
            .then(res => {
                resolve({ res, success: true });
            }).catch(err => {
                reject({ err, success: false });
            })
    })
}