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


let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        callback(`no existe ${id}`)
    } else {
        callback(null, empleadoDB);
    }
}
let getSalario = (empleado, callback2) => {
    console.log(empleado.id, "l31")
    let salarioEmpleado = salarios.find(salario => {
        return salario.id === empleado.id
    })
    if (!salarioEmpleado) {
        callback2(`No existe salario ${empleado.nombre}`)
    } else {
        callback2(null, {
            nombre: empleado.nombre,
            salario: salarioEmpleado.salario,
            id: empleado.id
        })
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err)
    }
    console.log(empleado)
    getSalario(empleado, (err, empleado) => {
        if (err) {
            return console.log(err)
        } else {
            null
        }
        getSalario(empleado, (err, resp) => {
            if (err) {
                return console.log(err)
            }
            console.log(`El salario de ${resp.nombre} es de ${resp.salario}`)
        })
    })
})