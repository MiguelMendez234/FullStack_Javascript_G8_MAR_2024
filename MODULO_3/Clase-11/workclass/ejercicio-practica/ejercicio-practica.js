const fs = require('fs');

const isLogged = true;

function getDepartments(deparments) {
    return new Promise((resolve, reject) => {
        if (!isLogged) {
            reject('No estas logueado dentro de la app');
            return;
        }

        setTimeout(() => {
            resolve(deparments);
        }, 4000);
    });
}

function getMunicipio(departmentId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            fs.readFile('municipios.json', 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                    return err;
                }
    
                const municipios = JSON.parse(data);
                const municipioByDeparment = municipios.find(municipio => municipio.departamentoId === departmentId);

                resolve(municipioByDeparment);
            });
        }, 5000);
    });
}

fs.readFile('departamentos.json', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return err;
    }

    const departamentos = JSON.parse(data);

    getDepartments(departamentos)
        .then(departments => {
            return Promise.all(departments.map(element => getMunicipio(element.id)));
        })
        .then(municipios => console.log('municipios: ', municipios))
        .catch(err => console.log(err));
});