let empleados = [{
    id: 1,
    nombre: "Fernando"
}, {
    id: 2,
    nombre: "Carlos"
}, {
    id: 3,
    nombre: "Sandy"
}]
let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`No existe el empleado ${id}`)
        } else {
            resolve(empleadoDB)
        }
    })
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioEmpleado = salarios.find(salario => {
            return salario.id === empleado.id
        })
        if (!salarioEmpleado) {
            reject(`No existe salario para ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioEmpleado.salario,
                id: empleado.id
            })
        }
    });
}

// getEmpleado(4).then(empleado => {
//     getSalario(empleado).then(
//         salario => {
//             console.log(salario)
//         }, (err) => {
//             console.log(err)
//         }
//     )
// }, (err) => {
//     console.log(err)
// })

//encadenando promesas

getEmpleado(3).then(empleado => {
        return getSalario(empleado)
    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`)
    })
    .catch(err => {
        console.log(err)
    })